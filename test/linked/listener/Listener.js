export default class Listener
{
    constructor(listenerEndCount = 100 + parseInt(Math.random() * 200))
    {
        this.id = window.listenerId++;

        this.tickCount = 0;
        this.listenerEndCount = listenerEndCount;

        this.prevListener = null;
        this.nextListener = null;

        console.log('id:' + this.id + ', listenerEndCount:', this.listenerEndCount);
    }

    /**
     * tick 함수 반환 값이 true 이면 연결 리스트에서 제거 합니다.
     * @returns {boolean}
     */
    tick()
    {
        if (this.listenerEndCount == -1) return false;

        console.log(this.id + ' -> ' + this.tickCount + ', ' + this.listenerEndCount);
        if (this.tickCount++ >= this.listenerEndCount) {
            console.log('this.id:', + this.id + ' end');
            return true;
        }
        return false;
    }
}