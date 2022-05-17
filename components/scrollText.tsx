import { useEffect, useState } from "react";
import { runInNewContext } from "vm";
import Clock from "./clock";
import { createPattern, fillText, getTextLength } from "./pattern";

export type scrollTextProps = {
    width: number,
    height: number,
    text: string,
    speed: number,
    direction: 'left' | 'right' | 'up' | 'down',
}

const ScrollText: React.FC<scrollTextProps> = (props) => {
    const [coords, setCoords] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    useEffect(() => {
        const length = getTextLength(props.text);
        switch (props.direction) {
            case 'left':
                setCoords({ x: props.width + 2, y: 0 });
                break;
            case 'right':
                setCoords({ x: -length - 1, y: 0 });
                break;
            case 'up':
                setCoords({ x: 0, y: -props.height - 1 });
                break;
            case 'down':
                setCoords({ x: 0, y: props.height + + 1 });
                break;
            default:
                break;
        }
        const dirAdjustment = {
            'left': { x: -1, y: 0 },
            'right': { x: 1, y: 0 },
            'up': { x: 0, y: -1 },
            'down': { x: 0, y: 1 },
        }
        const interval = setInterval(() => {
            setCoords((prev) => {
                const newCoords = {
                    x: prev.x + dirAdjustment[props.direction].x,
                    y: prev.y + dirAdjustment[props.direction].y,
                };
                if (props.direction === 'left' && newCoords.x < -length) {
                    newCoords.x = props.width + 1;
                }
                if (props.direction === 'right' && newCoords.x > props.width) {
                    newCoords.x = -length - 1;
                }
                if (props.direction === 'up' && newCoords.y < -props.height) {
                    newCoords.y = props.height + 1;
                }
                if (props.direction === 'down' && newCoords.y > props.height) {
                    newCoords.y = -props.height - 1;
                }
                return newCoords;
            });
        }, props.speed);
        return () => clearInterval(interval);
    }, [props.text, props.direction, props.speed, props.width, props.height]);

    const pattern = createPattern(props.width, props.height);
    fillText(pattern, coords.x, coords.y, props.text);

    return <Clock urgent={false} width={props.width} height={props.height} pattern={pattern} />;

}

export default ScrollText