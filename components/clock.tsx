import styles from "./clock.module.css";


const Clock: React.FC<{ width: number, height: number, urgent: boolean, pattern: boolean[][] }> = (props: { width: number, height: number, urgent: boolean, pattern: boolean[][] }) => {
    const clockDots = [];
    for (let y = 0; y < props.height; y++) {
        let row = [];
        for (let x = 0; x < props.width; x++) {
            row.push(<div key={`${x}-${y}`} className={`${styles.dot} ${props.pattern[x][y] && (props.urgent ? styles.urgent : styles.normal)}`}></div>);
        }
        clockDots.push(<div key={y} className={styles.row}>{row}</div>);
    }
    return <div className={`${styles.container} ${props.urgent ? styles.urgentBorder : ''}`} style={{ '--width': props.width + 2, '--height': props.height + 2 } as React.CSSProperties} >{clockDots}</div>
}

export default Clock;