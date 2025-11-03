import React from "react";
import styles from "./diagnostic.module.sass";
import DiagnosticForm from "../../components/Diagnostic";

const Diagnostic = () => {
    return (
      <div className={styles.diagnosticContainer}>
    <DiagnosticForm  />
    
 </div>
);
};

export default Diagnostic;
