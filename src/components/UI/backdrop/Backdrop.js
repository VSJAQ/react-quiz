import React from "react";
import styles from './Backdrop.module.css';

export const Backdrop = ({ onClick }) => <div  className={styles.backdrop} onClick={onClick}/>