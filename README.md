### FLOW

#### BetweenAS3 Registry

- _ticker = new EnterFrameTicker();
- _ticker.start();
- _updaterClassRegistry = new ClassRegistry();
- _updaterFactory = new UpdaterFactory( _updaterClassRegistry );
- ObjectUpdater.register( _updaterClassRegistry );
  - registry.registerClassWithTargetClassAndPropertyName(ObjectUpdater, Object, '*');

  ​



#### BetweenAS3.tween

tween(target:Object, to:Object, from:Object = null, time:Number = 1.0, easing:IEasing = null):IObjectTween

- var tween:ObjectTween = new ObjectTween(_ticker);
- tween.updater = _updaterFactory.create(target, to, from);
  - if(source != null)
    - for(name in source)
      - // **속성 처리 (x, y, rotation)**
      - if ((value = source[name]) is Number) 
        - getUpdaterFor(target, name, map, updaters).setSourceValue(name, Number(value), isRelative);
      - // **filter 처리 (blurFilter, colorMatrixFilter)**
      - else 
        - parent = getUpdaterFor(target, name, map, updaters);
        - child = create(parent.getObject(name), dest != null ? dest[name] : null, value);
        - updaters.push(new UpdaterLadder(parent, child, name));
  - if(dest != null)
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

### Filter 처리
- '_blurFilter', '_colorMatrixFilter' 같은 속성이 들어오면 UpdaterLadder 를 생성합니다. UpdaterLadder는 부모로 DisplayObjectUpdater를 자식으로 ObjectUpdater를 가지면서 update 때 자식의 객체 값을 업데이트하고 부모에게 그 값을 set 하도록 되어있습니다. 

<br>




### BIT FLAG

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
  - if(flag & 1)
    ​    trace(‘0000 0001 ON’);
    else
    ​    trace(‘0000 0001 OFF’);