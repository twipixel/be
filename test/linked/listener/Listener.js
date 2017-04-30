export default class Listener
{
    constructor()
    {
        this.tickCount = 0;
        this.listenerEndCount = 20 + parseInt(Math.random() * 60);
        console.log('listenerEndCount:', this.listenerEndCount);
    }

    tick()
    {
        if (this.tickCount++ >= this.listenerEndCount) {
            return true;
        }
        return false;
    }
}