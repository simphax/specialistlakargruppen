import React from "react"
import PropTypes from "prop-types"
import styles from "./capability-button.module.css"
import Modal from "../modal"

const CapabilityButton = ({ title, path, fullTitle, html }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal(e) {
    e.preventDefault()
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <a href={path} onClick={openModal} className={styles.item}>
        <span className={styles.title}>{title}</span>
      </a>
      <Modal
        title={fullTitle}
        html={html}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  )
}

CapabilityButton.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  html: PropTypes.string,
}

CapabilityButton.defaultProps = {
  title: ``,
  path: ``,
  html: ``,
}
export default CapabilityButton
