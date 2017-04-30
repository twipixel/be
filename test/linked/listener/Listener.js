export default class Listener
{
    constructor(listenerEndCount = 300 + parseInt(Math.random() * 500))
    {
        this.id = window.listenerId++;

        this.tickCount = 0;
        this.listenerEndCount = listenerEndCount;

        this.prevListener = null;
        this.nextListener = null;

        console.log('id:' + this.id + ', listenerEndCount:', this.listenerEndCount);
    }

    tick()
    {
        if (this.tickCount++ >= this.listenerEndCount) {
            console.log('this.id:', + this.id + ' end');
            return true;
        }
        return false;
    }
}