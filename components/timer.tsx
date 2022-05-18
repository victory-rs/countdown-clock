import { useEffect, useState } from "react";
import useSound from "use-sound";
import Countdown from "./countdown";
import Editor from "./editor";
import ScrollText from "./scrollText";

const Timer: React.FC = () => {
    const width = 40;
    const height = 12;
    const [countdown, setCountdown] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [playMusic, { stop: stopMusic }] = useSound('countdownmusic.mp3', {
        onload: () => {
            setLoaded(true);
        }
    })
    useEffect(() => {
        let lastClick = 0;
        const cb = () => {
            const currentClick = new Date().getTime();
            if (currentClick - lastClick < 800) {
                console.log('double click!')
                stopMusic();
                setCountdown(false);
                return;
            }
            lastClick = currentClick;


            if (!loaded) {
                return;
            }
            if (!countdown) {
                playMusic();
                setCountdown(true);
            }
        };
        document.addEventListener("click", cb);
        return () => {
            document.removeEventListener("click", cb);
        }
    }, [countdown, setCountdown, loaded, playMusic]);
    return !countdown ?
        <ScrollText width={width} height={height} text="q  victory.rs  q" speed={50} direction="left" />
        :
        <Countdown width={width} height={height} seconds={60} />

}

export default Timer;