import { useEffect, useState } from "react";
import useSound from "use-sound";
import Clock from "./clock";
import { createPattern, fillText, getTextLength } from "./pattern";

export type countdownProps = {
    width: number,
    height: number,
    seconds: number,
}

const Countdown: React.FC<countdownProps> = (props) => {
    const [seconds, setSeconds] = useState(props.seconds);
    const [beepTime, setBeepTime] = useState(10.5);
    const [playBuzzer] = useSound('buzzer.mp3');
    const [playBeep] = useSound('beep.mp3');
    useEffect(() => {
        let initialTime = new Date().getTime();
        let stop = false;
        const cb = () => {
            let newTime = new Date().getTime();
            let diff = (newTime - initialTime) / 1000;
            initialTime = newTime;
            setSeconds((prev) => {
                if (prev - diff <= 0) {
                    playBuzzer();
                    stop = true;
                    return 0;
                }
                return prev - diff;
            });
            if (!stop) {
                requestAnimationFrame(cb);
            }
        };
        requestAnimationFrame(cb);
        return () => { stop = true }
    }, [props.seconds, playBuzzer]);

    if (beepTime > 0 && seconds <= beepTime) {
        playBeep();
        setBeepTime(old => old === 10.5 ? 9 : old - 1)
    }


    const pattern = createPattern(props.width, props.height);
    const displayText = seconds > 10 ? Math.round(seconds).toString() : seconds.toFixed(1);
    const length = getTextLength(displayText);
    fillText(pattern, Math.round((props.width - length) / 2), 0, displayText);
    const urgent = seconds <= 0;
    return <Clock width={props.width} urgent={urgent} height={props.height} pattern={pattern} />;

}

export default Countdown