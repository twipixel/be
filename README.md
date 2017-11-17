<br>

[SPARK Project 공식 홈페이지](http://www.libspark.org/wiki/BetweenAS3/en)

[BetweenAS3](https://github.com/hyoshida/BetweenAS3)를 JavaScript에서 사용 가능하도록 변환하였습니다.

자세한 설명은 BetweenAS3 공식 홈페이지를 참조하세요.

<br>

#### 관련 링크 

- [데모 페이지](https://twipixel.github.io/be/dist/index.html)
  - [Tween](https://twipixel.github.io/be/dist/tween/index.html)
  - [Easing](https://twipixel.github.io/be/dist/easing/index.html)
  - [Example](https://twipixel.github.io/be/dist/example/index.html)
- [트위너 성능 비교](https://github.com/twipixel/be/wiki)

<br>

#### Easing

- Back
- Bounce
- Circ (or Circular)
- Cubic
- Elastic
- Expo (or Exponential)
- Linear
- Quad (or Quadratic)
- Quart (or Quartic)
- Quint (or Quintic)
- Sine

<br>

#### Events

- PLAY
- STOP
- UPDATE
- COMPLETE

<br>

#### Event Callback

- onPlay
- onPlayParams
- onStop
- onStpoParams
- onUpdate
- onUpdateParams
- onComplete
- onCompleteParams

<br>

#### 지원 속성

- ###### Point

  - x, y


- ###### DisplayObject

  - x, y
  - width
  - height
  - alpha 
  - rotation
  - skewX, skewY
  - scaleX, scaleY


<br>

#### Be 사용 예제

###### tween

  ```javascript
  var tween = Be.tween(this.icon, {x: 250, y: 250}, {x: 0}, 2, Quad.easeInOut);
  tween.play();
  ```

###### to

  ```javascript
  var tween = Be.to(this.icon, {x: 300, y: 250}, 2, Elastic.easeInOut);
  tween.play();
  ```

###### from

  ```
  var tween = Be.from(this.icon, {x: 800, y: 600}, 2, Bounce.easeOut);
  tween.play();
  ```

###### apply

  ```javascript
  Be.apply(this.icon, {x: 250, y: 250}, {x: 0}, 2, 0.5, Sine.easeOut);
  ```

###### bezier, bezierTo, bezierFrom, onPlay, onUpdate, onUpdateParams, onComplete

  ```javascript
  var tween = Be.bezier(this.icon, {x: 400, y: 400}, {x: icon.x, y: icon.y}, {
      x: controlPoint.x,
      y: controlPoint.y
  }, 2, Quad.easeOut);
  tween.onPlay = () => {
      console.log('onPlay');
  };
  tween.onUpdateParams = [this.icon];
  tween.onUpdate = (target) => {
      console.log(`onUpdate icon[${this.icon.x}, ${this.icon.y}] target[${target.x}, ${target.y}]`);
      path.beginFill(controlPointColor);
      path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
      path.endFill();
  };
  tween.onComplete = () => {
      console.log('onComplete');
  };
  tween.play();
  ```

###### physical, physicalTo, physicalFrom

  ```javascript
  var uniform = Be.physical(icon, {x: 400, y: 100}, {x: 0, y: 0}, Physical.uniform(12));
  uniform.onPlay = () => {
      console.log('onPlay');
  };
  uniform.onUpdate = () => {
      console.log(`onUpdate (${icon.x}, ${icon.y} )`);
      path.beginFill(controlPointColor);
      path.drawRect(icon.x, icon.y, controlPointSize, controlPointSize);
      path.endFill();
  };
  uniform.onComplete = () => {
      console.log('onComplete');
  };
  uniform.play();

  var icon1 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
  var icon2 = new PIXI.Sprite.fromImage('../../asset/image/icon/github.png');
  this.stage.addChild(icon1);
  this.stage.addChild(icon2);

  var accelerate = Be.physical(icon1, {x: 400, y: 200}, {x: 0, y: 0}, Physical.accelerate(2.0, 4.0));
  accelerate.onComplete = () => {
      this.stage.removeChild(icon1);
      icon1.destroy();
  };
  accelerate.play();

  var exponential = Be.physical(icon2, {x: 400, y: 300}, {x: 0, y: 0}, Physical.exponential(0.2));
  exponential.onComplete = () => {
      this.stage.removeChild(icon2);
      icon2.destroy();
  };
  exponential.play();
  ```

###### physicalApply

  ```javascript
  Be.physicalApply(icon, {x: 400, y: 100}, {x: 0, y: 0}, 0.5, Physical.uniform(12));
  ```

###### parallel

  ```javascript
  var move = Be.tween(icon, {x: 400}, {x: 100}, 2, Expo.easeOut);
  var scale1 = Be.tween(icon, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
  var scale2 = Be.tween(icon, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
  var scale3 = Be.tween(icon, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
  var scale4 = Be.tween(icon, {scaleX: 1, scaleY: 1}, {scaleX: 0.2, scaleY: 0.2}, 2, Elastic.easeOut);
  var group = Be.parallel(move, scale1, scale2, scale3, scale4);
  group.play();
  ```

###### parallelTweens

  ```javascript
  var tweens = [move, scale1, scale2, scale3, scale4];
  var group = Be.parallelTweens(tweens);
  group.play();
  ```

###### serial

  ```javascript
  var time = 0.2;
  var move1 = Be.to(icon, {x: 400, y: 400}, time, Back.easeOut);
  var move2 = Be.to(icon, {x: 0, y: 0}, time, Exponential.easeOut);
  var move3 = Be.to(icon, {x: 300, y: 300}, time, Quartic.easeOut);
  var move4 = Be.to(icon, {x: 100, y: 100}, time, Quart.easeOut);
  var move5 = Be.to(icon, {x: 200, y: 200}, time, Quad.easeOut);
  var group = Be.serial(move1, move2, move3, move4, move5);
  group.play();
  ```

###### serialTweens

  ```javascript
  var tweens = [move1, move2, move3, move4, move5];
  var group = Be.serialTweens(tweens);
  group.play();
  ```

###### reverse

  ```javascript
  var tween = Be.tween(icon, {x: 500}, {x: 100}, 1, Quad.easeOut);
  var reverse = Be.reverse(tween, true);
  reverse.play();
  ```

###### repeat

  ```javascript
  var tween = Be.tween(icon, {x: 500}, {x: 100}, 1, Quad.easeOut);
  var repeat = Be.repeat(tween, 3);
  repeat.play();
  ```

###### scale

  ```javascript
  var tween = Be.tween(icon, {x: 500}, {x: 100}, 1, Quad.easeOut);
  var scale = Be.scale(tween, 3);
  scale.play();
  ```

###### slice

  ```javascript
  var tween = Be.tween(icon, {x: 500}, {x: 100}, 1, Quad.easeOut);
  var slice = Be.slice(tween, 0.1, 0.6);
  slice.play();
  ```

###### delay

  ```javascript
  var tween = Be.tween(icon, {x: 500}, {x: 100}, 1, Quad.easeOut);
  var delay = Be.delay(tween, 2, 1);
  delay.play();
  ```

###### addChildAction

  ```javascript
  var panda = new PIXI.Sprite.fromImage('../../asset/image/icon/panda.png');
  var addChildAction = Be.addChild(panda, this.stage);
  var to = Be.to(panda, {x: 400, y: 400, scaleX: 2, scaleY: 2, skewX: 2, skewY: 2}, 2, Bounce.easeOut);
  var removeFromParent = Be.removeFromParent(panda);
  var serial = Be.serial(addChildAction, to, removeFromParent);
  serial.play();
  ```

###### removeFromParent

  ```javascript
  var p, w = this.canvas.width, h = this.canvas.height;

  for (var i = 0; i < 200; i++) {
      p = new PIXI.Graphics();
      p.beginFill(0xFFFFFF * Math.random());
      p.drawCircle(0, 0, Math.random() * 5 + 1);
      p.endFill();
      p.x = Math.random() * w;
      p.y = Math.random() * h;

      var t = Be.serial(
          Be.addChild(p, this.stage),
          Be.tween(p,
              {
                  alpha: 0.8,
                  _blurFilter: {blurX: 0, blurY: 0}
              },
              {
                  _blurFilter: {blurX: 16, blurY: 16},
                  alpha: 0
              },
              3, null, Math.random() * 5),
          Be.tween(p, {alpha: 1}, {alpha: 0.8}, 2),
          Be.removeFromParent(p)
      );

      //t.stopOnComplete = false;
      t.play();
  }
  ```

###### func

  ```javascript
  var stage = this.stage,
      canvas = this.canvas,
      points = getPoint(100);

  var to = Be.func(toPoint, [points]);
  var scale = Be.func(scalePoint, [points]);
  var skew = Be.func(skewPoint, [points]);
  var serial = Be.serialTweens([to, scale, skew]);
  serial.play();

  function toPoint(list) {
      var l = list.length;
      for (var i = 0; i < l; i++) {
          Be.to(list[i], {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
          }, 0.5 + Math.random() * 1, Bounce.easeOut).play();
      }
  }

  function scalePoint(list) {
      var l = list.length;
      for (var i = 0; i < l; i++) {
          Be.to(list[i], {
              scaleX: Math.random() * 3,
              scaleY: Math.random() * 3,
          }, 0.5 + Math.random() * 1, Elastic.easeOut).play();
      }
  }

  function skewPoint(list) {
      var l = list.length;
      for (var i = 0; i < l; i++) {
          Be.to(list[i], {
              skewX: Math.random() * 10,
              skewY: Math.random() * 10,
          }, 0.5 + Math.random() * 1, Back.easeOut).play();
      }
  }

  function getPoint(num) {
      var list = [];
      for (var i = 0; i < num; i++) {
          var point = new PIXI.Graphics();
          point.beginFill(0xFFFFFF * Math.random());
          point.drawRect(0, 0, 5, 5);
          point.endFill();
          stage.addChild(point);
          list.push(point);
      }
      return list;
  }
  ```
<br>

#### BetweenAS3 코드 설명

###### 크게 3 부분으로 나뉩니다.

- Ticker
- Tween
- Updater

###### Ticker

- 하나의 EnterFrame 으로 등록된 모든 Tween 의 tick 함수를 호출할 수 있도록 LinkedList 를 관리합니다.

###### Tween

- tick 을 관리합니다. 호출 순서는 tick() -> internalUpdate -> update() -> udpateObject() 순으로 반복 호출됩니다.
- play() 함수를 호출하면 Ticker에 Tween을 등록하게 되고 등록하면 tick 이 발생합니다.
- tick 이 발생되는 동안 각종 콜백과 이벤트 관련 처리를 합니다. 
- 종류
  - Parallel, Serial, Delayed, Repeated … 등등

###### Updater

- target 의 객체에 따라 Updater 를 반환하고 해당 클래스에 따라 업데이트 방법을 기술합니다.
  - 종류
    - ObjectUpdater, PointUpdater, DisplayObjectUpdater … 등등

<br>

#### 기본 흐름 (Flow)

###### BetweenAS3 초기화

- _ticker = new EnterFrameTicker();
- _ticker.start();
- _updaterClassRegistry = new ClassRegistry();
- _updaterFactory = new UpdaterFactory( _updaterClassRegistry );
- ObjectUpdater.register( _updaterClassRegistry );
  - registry.registerClassWithTargetClassAndPropertyName(ObjectUpdater, Object, '*');


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

#### EnterFrameTicker 설명

###### _tickerListenerPaddings 생성과 연결 상태

- | 생성 순서(index) | prevListener | nextListener |
  | ------------ | ------------ | ------------ |
  | [0]          | null         | 1            |
  | [1]          | 0            | 2            |
  | [2]          | 1            | 3            |
  | [n]          | n - 1        | n + 1        |
  | [9]          | 8            | null         |

###### AbstractTween.tick(t) 호출 과정

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

###### 기본 흐름

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

#### SerialTween duration 계산

```javascript
if (lastTime <= (duration) && ld <= time) {
	this._a.update(time - ld);
}
ld = duration;
```

<br>

#### RepeatedTween duration 계산

```javascript
if (time >= 0) {
	time -= time < this.duration ? this.baseDuration * parseInt(time / this.baseDuration) : this.duration - this._baseDuration;
}
```

<br>


#### BIT FLAG

###### 비트 켜기 (BIT ON)

- `플래그 |= 마스크`
- `flag |= 0x0001`
- `00000000 00000000 | 00000000 00000001 = 00000000 00000001`
- `OR 연산은 0 | 1 과 1 | 1 은 1인 속성을 이용, 비트가 꺼져있으면 켜고, 켜져 있으면 그대로 유지합니다.`

###### 비트 끄기 (BIT OFF)

- `플래그 &= ~마스크`
- `flag &= ~0x0001`
- `00000000 00000011 & 11111111 11111110 = 00000000 00000010`
- `AND 연산은 1 | 1 인것만 1이 되므로 기존에 켜져있으면 그대로 켜고 나머지는 꺼지게 된다.`

###### 비트 토글 (BIT TOGGLE)

- `플래그 ^= 마스크`
- `flag ^= 0x0001`
- `XOR 연산은 두 비트가 다르면 1, 같으면 0으로 변환합니다. 즉, 켜져 있으면 끄고 꺼져있으면 켭니다.`

###### 비트 상태 확인 (BIT CHECK)

- `플래그 & 마스크`
- `flag & 0x0001`
- `AND 연산을 통해 1인 것만 1이 반환되므로 켜져 있으면 1을 반환하게 됩니다.`