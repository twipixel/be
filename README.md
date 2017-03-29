#### FLOW

##### BetweenAS3 등록 과정

- _ticker = new EnterFrameTicker();
- _ticker.start();
- _updaterClassRegistry = new ClassRegistry();
- _updaterFactory = new UpdaterFactory( _updaterClassRegistry );
- ObjectUpdater.register( _updaterClassRegistry );
  - registry.registerClassWithTargetClassAndPropertyName(ObjectUpdater, Object, '*');






##### BetweenAS3.tween 실행

tween(target:Object, to:Object, from:Object = null, time:Number = 1.0, easing:IEasing = null):IObjectTween

- var tween:ObjectTween = new ObjectTween(_ticker);
- tween.updater = _updaterFactory.create(target, to, from);
  - if (source != null)
    - for(name in source)
      - // 속성 처리 (x, y, rotation)
      - if ((value = source[name]) is Number) 
        - getUpdaterFor(target, name, map, updaters).setSourceValue(name, Number(value), isRelative);
      - // filter 처리 (blurFilter, colorMatrixFilter)
      - else 
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



#### EnterFrameTicker

- 생성자

  - _tickerListenerPaddings 에 생성되는 리스너의 형태

    - | [0]  | prev = null | next = [1]  |
      | ---- | ----------- | ----------- |
      | [1]  | prev = [0]  | next = [2]  |
      | [2]  | prev = [1]  | next = [3]  |
      | [9]  | prev = [8]  | next = null |


- BetweenAS3

  - _ticker:EnterFrameTicker

  - tween()

    - var tween:ObjectTween = new ObjectTween(_ticker);

    - tween.play();

      - AbstractTween.play

        - _ticker.addTickerListener(this);

          - | _numListeners | in _first | prevListener | nextListener | out _first |
            | ------------- | --------- | ------------ | ------------ | ---------- |
            | 0             | null      | 1            | null         | 0          |
            | 1             | 0         | 2            | 0            | 1          |
            | 2             | 1         | 3            | 1            | 2          |
            | 3             | 2         | null         | 2            | 3          |

        - tick(t);

          - _ticker.update
            - -> AbstractTween.tick(t); 을 호출



#### SerialTween

- if (lastTime <= (duration) && ld <= time) {
  ​	this._a.update(time - ld);
  }
  ld = duration;



#### RepeatedTween

- if (time >= 0) {
  ​	time -= time < this._duration ? this._baseDuration * parseInt(time / this._baseDuration) : this._duration - this._baseDuration;
  }




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