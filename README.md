#### [BetweenAS3](https://github.com/hyoshida/BetweenAS3) 를 JavaScript 버전으로 변환하였습니다. 

##### DisplayObjectUpdater, PointUpdater는 [Pixi.js](https://github.com/pixijs/pixi.js)의 PIXI.DisplayObject, PIXI.Point를 업데이트 하도록 작성되었습니다.

<br>

<br>

#### BetweenAS3 들어가기

- 크게 3 부분으로 나뉩니다.
  - Ticker
  - Tween
  - Updater
- Ticker
  - 하나의 EnterFrame 으로 등록된 모든 Tween 의 tick 함수를 호출할 수 있도록 LinkedList 를 관리합니다.
- Tween
  - tick 을 관리합니다. 호출 순서는 tick() -> internalUpdate -> update() -> udpateObject() 순으로 반복 호출됩니다.
  - play() 함수를 호출하면 Ticker에 Tween을 등록하게 되고 등록하면 tick 이 발생합니다.
  - tick 이 발생되는 동안 각종 콜백과 이벤트 관련 처리를 합니다. 
  - 종류
    - Parallel, Serial, Delayed, Repeated … 등등
- Updater
  - target 의 객체에 따라 Updater 를 반환하고 해당 클래스에 따라 업데이트 방법을 기술합니다.
    - 종류
      - ObjectUpdater, PointUpdater, DisplayObjectUpdater … 등등

<br>

<br>

#### FLOW

##### BetweenAS3 초기화

- _ticker = new EnterFrameTicker();
- _ticker.start();
- _updaterClassRegistry = new ClassRegistry();
- _updaterFactory = new UpdaterFactory( _updaterClassRegistry );
- ObjectUpdater.register( _updaterClassRegistry );
  - registry.registerClassWithTargetClassAndPropertyName(ObjectUpdater, Object, '*');


<br>

<br>


##### BetweenAS3.tween 함수 실행

tween(target:Object, to:Object, from:Object = null, time:Number = 1.0, easing:IEasing = null):IObjectTween

- var tween:ObjectTween = new ObjectTween(_ticker);
- tween.updater = _updaterFactory.create(target, to, from);
  - if (source != null)
    - for(name in source)
      - if ((value = source[name]) is Number)  // 속성 처리 (x, y, rotation)
        - getUpdaterFor(target, name, map, updaters).setSourceValue(name, Number(value), isRelative);
      - else  // filter 처리 (blurFilter, colorMatrixFilter)
        - parent = getUpdaterFor(target, name, map, updaters);
        - child = create(parent.getObject(name), dest != null ? dest[name] : null, value);
        - updaters.push(new UpdaterLadder(parent, child, name));
  - if (dest != null)
    - for(name in dest)
      - getUpdaterFor(target, name, map, updaters).setDestinationValue(name, Number(value), isRelative);
- tween.play();
  - AbstractTween.play();
    - startTime = _ticker.time - _position;
    - _ticker.addTickerListener(this);
    - tick( _ticker.time );
      - var t:Number = time - _startTime; (0.0 ~ 1);
      - _position = t;
      - internalUpdate(t); (ObjectTween.internalUpdate)
        - factor = _easing.calculate(time, 0.0, 1.0, _duration);
        - _updater.update(factor);

<br>

<br>

#### Filter 처리
- '_blurFilter', '_colorMatrixFilter' 같은 속성이 들어오면 UpdaterLadder 를 생성합니다. UpdaterLadder는 부모로 DisplayObjectUpdater를 자식으로 ObjectUpdater를 가지면서 update 때 자식의 객체 값을 업데이트하고 부모에게 그 값을 set 하도록 되어있습니다. 
- 필터 적용 시 IUpdater에서 getObject와 setObject를 사용합니다. 
  - IUpdater
    - getObject
      - if (propertyName == '_blurFilter') {
        ​	return this.getFilterByClass(PIXI.filters.BlurFilter);
        }
    - setObject
      - if (propertyName == '_blurFilter') {
        ​	this.setFilterByClass(value, PIXI.filters.BlurFilter);
        }

<br>

<br>

#### EnterFrameTicker

- _tickerListenerPaddings 생성

  - | [0]  | prev = null | next = [1]  |
    | ---- | ----------- | ----------- |
    | [1]  | prev = [0]  | next = [2]  |
    | [2]  | prev = [1]  | next = [3]  |
    | [9]  | prev = [8]  | next = null |


- AbstractTween.tick(t) 호출 과정

  - BetweenAS3 초기화 시 _ticker 생성

  - BetweenAS3.tween() 호출

    - var tween:ObjectTween = new ObjectTween(_ticker);

    - tween.play();

      - AbstractTween.play

        - _ticker.addTickerListener(this); (ticker에 트위너 등록하면 tick함수가 반복 호출됩니다.)

          - | _numListeners | in _first | prevListener | nextListener | out _first |
            | ------------- | --------- | ------------ | ------------ | ---------- |
            | 0             | null      | 1            | null         | 0          |
            | 1             | 0         | 2            | 0            | 1          |
            | 2             | 1         | 3            | 1            | 2          |
            | 3             | 2         | null         | 2            | 3          |

          - _ticker.update

            - -> AbstractTween.tick(t); 반복 호출

        - tick(t);

          - 트윈이 완료되면 true를 반환합니다.

- **기본 흐름**

  - addTickerListener
    - addTickerListener 를 통해 tween 을 등록합니다. 등록되면 duration 이 끝날때 까지 tick 함수가 반복 호출됩니다. 등록되는 과정에서 tween 들 끼리 LinkedList 를 구성하며 맨 마지막 등록된 tween 을 _first 에 대입합니다. 
  - update
    - update 함수는 EnterFrame 으로 반복 호출됩니다. update 함수는 _tickerListenerPaddings 의 리스너를 모두 돌면서 nextListener 가 있으면 tick() 함수를 호출합니다. 만약 _first 가 있으면 _tickerListenerPaddings 에 연결하므로 _first 에 등록된 tween 을 찾아 돌면서 tick() 함수를 호출하는 구조입니다. 
  - tick 링크 삭제는 tick(t) 의 반환값이 true 를 라면 LinkedList 에서 삭제되면서 tick 호출이 멈춥니다.
    - **삭제 과정**
      - update 함수는 기본적으로 _tickerListenerPaddings 을 돌면서 tick 함수를 계속 호출 합니다.
      - n = _numListeners
      - _tickerListenerPaddings 의 리스너를 p0, p1, … p9 라 부릅니다.
      - 4개 tween 등록 후 update 함수 실행 결과
        - n = 4, _first = 3
        - p4 와 _first 를 링크합니다. (8개 이상이 될 경우 순환 되어야 하니까 연결합니다.)
        - while(listener.nextListner != null) (이 곳에서 연결된 _first 를 찾아서 tick 을 호출합니다.)
          - p4.next -> 3 -> 3.prev -> p4 (p4 -> _first 를 연결)
          - [p0 -> p1] p0
          - [p1 -> p2] p1
          - [p2 -> p3] p2
          - [p3 -> p4] p3
          - [p4 -> p5] p4
          - 3.tick(0.29) (<- 연결된 _first 의 tick 함수 호출)
          - [p5 -> p6] 3
          - 2.tick(0.29) (<- _first 에 연결된 LinkedList 가 순차 호출)
          - [p6 -> p7] 2
          - 1.tick(0.29) (<- _first 에 연결된 LinkedList 가 순차 호출)
          - [p7 -> p8] 1
          - 0.tick(0.29) (<- 0 tween 이 종료되어 tick 함수 리턴이 true 로 반환된 상태)
            - linked 1.next -> null
          - p4.next -> p5 , _first: 3 (update 함수 종료 시 p4의 next 를 원래대로 p5로 변경)
      - 중간에 링크 삭제 시 함수 흐름
        - 중간에 0, 1 이 삭제되고 3, 2 LinkedList 만 남은 경우
        - n = 6, _first = 3
          - p6.next -> 3 -> 3.prev -> p6
          - [p0 -> p1] p0
          - [p1 -> p2] p1
          - [p2 -> p3] p2
          - [p3 -> p4] p3
          - [p4 -> p5] p4
          - [p5 -> p6] p5
          - [p6 -> p7] p6
          - 3.tick(0.525) (<- _first tick 호출 결과 트윈이 종료 되어서 새로운 링크 연결)
            - linked p6.next -> 2 (<- 남은 2를 연결)
            - linked 2.prev -> p6
          - **[p7 -> p8] p6 (<- 삭제 이후 다시 p6 를 진입시킵니다. p6.next 인 2가 호출되도록)**
          - 2.tick(0.525)
          - p6.next -> p7 , _first: 2

<br>

<br>

#### SerialTween duration 계산

- if (lastTime <= (duration) && ld <= time) {
  ​	this._a.update(time - ld);
  }
  ld = duration;

< br>

< br>

#### RepeatedTween duration 계산

- if (time >= 0) {
  ​	time -= time < this._duration ? this._baseDuration * parseInt(time / this._baseDuration) : this._duration - this._baseDuration;
  }

<br>

<br>


#### BIT FLAG

##### BIT ON

- 플래그 |= 마스크
  - flag |= 1;    // 0000 0001 마스크와 비트 OR로 여덟 번째 비트를 켬

##### BIT OFF

- 플래그 &= ~마스크
  - flag &= ~2;    // 1111 1101 마스크 값 2의 비트를 뒤집은 뒤 비트 AND로 일곱 번째 비트를 끔

##### BIT TOGGLE

- 플래그 ^= 마스크
  - flag ^= 2;    // 0000 0010 마스크와 비트 XOR로 일곱 번째 비트를 토글

##### BIT ON/OFF CHECk

- 플래그 & 마스크
  - if (flag & 1)
    ​    trace(‘0000 0001 ON’);
    else
    ​    trace(‘0000 0001 OFF’);