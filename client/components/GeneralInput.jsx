import React from 'react';
import * as styles from 'components/styles';

const GeneralInput = (props) => {
	const { input, label, type, meta: { touched, error } } = props;
  return (<div className={styles.inputContainer}>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className={styles.inputError}>{error}</span>}
    </div>
  </div>);
};

export default GeneralInput;
