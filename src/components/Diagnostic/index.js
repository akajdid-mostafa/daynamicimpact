import React, { useState } from "react";
import styles from "./Diagnostic.module.sass";
import cn from "classnames";
import Hero from "./hero";
import Steps from "./steps";
import Stepsar from "./steps-ar";

export default function Diagnostic() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleStartForm = () => {
    if (selectedLanguage) {
      setShowForm(true);
    }
  };

  const renderForm = () => {
    if (showForm && selectedLanguage === "french") {
      return <Steps />;
    } else if (showForm && selectedLanguage === "arabic") {
      return <Stepsar />;
    }
    return null;
  };

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        {!showForm && (
          <Hero 
            onLanguageSelect={handleLanguageSelect}
            onStartForm={handleStartForm}
          />
        )}
        {renderForm()}
      </div>
    </div>
  );
}