import styles from "./Blur.module.scss"

export const Blur1 = ({left, top}) => {

    return (
        <div className={styles.blurContainer1} style={{ left: `${left}`, top: `${top}`  }}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export const Blur2 = ({right, bottom}) => {

    return (
        <div className={styles.blurContainer2} style={{ right: `${right}`, bottom: `${bottom}`  }}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
