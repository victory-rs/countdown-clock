import { useEffect, useState } from "react";
import Countdown from "./countdown";
import Editor from "./editor";
import ScrollText from "./scrollText";

const Timer: React.FC = () => {
    const width = 40;
    const height = 12;
    const [countdown, setCountdown] = useState(false);
    useEffect(() => {
        document.addEventListener("click", () => {
            if (!countdown) {
                setCountdown(true);
            }
        });
    }, [countdown, setCountdown]);
    return !countdown ?
        <ScrollText width={width} height={height} text="q  victory.rs  q" speed={100} direction="left" />
        :
        <Countdown width={width} height={height} seconds={20} />

}

export default Timer;