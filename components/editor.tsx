import { createPattern } from "./pattern";
import styles from "./clock.module.css";
import { useState } from "react";


const Editor: React.FC = () => {
    const clockDots = [];
    const [pattern, setPattern] = useState<boolean[][]>(createPattern(7, 12));
    for (let y = 0; y < pattern[0].length; y++) {
        let row = [];
        for (let x = 0; x < pattern.length; x++) {
            row.push(<div key={`${x}-${y}`} onClick={() => {
                setPattern(old => {
                    const newP = old.map(r => [...r]);
                    newP[x][y] = !old[x][y];
                    return newP;
                });
            }} className={`${styles.dot} ${pattern[x][y] && styles.normal}`}></div>);
        }
        clockDots.push(<div key={y} className={styles.row}>{row}</div>);
    }
    return <div className={styles.editor}>
        <div className={styles.container} style={{ '--width': 7 + 2, '--height': 12 + 2 } as React.CSSProperties} >{clockDots}</div>
        <button onClick={() => {
            let text = '';
            for (let y = 0; y < pattern[0].length; y++) {
                if (y > 0) text += '\n';
                for (let x = 0; x < pattern.length; x++) {
                    text += pattern[x][y] ? '*' : ' ';
                }
            }
            // const text = pattern.map(c => c.map(b => b ? "*" : " ").join("\n")).join("");
            navigator.clipboard.writeText(text);
        }}>Copy</button>

    </div>
}

export default Editor;