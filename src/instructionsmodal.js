import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalTabs from './modaltabs';
import styles from './instructionsmodal.module.css'


function InstructionsModal (props) {
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className={styles.ingredientsButton}>Ingredients/Instructions</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Ingredients Modal"
      >
        <ModalTabs instructions={props.instructions} ingredients={props.ingredients}/>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );


}


export default InstructionsModal