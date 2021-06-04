import React from "react"
import PropTypes from "prop-types"
import styles from "./modal.module.css"
import Modal from "react-modal"
import { MdClose } from "react-icons/md"

import "./react-modal.css"

const CapabilityButtonModal = ({ isOpen, onRequestClose, title, html }) => {
  return (
    <>
      <Modal
        closeTimeoutMS={200}
        className={styles.modal}
        overlayClassName={styles.overlay}
        bodyOpenClassName={styles.bodyModalOpen}
        htmlOpenClassName={styles.htmlModalOpen}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalContentInner}>
            <button className={styles.closeButton} onClick={onRequestClose}>
              <MdClose />
            </button>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Modal>
    </>
  )
}

CapabilityButtonModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  title: PropTypes.string,
  html: PropTypes.string,
}

CapabilityButtonModal.defaultProps = {
  title: ``,
  isOpen: false,
  html: ``,
}
export default CapabilityButtonModal
