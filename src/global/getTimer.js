
/*const startTime = Date.now();

export default function getTimer()
{
    return Date.now() - startTime;
}*/


if (!(global.getTimer))
{
    const startTime = Date.now();

    global.getTimer = () => Date.now() - startTime;
}