import React from "react"
import PropTypes from "prop-types"
import styles from "./team-item.module.css"

const TeamItem = ({ title, description }) => {
  return (
    <div className={styles.item}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}

TeamItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

TeamItem.defaultProps = {
  title: ``,
  description: ``,
}
export default TeamItem
