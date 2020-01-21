import React from 'react';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={props.show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`}>
      <section className={styles.modalMain}>
        {props.children}
      </section>
    </div>
  );
};

export default Modal;
