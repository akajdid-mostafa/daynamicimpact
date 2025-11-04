import React from "react";
import styles from "./diagnostic.module.sass";
import DiagnosticForm from "../../components/Diagnostic";
import Hero from "../../components/Diagnostic/hero";

const Diagnostic = () => {
  return (
    <div className={styles.diagnosticContainer}>
      <Hero />
      <DiagnosticForm />
    </div>
  );
};

export default Diagnostic;
