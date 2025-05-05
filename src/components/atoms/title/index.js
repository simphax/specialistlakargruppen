import React from "react"
import * as styles from "./title.module.css"

const Title = ({ children }) => {
    return <h2 className={styles.title}>{children}</h2>
}

export default Title
