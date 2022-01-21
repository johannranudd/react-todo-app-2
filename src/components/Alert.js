import React, { useEffect } from 'react';

const Alert = ({ show, type, msg, showAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [list, show, showAlert]);
  return <p className={`alert ${type}`}>{msg}</p>;
};

export default Alert;
