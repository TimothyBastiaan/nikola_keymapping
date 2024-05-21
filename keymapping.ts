//% weight=98 color=#2BB473 icon="\uf11c"
namespace Nikola_KeyMapping {
    export enum MakeyMakeyKey {
        //% block="UP ARROW"
        UP = keymap.KeyCode.UpArrow,
        //% block="DOWN ARROW"
        DOWN = keymap.KeyCode.DownArrow,
        //% block="LEFT ARROW"
        LEFT = keymap.KeyCode.LeftArrow,
        //% block="RIGHT ARROW"
        RIGHT = keymap.KeyCode.RightArrow,
        //% block="SPACE"
        SPACE = keymap.KeyCode.Space,
        //% block="LEFT CLICK"
        LEFT_CLICK = keymap.KeyCode.MouseLeftButton,
        //% block="RIGHT CLICK"
        RIGHT_CLICK = keymap.KeyCode.MouseRightButton,
        //% block="A"
        A = keymap.KeyCode.A,
        //% block="B"
        B = keymap.KeyCode.B,
        //% block="C"
        C = keymap.KeyCode.C,
        //% block="D"
        D = keymap.KeyCode.D,
        //% block="E"
        E = keymap.KeyCode.E,
        //% block="F"
        F = keymap.KeyCode.F,
        //% block="G"
        G = keymap.KeyCode.G,
        //% block="H"
        H = keymap.KeyCode.H,
        //% block="I"
        I = keymap.KeyCode.I,
        //% block="J"
        J = keymap.KeyCode.J,
        //% block="K"
        K = keymap.KeyCode.K,
        //% block="L"
        L = keymap.KeyCode.L,
        //% block="M"
        M = keymap.KeyCode.M,
        //% block="N"
        N = keymap.KeyCode.N,
        //% block="O"
        O = keymap.KeyCode.O,
        //% block="P"
        P = keymap.KeyCode.P,
        //% block="Q"
        Q = keymap.KeyCode.Q,
        //% block="R"
        R = keymap.KeyCode.R,
        //% block="S"
        S = keymap.KeyCode.S,
        //% block="T"
        T = keymap.KeyCode.T,
        //% block="U"
        U = keymap.KeyCode.U,
        //% block="V"
        V = keymap.KeyCode.V,
        //% block="W"
        W = keymap.KeyCode.W,
        //% block="X"
        X = keymap.KeyCode.X,
        //% block="Y"
        Y = keymap.KeyCode.Y,
        //% block="Z"
        Z = keymap.KeyCode.Z
    }

    function MakeyMakeyKeyToKeyCode(makeyMakeyKey: MakeyMakeyKey) {
        switch (makeyMakeyKey) {
            case (MakeyMakeyKey.UP):
                return keymap.KeyCode.UpArrow
            case (MakeyMakeyKey.DOWN):
                return keymap.KeyCode.DownArrow
            case (MakeyMakeyKey.LEFT):
                return keymap.KeyCode.LeftArrow
            case (MakeyMakeyKey.RIGHT):
                return keymap.KeyCode.RightArrow
            case (MakeyMakeyKey.SPACE):
                return keymap.KeyCode.Space
            case (MakeyMakeyKey.LEFT_CLICK):
                return keymap.KeyCode.MouseLeftButton
            case MakeyMakeyKey.A:
                return keymap.KeyCode.A;
            case MakeyMakeyKey.B:
                return keymap.KeyCode.B;
            case MakeyMakeyKey.C:
                return keymap.KeyCode.C;
            case MakeyMakeyKey.D:
                return keymap.KeyCode.D;
            case MakeyMakeyKey.E:
                return keymap.KeyCode.E;
            case MakeyMakeyKey.F:
                return keymap.KeyCode.F;
            case MakeyMakeyKey.G:
                return keymap.KeyCode.G;
            case MakeyMakeyKey.H:
                return keymap.KeyCode.H;
            case MakeyMakeyKey.I:
                return keymap.KeyCode.I;
            case MakeyMakeyKey.J:
                return keymap.KeyCode.J;
            case MakeyMakeyKey.K:
                return keymap.KeyCode.K;
            case MakeyMakeyKey.L:
                return keymap.KeyCode.L;
            case MakeyMakeyKey.M:
                return keymap.KeyCode.M;
            case MakeyMakeyKey.N:
                return keymap.KeyCode.N;
            case MakeyMakeyKey.O:
                return keymap.KeyCode.O;
            case MakeyMakeyKey.P:
                return keymap.KeyCode.P;
            case MakeyMakeyKey.Q:
                return keymap.KeyCode.Q;
            case MakeyMakeyKey.R:
                return keymap.KeyCode.R;
            case MakeyMakeyKey.S:
                return keymap.KeyCode.S;
            case MakeyMakeyKey.T:
                return keymap.KeyCode.T;
            case MakeyMakeyKey.U:
                return keymap.KeyCode.U;
            case MakeyMakeyKey.V:
                return keymap.KeyCode.V;
            case MakeyMakeyKey.W:
                return keymap.KeyCode.W;
            case MakeyMakeyKey.X:
                return keymap.KeyCode.X;
            case MakeyMakeyKey.Y:
                return keymap.KeyCode.Y;
            case MakeyMakeyKey.Z:
                return keymap.KeyCode.Z;      
            case (MakeyMakeyKey.RIGHT_CLICK):
                return keymap.KeyCode.MouseRightButton
        }
        return null
    }

    export enum PlayerNumber {
        //% block="player 1"
        ONE = 1,
        //% block="player 2"
        TWO = 2,
        //% block="player 3"
        THREE = 3,
        //% block="player 4"
        FOUR = 4
    }
    //% blockId=set_simulator_keymap_for_player
    //% block="set simulator keys for $playerNumber \n UP $buttonUp \n DOWN $buttonDown \n LEFT $buttonLeft \n RIGHT $buttonRight \n A $buttonA \n B $buttonB"    
    export function setSimulatorKeymap(
        playerNumber: PlayerNumber = 1,
        buttonUp: MakeyMakeyKey = MakeyMakeyKey.UP,
        buttonDown: MakeyMakeyKey = MakeyMakeyKey.DOWN,
        buttonLeft: MakeyMakeyKey = MakeyMakeyKey.LEFT,
        buttonRight: MakeyMakeyKey = MakeyMakeyKey.RIGHT,
        buttonA: MakeyMakeyKey = MakeyMakeyKey.SPACE,
        buttonB: MakeyMakeyKey = MakeyMakeyKey.LEFT_CLICK) {
        keymap.setPlayerKeys(
            playerNumber,
            MakeyMakeyKeyToKeyCode(buttonUp),
            MakeyMakeyKeyToKeyCode(buttonDown),
            MakeyMakeyKeyToKeyCode(buttonLeft),
            MakeyMakeyKeyToKeyCode(buttonRight),
            MakeyMakeyKeyToKeyCode(buttonA),
            MakeyMakeyKeyToKeyCode(buttonB)
        )
    }



    //% blockId=set_simulator_keymap_to_defaults
    //% block="use default keys"
    export function setDefaults() {
        setSimulatorKeymap(1,
            MakeyMakeyKey.W,
            MakeyMakeyKey.S,
            MakeyMakeyKey.A,
            MakeyMakeyKey.D,
            MakeyMakeyKey.Z,
            MakeyMakeyKey.X
        )
        setSimulatorKeymap(2,
            MakeyMakeyKey.I,
            MakeyMakeyKey.K,
            MakeyMakeyKey.J,
            MakeyMakeyKey.L,
            MakeyMakeyKey.U,
            MakeyMakeyKey.O 
        )
        setSimulatorKeymap(3,
            MakeyMakeyKey.T,
            MakeyMakeyKey.G,
            MakeyMakeyKey.F,
            MakeyMakeyKey.H,
            MakeyMakeyKey.R,
            MakeyMakeyKey.Y
        )
        setSimulatorKeymap(4,
            MakeyMakeyKey.UP,
            MakeyMakeyKey.DOWN,
            MakeyMakeyKey.LEFT,
            MakeyMakeyKey.RIGHT,
            MakeyMakeyKey.Q,
            MakeyMakeyKey.E
        )
    }
}// Add your code here
