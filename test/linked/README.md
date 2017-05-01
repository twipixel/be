###### 연결 리스트 add시 연결 상태와 update 시 호출 순서을 표로 작성하였습니다.



###### _tickerListenerPaddings 생성과 연결 상태

| 생성 순서 | prevListener | nextListener |
| ----- | ------------ | ------------ |
| [0]   | null         | 1            |
| [1]   | 0            | 2            |
| [2]   | 1            | 3            |
| [n]   | n - 1        | n + 1        |
| [9]   | 8            | null         |



###### addListener 호출 시 연결 상태

| _numListeners | in _first | nextListener | prevListener | out _first |
| ------------- | --------- | ------------ | ------------ | ---------- |
| 0             | null      | null         | 1            | 0          |
| 1             | 0         | 0            | 2            | 1          |
| 2             | 1         | 1            | 3            | 2          |
| 3             | 2         | 2            | null         | 3          |



###### 패딩이 있는 경우 update 함수 호출 순서 

| listener id | nextListener | prevListener |
| ----------- | ------------ | ------------ |
| padding     | 3            | null         |
| 3           | 2            | padding      |
| 2           | 1            | 3            |
| 1           | 0            | 2            |
| 0           | null         | 1            |



###### 패딩이 없는 경우 update 함수 호출 순서

| listener id | nextListener | prevListener |
| ----------- | ------------ | ------------ |
| 3           | 2            | null         |
| 2           | 1            | 3            |
| 1           | 0            | 2            |
| 0           | null         | 1            |

패딩이 없으면 마지막에 등록된 리스너의 tick은 호출되지 않습니다.