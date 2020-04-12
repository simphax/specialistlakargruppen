import React from "react"
import PropTypes from "prop-types"
import styles from "./capability-button.module.css"
import Modal from "react-modal"

import ModalContent from "./content"
import "./react-modal.css"

const CapabilityButton = ({ title, url }) => {
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
      <a href={url} onClick={openModal} className={styles.item}>
        <span className={styles.title}>{title}</span>
      </a>
      <Modal
        closeTimeoutMS={200}
        className={styles.modal}
        overlayClassName={styles.overlay}
        bodyOpenClassName={styles.bodyModalOpen}
        htmlOpenClassName={styles.htmlModalOpen}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalContentInner}>
            <ModalContent />
          </div>
        </div>
      </Modal>
    </>
  )
}

CapabilityButton.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

CapabilityButton.defaultProps = {
  title: ``,
  url: ``,
}
export default CapabilityButton
