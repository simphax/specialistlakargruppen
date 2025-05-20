import React from "react"
import PropTypes from "prop-types"
import * as styles from "./modal-link.module.css"
import Modal from "../modal"

const ModalLink = ({ title, path, fullTitle, html }) => {
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

ModalLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  html: PropTypes.string,
}

ModalLink.defaultProps = {
  title: ``,
  path: ``,
  html: ``,
}
export default ModalLink
