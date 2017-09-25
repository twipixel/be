export default class Mouse
{
    static get DESKTOP_MOUSE()
    {
        return this.renderer.plugins.interaction.mouse;
    }

    static get MOBILE_MOUSE()
    {
        return this.renderer.plugins.interaction.pointer;
    }

    /**
     * PIXI.Application.renderer
     * 랜더러에서 interaction 객체를 참조할 수 있어서 사용하려면 렌더러를 셋팅해야 합니다.
     * @param value {PIXI.WebGLRenderrer|PIXI.CanvasRenderer}
     */
    static set renderer(value) {
        this._renderer = value;
    }
    static get renderer() {
        return this._renderer;
    }

    /**
     * 모바일 대응을 위해서
     * PC 버전에서는 mouse 객체를, 모바일 버전에서는 pointer 객체를 셋팅하면
     * global 객체에서 참조해서 좌표값을 전달하도록 합니다.
     *
     * 만약 설정하지 않으면 기본 PC만 대응하도록 mouse 객체를 설정합니다.
     *
     * Desktop : Mouse.renderer.plugins.interaction.mouse
     * Mobile : Mouse.renderer.plugins.interaction.pointer
     * @param value
     */
    static set mouse(value) {
        this._mouse = value;
    }
    static get mouse() {
        if (!this._mouse) {
            this._mouse = this.DESKTOP_MOUSE;
        }
        return this._mouse;
    }


    static get global() {
        return this.mouse.global;
    }
    static get globalX() {
        return this.mouse.global.x;
    }
    static get globalY() {
        return this.mouse.global.y;
    }


    static set currentCursorStyle(value) {
        Mouse.renderer.plugins.interaction.currentCursorStyle = value;
    }
    static get currentCursorStyle() {
        return Mouse.renderer.plugins.interaction.currentCursorStyle;
    }


    /**
     * 이동 거리가 5px 이하이고 500ms 안에 두번 클릭하면 더블 클릭으로 인정
     * @param prevPoint 이전좌표
     * @param currentPoint 현재좌표
     * @param prevTime 이전 클릭 타임
     * @param currentTime 현재 클릭 타임
     * @returns {boolean} 더블 클릭 여부
     */
    static isDoubleClick(prevPoint, currentPoint, prevTime, currentTime) {
        var diffX = currentPoint.x - prevPoint.x;

        if (diffX < 0) {
            diffX = diffX * -1;
        }

        var diffY = currentPoint.y - prevPoint.y;

        if (diffY < 0) {
            diffY = diffY * -1;
        }

        if (diffX > 5 || diffY > 5) {
            return false;
        }

        if (currentTime - prevTime > 500) {
            return false;
        }

        return true;
    }


    static get currentTime() {
        return new Date().getTime();
    }
}
