import styles from "./Banner.module.scss"

const Banner = ({color, text}) => {

    return (
        <div style={{backgroundColor: color}} className={styles.banner}>
            <h3>{text}</h3>
        </div>
    )
}

export default Banner;