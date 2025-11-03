import React, { useState } from "react";
import styles from "./Diagnostic.module.sass";
import cn from "classnames";

export default function DiagnosticFormFR() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    // I. Informations Générales
    companyName: "",
    companyPhone: "",
    sector: "",
    otherSector: "",
    yearCreation: "",
    city: "",
    employees: "",

    // II. Structure & Organisation
    hasOrgStructure: "",
    decisionsBasedOnData: "",
    hasInternalControl: "",
    orgChallenges: [],

    // III. Situation Financière
    financialSituation: "",
    hasFinancialPlan: "",
    debtLevel: "",
    banksRelation: "",

    // IV. Performance & Risques
    salesProblems: "",
    observedFraud: "",
    digitalizationLevel: "",
    has12MonthsPlan: "",

    // V. Auto-Évaluation
    selfEval: "",
    mainGoal: [],

    // VI. Consentement
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  const [result, setResult] = useState({
    scorePercent: 0,
    category: "",
    color: "",
    description: "",
  });

  const updateField = (key, value) => {
    setForm((s) => ({ ...s, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: null }));
    }
  };

  const toggleChallenge = (value) =>
    setForm((s) => {
      const list = new Set(s.orgChallenges || []);
      if (list.has(value)) list.delete(value);
      else list.add(value);
      return { ...s, orgChallenges: Array.from(list) };
    });

  const toggleMainGoal = (value) =>
    setForm((s) => {
      const list = new Set(s.mainGoal || []);
      if (list.has(value)) list.delete(value);
      else list.add(value);
      return { ...s, mainGoal: Array.from(list) };
    });

  const validateStep = () => {
    const newErrors = {};
    const currentYear = new Date().getFullYear(); // Get the current year

    if (step === 1) {
      if (!form.companyName)
        newErrors.companyName = "Le nom de l'entreprise est requis";
      const phoneRegex = /^[0-9+\s().-]{10,}$/;
      if (!form.companyPhone) {
        newErrors.companyPhone = "Le téléphone de l'entreprise est requis";
      } else if (!phoneRegex.test(form.companyPhone)) {
        newErrors.companyPhone =
          "Veuillez entrer un numéro de téléphone valide";
      }
      if (!form.sector) newErrors.sector = "Veuillez sélectionner un secteur";
      if (form.sector === "other" && !form.otherSector)
        newErrors.otherSector = "Veuillez spécifier votre secteur";
      if (!form.employees)
        newErrors.employees = "Veuillez sélectionner l'effectif";
      if (
        form.yearCreation &&
        (form.yearCreation < 1900 || form.yearCreation > currentYear)
      ) {
        newErrors.yearCreation = `L'année doit être entre 1900 et ${currentYear}`;
      }
    }

    if (step === 2) {
      if (!form.hasOrgStructure)
        newErrors.hasOrgStructure = "Ce champ est requis";
      if (!form.decisionsBasedOnData)
        newErrors.decisionsBasedOnData = "Veuillez sélectionner une réponse";
      if (!form.hasInternalControl)
        newErrors.hasInternalControl = "Veuillez sélectionner une réponse";
    }

    if (step === 3) {
      if (!form.financialSituation)
        newErrors.financialSituation =
          "Veuillez décrire votre situation financière";
      if (!form.hasFinancialPlan)
        newErrors.hasFinancialPlan = "Ce champ est requis";
      if (!form.debtLevel)
        newErrors.debtLevel = "Veuillez sélectionner le niveau d'endettement";
      if (!form.banksRelation)
        newErrors.banksRelation =
          "Veuillez décrire la relation avec les banques";
    }

    if (step === 4) {
      if (!form.salesProblems)
        newErrors.salesProblems = "Veuillez sélectionner une réponse";
      if (!form.observedFraud)
        newErrors.observedFraud = "Veuillez sélectionner une réponse";
      if (!form.digitalizationLevel)
        newErrors.digitalizationLevel =
          "Veuillez sélectionner le niveau de digitalisation";
      if (!form.has12MonthsPlan)
        newErrors.has12MonthsPlan = "Veuillez sélectionner une réponse";
    }

    if (step === 5) {
      if (!form.selfEval)
        newErrors.selfEval = "Veuillez sélectionner une phrase";
      if (!form.mainGoal || form.mainGoal.length === 0)
        newErrors.mainGoal = "Veuillez sélectionner au moins un objectif";
    }

    if (step === 6) {
      if (!form.acceptTerms)
        newErrors.acceptTerms =
          "Vous devez accepter les conditions pour continuer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    // I. Informations Générales (10%)
    const empMap = { "1-5": 3, "6-20": 5, "21-50": 7, "+50": 10 };
    totalScore += empMap[form.employees] || 0;
    maxScore += 10;

    // II. Structure & Organisation (25%)
    totalScore += form.hasOrgStructure === "yes" ? 3 : 0;
    const decisionsMap = { always: 3, sometimes: 2, rarely: 1, never: 0 };
    totalScore += decisionsMap[form.decisionsBasedOnData] || 0;
    const controlMap = { regular: 3, weak: 1, none: 0 };
    totalScore += controlMap[form.hasInternalControl] || 0;
    const challengeCount = Math.min((form.orgChallenges || []).length, 3);
    totalScore = Math.max(0, totalScore - challengeCount);
    maxScore += 9;

    // III. Situation Financière (30%)
    const finSitMap = { stable: 3, volatile: 2, difficulty: 1, threatened: 0 };
    totalScore += finSitMap[form.financialSituation] || 0;
    totalScore += form.hasFinancialPlan === "yes" ? 3 : 0;
    const debtMap = { none: 3, under_control: 2, high: 0 };
    totalScore += debtMap[form.debtLevel] || 0;
    const bankMap = { good: 3, search: 2, tense: 1, cut: 0 };
    totalScore += bankMap[form.banksRelation] || 0;
    maxScore += 12;

    // IV. Performance & Risques (25%)
    const salesMap = { no: 3, seasonal: 2, permanent: 1 };
    totalScore += salesMap[form.salesProblems] || 0;
    const fraudMap = { never: 3, limited_cases: 1, repeated: 0 };
    totalScore += fraudMap[form.observedFraud] || 0;
    const digiMap = { high: 3, medium: 2, weak: 1, none: 0 };
    totalScore += digiMap[form.digitalizationLevel] || 0;
    const planMap = { yes: 3, preparing: 2, none: 0 };
    totalScore += planMap[form.has12MonthsPlan] || 0;
    maxScore += 12;

    // V. Auto-Évaluation (10%)
    const selfEvalMap = {
      clear_system: 3,
      under_control_no_metrics: 2,
      random: 1,
      lots_effort_no_results: 0,
    };
    totalScore += selfEvalMap[form.selfEval] || 0;
    const goalCount = Math.min((form.mainGoal || []).length, 2);
    totalScore += 3 - goalCount;
    maxScore += 6;

    // حساب النسبة المئوية
    const scorePercent = Math.round((totalScore / maxScore) * 100);

    let category = "",
      color = "",
      description = "";
    if (scorePercent >= 80) {
      category = "Solide";
      color = "green";
      description =
        "Structure institutionnelle solide et situation financière stable.";
    } else if (scorePercent >= 60) {
      category = "À améliorer";
      color = "yellow";
      description =
        "Performance correcte, mais des lacunes organisationnelles ou financières persistent.";
    } else if (scorePercent >= 40) {
      category = "À risque";
      color = "orange";
      description =
        "Multiples points de faiblesse détectés dans la gestion, le financement et le contrôle.";
    } else {
      category = "Fragile";
      color = "red";
      description =
        "Urgence : Absence totale de gouvernance ou déséquilibre financier grave";
    }

    return {
      scorePercent,
      category,
      color,
      description,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      const calc = calculateScore();
      setResult(calc);

      // إرسال البيانات إلى البريد الإلكتروني
      const sendSuccess = await sendDiagnosticData(form, calc);

      if (sendSuccess) {
        setResultModalOpen(true);
      } else {
        alert("Erreur lors de l'envoi du diagnostic. Veuillez réessayer.");
      }
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((s) => s + 1);
    }
  };

  const StepButtons = () => (
    <div className={styles.actions}>
      {step > 1 && (
        <button
          type="button"
          className={cn("button", styles.btn, styles.btnSecondary)}
          onClick={() => setStep((s) => s - 1)}
        >
          Retour
        </button>
      )}
      {step < 6 && (
        <button
          type="button"
          className={cn("button", styles.btn, styles.btnPrimary)}
          onClick={handleNext}
        >
          Suivant
        </button>
      )}
      {step === 6 && (
        <button
          type="button"
          className={cn("button", styles.btn, styles.btnPrimary)}
          onClick={handleSubmit}
        >
          Voir mon résultat
        </button>
      )}
    </div>
  );

  // دالة للحصول على نص القيمة
  const getDisplayValue = (key, value) => {
    const maps = {
      sector: {
        commercial: "Commercial",
        industrial: "Industriel",
        services: "Services",
        other: form.otherSector || "Autre (non spécifié)",
      },
      employees: {
        "1-5": "1-5",
        "6-20": "6-20",
        "21-50": "21-50",
        "+50": "+50",
      },
      hasOrgStructure: {
        yes: "Oui",
        no: "Non",
      },
      decisionsBasedOnData: {
        always: "Toujours",
        sometimes: "Parfois",
        rarely: "Rarement",
        never: "Jamais",
      },
      hasInternalControl: {
        regular: "Oui, régulièrement",
        weak: "Oui, mais inefficace",
        none: "Non",
      },
      financialSituation: {
        stable: "Stable",
        volatile: "Volatile",
        difficulty: "En difficulté",
        threatened: "Menacée d'arrêt",
      },
      hasFinancialPlan: {
        yes: "Oui",
        no: "Non",
      },
      debtLevel: {
        none: "Non",
        under_control: "Oui, mais sous contrôle",
        high: "Oui, et cela représente un fardeau actuel",
      },
      banksRelation: {
        good: "Bonne",
        tense: "Tendue",
        cut: "Coupée",
        search: "En recherche de solutions",
      },
      salesProblems: {
        no: "Non",
        seasonal: "Oui, saisonnières",
        permanent: "Oui, permanentes",
      },
      observedFraud: {
        never: "Jamais",
        limited_cases: "Quelques cas limités",
        repeated: "Oui, répétés",
      },
      digitalizationLevel: {
        high: "Élevé",
        medium: "Moyen",
        weak: "Faible",
        none: "Aucun",
      },
      has12MonthsPlan: {
        yes: "Oui",
        preparing: "En préparation",
        none: "Aucune",
      },
      selfEval: {
        lots_effort_no_results:
          "Je travaille beaucoup... mais les résultats n'apparaissent pas",
        random: "Tout se passe spontanément et non selon un plan",
        under_control_no_metrics:
          "Les choses sont sous contrôle mais sans indicateurs de mesure",
        clear_system: "J'ai un système clair et des objectifs précis",
      },
    };

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    return maps[key]?.[value] || value || "Non renseigné";
  };

  const sendDiagnosticData = async (formData, resultData) => {
    try {
      const response = await fetch("https://e-mail-dynamic.vercel.app/api/diagnostic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          result: resultData,
          submissionDate: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        console.log("Diagnostic data sent successfully");
        return true;
      } else {
        console.error("Failed to send diagnostic data");
        return false;
      }
    } catch (error) {
      console.error("Error sending diagnostic data:", error);
      return false;
    }
  };

  //   useEffect(() => {
  //     if (calendarModalOpen) {
  //       // Dynamically add the Google Calendar script and CSS
  //       const link = document.createElement("link");
  //       link.href =
  //         "https://calendar.google.com/calendar/scheduling-button-script.css";
  //       link.rel = "stylesheet";
  //       document.head.appendChild(link);

  //       const script = document.createElement("script");
  //       script.src =
  //         "https://calendar.google.com/calendar/scheduling-button-script.js";
  //       script.async = true;
  //       script.onload = () => {
  //         window.calendar?.schedulingButton?.load({
  //           url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3lCZhyCwRBwv1rbHL-WIRKhbKfAa6o3mwFNRbf96WA-HIb7MIR2FI_NB4a3i4TOqUYBTlkHshj?gv=true",
  //           color: "#039BE5",
  //           label: "Réserver un rendez-vous",
  //           target: "#google-calendar-container",
  //         });
  //       };
  //       document.body.appendChild(script);

  //       return () => {
  //         // Cleanup when modal closes
  //         const oldButton = document.querySelector(
  //           "#google-calendar-container > *"
  //         );
  //         if (oldButton) oldButton.remove();
  //       };
  //     }
  //   }, [calendarModalOpen]);

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>
              <span>Formulaire de Pré-Diagnostic DIF+</span>
            </div>
            <h2 className={styles.subtitle}>
              Évaluation Institutionnelle et Financière
            </h2>
            <p className={styles.description}>
              Complétez ce formulaire en 3 minutes pour obtenir un diagnostic
              instantané.
            </p>
            <div className={styles.progress}>
              <p>Étape {step} / 6</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(step / 6) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            {/* Étape 1: Informations Générales */}
            {step === 1 && (
              <div className={styles.step}>
                <h3>I. Informations Générales</h3>

                <label className={styles.label}>
                  1. Nom de l'entreprise *
                  <input
                    className={cn(styles.input, {
                      [styles.inputError]: errors.companyName,
                    })}
                    value={form.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Entrez le nom de votre entreprise"
                  />
                  {errors.companyName && (
                    <span className={styles.errorMessage}>
                      {errors.companyName}
                    </span>
                  )}
                </label>
                <label className={styles.label}>
                  3. Téléphone de l'entreprise *
                  <input
                    className={cn(styles.input, {
                      [styles.inputError]: errors.companyPhone,
                    })}
                    value={form.companyPhone}
                    onChange={(e) =>
                      updateField("companyPhone", e.target.value)
                    }
                    placeholder="Entrez le téléphone de votre entreprise"
                    required
                    type="tel"
                  />
                  {errors.companyPhone && (
                    <span className={styles.errorMessage}>
                      {errors.companyPhone}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  2. Secteur d'activité *
                  <div className={styles.radioGroup}>
                    {["commercial", "industrial", "services", "other"].map(
                      (value) => (
                        <label key={value} className={styles.radioLabel}>
                          <input
                            type="radio"
                            name="sector"
                            value={value}
                            checked={form.sector === value}
                            onChange={(e) =>
                              updateField("sector", e.target.value)
                            }
                          />
                          {value === "commercial" && "Commercial"}
                          {value === "industrial" && "Industriel"}
                          {value === "services" && "Services"}
                          {value === "other" && "Autre"}
                        </label>
                      )
                    )}
                  </div>
                  {errors.sector && (
                    <span className={styles.errorMessage}>{errors.sector}</span>
                  )}
                  {/* إظهار حقل الإدخال عندما يختار "Autre" */}
                  {form.sector === "other" && (
                    <div className={styles.otherSectorInput}>
                      <label className={styles.label}>
                        Veuillez préciser votre secteur *
                        <input
                          className={cn(styles.input, {
                            [styles.inputError]: errors.otherSector,
                          })}
                          value={form.otherSector}
                          onChange={(e) =>
                            updateField("otherSector", e.target.value)
                          }
                          placeholder="Ex: Agriculture, Tourisme, Immobilier..."
                        />
                        {errors.otherSector && (
                          <span className={styles.errorMessage}>
                            {errors.otherSector}
                          </span>
                        )}
                      </label>
                    </div>
                  )}
                </label>

                <div className={styles.row}>
                  <label className={styles.label}>
                    3. Année de création
                    <input
                      className={styles.input}
                      type="number"
                      required
                      value={form.yearCreation}
                      onChange={(e) =>
                        updateField("yearCreation", e.target.value)
                      }
                      placeholder="ex: 2020"
                    />
                  </label>

                  <label className={styles.label}>
                    4. Ville
                    <input
                      className={styles.input}
                      required
                      value={form.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      placeholder="ex: Casablanca"
                    />
                  </label>
                </div>

                <label className={styles.label}>
                  5. Effectif actuel *
                  <div className={styles.radioGroup}>
                    {["1-5", "6-20", "21-50", "+50"].map((value) => (
                      <label key={value} className={styles.radioLabel}>
                        <input
                          type="radio"
                          name="employees"
                          value={value}
                          checked={form.employees === value}
                          onChange={(e) =>
                            updateField("employees", e.target.value)
                          }
                        />
                        {value}
                      </label>
                    ))}
                  </div>
                  {errors.employees && (
                    <span className={styles.errorMessage}>
                      {errors.employees}
                    </span>
                  )}
                </label>
              </div>
            )}

            {/* Étape 2: Structure & Organisation */}
            {step === 2 && (
              <div className={styles.step}>
                <h3>II. Structure & Organisation</h3>

                <label className={styles.label}>
                  6. Disposez-vous d'une structure organisationnelle formelle et
                  d'une description de poste définie ? *
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="orgStructure"
                        checked={form.hasOrgStructure === "yes"}
                        onChange={() => updateField("hasOrgStructure", "yes")}
                      />
                      Oui
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="orgStructure"
                        checked={form.hasOrgStructure === "no"}
                        onChange={() => updateField("hasOrgStructure", "no")}
                      />
                      Non
                    </label>
                  </div>
                  {errors.hasOrgStructure && (
                    <span className={styles.errorMessage}>
                      {errors.hasOrgStructure}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  7. Les décisions sont-elles prises au sein de l'entreprise sur
                  la base de données et de chiffres ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.decisionsBasedOnData,
                    })}
                    value={form.decisionsBasedOnData}
                    onChange={(e) =>
                      updateField("decisionsBasedOnData", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="always">Toujours</option>
                    <option value="sometimes">Parfois</option>
                    <option value="rarely">Rarement</option>
                    <option value="never">Jamais</option>
                  </select>
                  {errors.decisionsBasedOnData && (
                    <span className={styles.errorMessage}>
                      {errors.decisionsBasedOnData}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  8. Existe-t-il des mécanismes de contrôle interne et de suivi
                  de la performance ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.hasInternalControl,
                    })}
                    value={form.hasInternalControl}
                    onChange={(e) =>
                      updateField("hasInternalControl", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="regular">Oui, régulièrement</option>
                    <option value="weak">Oui, mais inefficace</option>
                    <option value="none">Non</option>
                  </select>
                  {errors.hasInternalControl && (
                    <span className={styles.errorMessage}>
                      {errors.hasInternalControl}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  9. Principaux défis organisationnels auxquels votre entreprise
                  est confrontée aujourd'hui :
                  <div className={styles.checkboxGroup}>
                    {[
                      "Faiblesse de la communication interne",
                      "Chevauchement des tâches et des responsabilités",
                      "Absence de redevabilité et de transparence",
                      "Difficulté à gérer le temps et la productivité",
                      "Absence de motivation et de fidélité",
                    ].map((ch) => (
                      <label key={ch} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={(form.orgChallenges || []).includes(ch)}
                          onChange={() => toggleChallenge(ch)}
                        />
                        {ch}
                      </label>
                    ))}
                  </div>
                </label>
              </div>
            )}

            {/* Étape 3: Situation Financière */}
            {step === 3 && (
              <div className={styles.step}>
                <h3>III. Situation Financière</h3>

                <label className={styles.label}>
                  10. Comment décrivez-vous votre situation financière actuelle
                  ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.financialSituation,
                    })}
                    value={form.financialSituation}
                    onChange={(e) =>
                      updateField("financialSituation", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="stable">Stable</option>
                    <option value="volatile">Volatile</option>
                    <option value="difficulty">En difficulté</option>
                    <option value="threatened">Menacée d'arrêt</option>
                  </select>
                  {errors.financialSituation && (
                    <span className={styles.errorMessage}>
                      {errors.financialSituation}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  11. Disposez-vous d'une étude financière ou d'un plan de
                  financement clair ? *
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="financialPlan"
                        checked={form.hasFinancialPlan === "yes"}
                        onChange={() => updateField("hasFinancialPlan", "yes")}
                      />
                      Oui
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="financialPlan"
                        checked={form.hasFinancialPlan === "no"}
                        onChange={() => updateField("hasFinancialPlan", "no")}
                      />
                      Non
                    </label>
                  </div>
                  {errors.hasFinancialPlan && (
                    <span className={styles.errorMessage}>
                      {errors.hasFinancialPlan}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  12. Votre entreprise a-t-elle des dettes ou des engagements
                  élevés ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.debtLevel,
                    })}
                    value={form.debtLevel}
                    onChange={(e) => updateField("debtLevel", e.target.value)}
                  >
                    <option value="">-- Choisir --</option>
                    <option value="none">Non</option>
                    <option value="under_control">
                      Oui, mais sous contrôle
                    </option>
                    <option value="high">
                      Oui, et cela représente un fardeau actuel
                    </option>
                  </select>
                  {errors.debtLevel && (
                    <span className={styles.errorMessage}>
                      {errors.debtLevel}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  13. Comment décrivez-vous la relation avec les banques ou les
                  investisseurs ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.banksRelation,
                    })}
                    value={form.banksRelation}
                    onChange={(e) =>
                      updateField("banksRelation", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="good">Bonne</option>
                    <option value="tense">Tendue</option>
                    <option value="cut">Coupée</option>
                    <option value="search">En recherche de solutions</option>
                  </select>
                  {errors.banksRelation && (
                    <span className={styles.errorMessage}>
                      {errors.banksRelation}
                    </span>
                  )}
                </label>
              </div>
            )}

            {/* Étape 4: Performance & Risques */}
            {step === 4 && (
              <div className={styles.step}>
                <h3>IV. Performance & Risques</h3>

                <label className={styles.label}>
                  14. Votre entreprise rencontre-t-elle des problèmes de flux de
                  ventes ou de contrats ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.salesProblems,
                    })}
                    value={form.salesProblems}
                    onChange={(e) =>
                      updateField("salesProblems", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="no">Non</option>
                    <option value="seasonal">Oui, saisonnières</option>
                    <option value="permanent">Oui, permanentes</option>
                  </select>
                  {errors.salesProblems && (
                    <span className={styles.errorMessage}>
                      {errors.salesProblems}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  15. Avez-vous déjà constaté du désordre, des détournements de
                  fonds ou une faiblesse du contrôle interne ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.observedFraud,
                    })}
                    value={form.observedFraud}
                    onChange={(e) =>
                      updateField("observedFraud", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="never">Jamais</option>
                    <option value="limited_cases">Quelques cas limités</option>
                    <option value="repeated">Oui, répétés</option>
                  </select>
                  {errors.observedFraud && (
                    <span className={styles.errorMessage}>
                      {errors.observedFraud}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  16. Quel est le niveau de dépendance de votre entreprise à
                  l'égard de la technologie ou de la digitalisation ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.digitalizationLevel,
                    })}
                    value={form.digitalizationLevel}
                    onChange={(e) =>
                      updateField("digitalizationLevel", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="high">Élevé</option>
                    <option value="medium">Moyen</option>
                    <option value="weak">Faible</option>
                    <option value="none">Aucun</option>
                  </select>
                  {errors.digitalizationLevel && (
                    <span className={styles.errorMessage}>
                      {errors.digitalizationLevel}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  17. L'entreprise a-t-elle un plan clair de développement de la
                  performance sur 12 mois ? *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.has12MonthsPlan,
                    })}
                    value={form.has12MonthsPlan}
                    onChange={(e) =>
                      updateField("has12MonthsPlan", e.target.value)
                    }
                  >
                    <option value="">-- Choisir --</option>
                    <option value="yes">Oui</option>
                    <option value="preparing">En préparation</option>
                    <option value="none">Aucune</option>
                  </select>
                  {errors.has12MonthsPlan && (
                    <span className={styles.errorMessage}>
                      {errors.has12MonthsPlan}
                    </span>
                  )}
                </label>
              </div>
            )}

            {/* Étape 5: Auto-Évaluation */}
            {step === 5 && (
              <div className={styles.step}>
                <h3>V. Auto-Évaluation</h3>

                <label className={styles.label}>
                  18. Choisissez la phrase la plus proche de la réalité de votre
                  entreprise aujourd'hui *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.selfEval,
                    })}
                    value={form.selfEval}
                    onChange={(e) => updateField("selfEval", e.target.value)}
                  >
                    <option value="">-- Choisir --</option>
                    <option value="lots_effort_no_results">
                      Je travaille beaucoup... mais les résultats n'apparaissent
                      pas
                    </option>
                    <option value="random">
                      Tout se passe spontanément et non selon un plan
                    </option>
                    <option value="under_control_no_metrics">
                      Les choses sont sous contrôle mais sans indicateurs de
                      mesure
                    </option>
                    <option value="clear_system">
                      J'ai un système clair et des objectifs précis
                    </option>
                  </select>
                  {errors.selfEval && (
                    <span className={styles.errorMessage}>
                      {errors.selfEval}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  19. Quel est l'objectif principal que vous poursuivez
                  aujourd'hui ? *
                  <div
                    className={cn(styles.checkboxGroup, {
                      [styles.inputError]: errors.mainGoal,
                    })}
                  >
                    {[
                      "Restructuration et organisation de l'entreprise",
                      "Amélioration de la rentabilité et de la liquidité",
                      "Éligibilité au financement bancaire ou à l'investissement",
                      "Maîtrise des risques et gouvernance",
                    ].map((goal) => (
                      <label key={goal} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={(form.mainGoal || []).includes(goal)}
                          onChange={() => toggleMainGoal(goal)}
                        />
                        {goal}
                      </label>
                    ))}
                  </div>
                  {errors.mainGoal && (
                    <span className={styles.errorMessage}>
                      {errors.mainGoal}
                    </span>
                  )}
                </label>
              </div>
            )}

            {/* Étape 6: Résumé مع الـ checkbox */}
            {step === 6 && (
              <div className={styles.step}>
                <h3>VI. Résumé avant validation</h3>
                <p className={styles.summaryText}>
                  Veuillez vérifier vos réponses avant de soumettre le
                  formulaire pour obtenir votre diagnostic.
                </p>

                {/* عرض جميع المعلومات */}
                <div className={styles.reviewSection}>
                  <h4>I. Informations Générales</h4>
                  <p>
                    <strong>Nom:</strong> {form.companyName}
                  </p>
                  <p>
                    <strong>Téléphone:</strong> {form.companyPhone}
                  </p>
                  <p>
                    <strong>Secteur:</strong>{" "}
                    {getDisplayValue("sector", form.sector)}
                  </p>
                  <p>
                    <strong>Année de création:</strong>{" "}
                    {form.yearCreation || "Non renseigné"}
                  </p>
                  <p>
                    <strong>Ville:</strong> {form.city || "Non renseigné"}
                  </p>
                  <p>
                    <strong>Effectif:</strong>{" "}
                    {getDisplayValue("employees", form.employees)}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>II. Structure & Organisation</h4>
                  <p>
                    <strong>Structure organisationnelle:</strong>{" "}
                    {getDisplayValue("hasOrgStructure", form.hasOrgStructure)}
                  </p>
                  <p>
                    <strong>Décisions basées sur données:</strong>{" "}
                    {getDisplayValue(
                      "decisionsBasedOnData",
                      form.decisionsBasedOnData
                    )}
                  </p>
                  <p>
                    <strong>Contrôle interne:</strong>{" "}
                    {getDisplayValue(
                      "hasInternalControl",
                      form.hasInternalControl
                    )}
                  </p>
                  <p>
                    <strong>Défis organisationnels:</strong>{" "}
                    {form.orgChallenges?.length > 0
                      ? form.orgChallenges.join(", ")
                      : "Aucun défi sélectionné"}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>III. Situation Financière</h4>
                  <p>
                    <strong>Situation financière:</strong>{" "}
                    {getDisplayValue(
                      "financialSituation",
                      form.financialSituation
                    )}
                  </p>
                  <p>
                    <strong>Plan financier:</strong>{" "}
                    {getDisplayValue("hasFinancialPlan", form.hasFinancialPlan)}
                  </p>
                  <p>
                    <strong>Niveau d'endettement:</strong>{" "}
                    {getDisplayValue("debtLevel", form.debtLevel)}
                  </p>
                  <p>
                    <strong>Relation banques:</strong>{" "}
                    {getDisplayValue("banksRelation", form.banksRelation)}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>IV. Performance & Risques</h4>
                  <p>
                    <strong>Problèmes de ventes:</strong>{" "}
                    {getDisplayValue("salesProblems", form.salesProblems)}
                  </p>
                  <p>
                    <strong>Désordres internes:</strong>{" "}
                    {getDisplayValue("observedFraud", form.observedFraud)}
                  </p>
                  <p>
                    <strong>Niveau digitalisation:</strong>{" "}
                    {getDisplayValue(
                      "digitalizationLevel",
                      form.digitalizationLevel
                    )}
                  </p>
                  <p>
                    <strong>Plan 12 mois:</strong>{" "}
                    {getDisplayValue("has12MonthsPlan", form.has12MonthsPlan)}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>V. Auto-Évaluation</h4>
                  <p>
                    <strong>Auto-évaluation:</strong>{" "}
                    {getDisplayValue("selfEval", form.selfEval)}
                  </p>
                  <p>
                    <strong>Objectifs:</strong>{" "}
                    {form.mainGoal?.length > 0
                      ? form.mainGoal.join(", ")
                      : "Aucun objectif sélectionné"}
                  </p>
                </div>

                {/* Checkbox الموافقة */}
                <div className={styles.consentSection}>
                  <label
                    className={cn(styles.checkboxLabel, styles.consentLabel)}
                  >
                    <input
                      type="checkbox"
                      checked={form.acceptTerms}
                      onChange={(e) =>
                        updateField("acceptTerms", e.target.checked)
                      }
                    />
                    <span>
                      J'accepte que mes réponses soient utilisées pour établir
                      un diagnostic et qu'on me recontacte. (Conformité
                      09‑08/RGPD) *
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <span className={styles.errorMessage}>
                      {errors.acceptTerms}
                    </span>
                  )}
                </div>
              </div>
            )}

            <StepButtons />
          </form>
        </div>
      </div>

      {/* Modal des résultats */}
      {resultModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Résultat Instantané</h3>
            <div className={styles.resultHeader}>
              <p className={styles.thankYouMessage}>
              Merci d'avoir complété le formulaire. Nous avons bien reçu vos détails.
              </p>

              {/* Image based on result category
              className={`${styles.resultBadge} ${styles[result.color]}`}
              */}
              <div >
                <div className={styles.resultImageContainer}>
                  {result.category === "Solide" && (
                    <img
                      src="/images/diagnostic/green.webp"
                      alt="Solide"
                      className={styles.resultImage}
                    />
                  )}
                  {result.category === "À améliorer" && (
                    <img
                      src="/images/diagnostic/yellow.webp"
                      alt="À améliorer"
                      className={styles.resultImage}
                    />
                  )}
                  {result.category === "À risque" && (
                    <img
                      src="/images/diagnostic/orange.webp"
                      alt="À risque"
                      className={styles.resultImage}
                    />
                  )}
                  {result.category === "Fragile" && (
                    <img
                      src="/images/diagnostic/red.webp"
                      alt="Fragile"
                      className={styles.resultImage}
                    />
                  )}
                </div>
                <br></br>
                <h1>
                <strong>Score:{result.scorePercent}%</strong> 
              </h1>

              </div>
              <p className={styles.resultDescription}>{result.description}</p>
            </div>

            <div className={styles.resultDetails}>
              
              <p className={styles.classification}>
                {/* D'après vos réponses, votre entreprise se situe au niveau :{" "} */}
                

                Votre entreprise est classée au niveau : <strong>{result.category}</strong>. Prêt à passer au niveau supérieur?
              </p>
            </div>

            <div className={styles.modalActions}>
              <button
                className={cn("button", styles.btn, styles.btnSecondary)}
                onClick={() => setResultModalOpen(false)}
              >
                Fermer
              </button>
              <button
                className={cn("button", styles.btn, styles.btnPrimary)}
                onClick={() => setCalendarModalOpen(true)}
              >
                Réserver un diagnostic
              </button>
            </div>
          </div>
        </div>
      )}
      {calendarModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Réservez votre diagnostic</h3>
            <p>Sélectionnez une date et une heure dans notre agenda :</p>

            <iframe
              title="Google Calendar Booking"
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3lCZhyCwRBwv1rbHL-WIRKhbKfAa6o3mwFNRbf96WA-HIb7MIR2FI_NB4a3i4TOqUYBTlkHshj?gv=true"
              style={{
                border: 0,
                width: "100%",
                height: "650px",
                borderRadius: "10px",
              }}
              allowFullScreen
            />

            <div className={styles.modalActions}>
              <button
                className={cn("button", styles.btn, styles.btnSecondary)}
                onClick={() => setCalendarModalOpen(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
