import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, nome, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={nome}>
        {label}
      </label>
      <input
        className={styles.input}
        id={nome}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
