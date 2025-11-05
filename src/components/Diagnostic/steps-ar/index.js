import React, { useState } from "react";
import styles from "./steps.module.sass";
import cn from "classnames";

export default function Steps() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    sector: "",
    otherSector: "",
    yearCreation: "",
    city: "",
    employees: "",
    hasOrgStructure: "",
    decisionsBasedOnData: "",
    hasInternalControl: "",
    orgChallenges: [],
    financialSituation: "",
    hasFinancialPlan: "",
    debtLevel: "",
    banksRelation: "",
    salesProblems: "",
    observedFraud: "",
    digitalizationLevel: "",
    has12MonthsPlan: "",
    selfEval: "",
    mainGoal: [],
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
    const currentYear = new Date().getFullYear();

    if (step === 1) {
      if (!form.companyName?.trim())
        newErrors.companyName = "اسم المؤسسة مطلوب";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.companyEmail?.trim()) {
        newErrors.companyEmail = "البريد الإلكتروني مطلوب";
      } else if (!emailRegex.test(form.companyEmail)) {
        newErrors.companyEmail = "يرجى إدخال بريد إلكتروني صحيح";
      }

      const phoneRegex = /^[0-9+\s().-]{10,}$/;
      if (!form.companyPhone?.trim()) {
        newErrors.companyPhone = "هاتف المؤسسة مطلوب";
      } else if (!phoneRegex.test(form.companyPhone)) {
        newErrors.companyPhone = "يرجى إدخال رقم هاتف صحيح";
      }

      if (!form.sector) newErrors.sector = "يرجى اختيار القطاع";

      if (form.sector === "other" && !form.otherSector?.trim())
        newErrors.otherSector = "يرجى تحديد قطاعك";

      if (!form.yearCreation?.trim())
        newErrors.yearCreation = "سنة التأسيس مطلوبة";
      else if (form.yearCreation < 1900 || form.yearCreation > currentYear) {
        newErrors.yearCreation = `يجب أن تكون السنة بين 1900 و ${currentYear}`;
      }

      if (!form.city?.trim()) newErrors.city = "المدينة مطلوبة";

      if (!form.employees) newErrors.employees = "يرجى اختيار عدد الموظفين";
    }

    if (step === 2) {
      if (!form.hasOrgStructure) {
        newErrors.hasOrgStructure = "يرجى اختيار إجابة";
      }
      if (!form.decisionsBasedOnData) {
        newErrors.decisionsBasedOnData = "يرجى اختيار إجابة";
      }
      if (!form.hasInternalControl) {
        newErrors.hasInternalControl = "يرجى اختيار إجابة";
      }
    }

    if (step === 3) {
      if (!form.financialSituation || form.financialSituation === "")
        newErrors.financialSituation = "يرجى وصف وضعك المالي";
      if (!form.hasFinancialPlan)
        newErrors.hasFinancialPlan = "هذا الحقل مطلوب";
      if (!form.debtLevel || form.debtLevel === "")
        newErrors.debtLevel = "يرجى اختيار مستوى المديونية";
      if (!form.banksRelation || form.banksRelation === "")
        newErrors.banksRelation = "يرجى وصف العلاقة مع البنوك";
    }

    if (step === 4) {
      if (!form.salesProblems || form.salesProblems === "")
        newErrors.salesProblems = "يرجى اختيار إجابة";
      if (!form.observedFraud || form.observedFraud === "")
        newErrors.observedFraud = "يرجى اختيار إجابة";
      if (!form.digitalizationLevel || form.digitalizationLevel === "")
        newErrors.digitalizationLevel = "يرجى اختيار مستوى الرقمنة";
      if (!form.has12MonthsPlan || form.has12MonthsPlan === "")
        newErrors.has12MonthsPlan = "يرجى اختيار إجابة";
    }

    if (step === 5) {
      if (!form.selfEval || form.selfEval === "")
        newErrors.selfEval = "يرجى اختيار جملة";
      if (!form.mainGoal || form.mainGoal.length === 0)
        newErrors.mainGoal = "يرجى اختيار هدف واحد على الأقل";
    }

    if (step === 6) {
      if (!form.acceptTerms)
        newErrors.acceptTerms = "يجب الموافقة على الشروط للمتابعة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    const empMap = { "1-5": 3, "6-20": 5, "21-50": 7, "+50": 10 };
    totalScore += empMap[form.employees] || 0;
    maxScore += 10;

    totalScore += form.hasOrgStructure === "yes" ? 3 : 0;
    const decisionsMap = { always: 3, sometimes: 2, rarely: 1, never: 0 };
    totalScore += decisionsMap[form.decisionsBasedOnData] || 0;
    const controlMap = { regular: 3, weak: 1, none: 0 };
    totalScore += controlMap[form.hasInternalControl] || 0;
    const challengeCount = Math.min((form.orgChallenges || []).length, 3);
    totalScore = Math.max(0, totalScore - challengeCount);
    maxScore += 9;

    const finSitMap = { stable: 3, volatile: 2, difficulty: 1, threatened: 0 };
    totalScore += finSitMap[form.financialSituation] || 0;
    totalScore += form.hasFinancialPlan === "yes" ? 3 : 0;
    const debtMap = { none: 3, under_control: 2, high: 0 };
    totalScore += debtMap[form.debtLevel] || 0;
    const bankMap = { good: 3, search: 2, tense: 1, cut: 0 };
    totalScore += bankMap[form.banksRelation] || 0;
    maxScore += 12;

    const salesMap = { no: 3, seasonal: 2, permanent: 1 };
    totalScore += salesMap[form.salesProblems] || 0;
    const fraudMap = { never: 3, limited_cases: 1, repeated: 0 };
    totalScore += fraudMap[form.observedFraud] || 0;
    const digiMap = { high: 3, medium: 2, weak: 1, none: 0 };
    totalScore += digiMap[form.digitalizationLevel] || 0;
    const planMap = { yes: 3, preparing: 2, none: 0 };
    totalScore += planMap[form.has12MonthsPlan] || 0;
    maxScore += 12;

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

    const scorePercent = Math.round((totalScore / maxScore) * 100);

    let category = "",
      color = "",
      description = "";
    if (scorePercent >= 80) {
      category = "متينة";
      color = "green";
      description = "هيكل مؤسسي متين ووضعية مالية مستقرة.";
    } else if (scorePercent >= 60) {
      category = "تحتاج تحسين";
      color = "yellow";
      description = "أداء مقبول، لكن هناك نقاط ضعف تنظيمية أو مالية مستمرة.";
    } else if (scorePercent >= 40) {
      category = "في خطر";
      color = "orange";
      description = "تم اكتشاف نقاط ضعف متعددة في التسيير والتمويل والمراقبة.";
    } else {
      category = "هشة";
      color = "red";
      description = "طارئ: غياب تام للحكامة أو خلل مالي خطير";
    }

    return { scorePercent, category, color, description };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      const calc = calculateScore();
      setResult(calc);
      const sendSuccess = await sendDiagnosticData(form, calc);
      if (sendSuccess) {
        setResultModalOpen(true);
      } else {
        alert("خطأ في إرسال التشخيص. يرجى المحاولة مرة أخرى.");
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
          رجوع
        </button>
      )}
      {step < 6 && (
        <button
          type="button"
          className={cn("button", styles.btn, styles.btnPrimary)}
          onClick={handleNext}
        >
          التالي
        </button>
      )}
      {step === 6 && (
        <button
          type="button"
          className={cn("button", styles.btn, styles.btnPrimary)}
          onClick={handleSubmit}
        >
          عرض نتيجتي
        </button>
      )}
    </div>
  );

  const getDisplayValue = (key, value) => {
    const maps = {
      sector: {
        commercial: "تجاري",
        industrial: "صناعي",
        services: "خدمات",
        other: form.otherSector || "آخر (غير محدد)",
      },
      employees: {
        "1-5": "1-5",
        "6-20": "6-20",
        "21-50": "21-50",
        "+50": "+50",
      },
      hasOrgStructure: {
        yes: "نعم",
        no: "لا",
      },
      decisionsBasedOnData: {
        always: "دائماً",
        sometimes: "أحياناً",
        rarely: "نادراً",
        never: "أبداً",
      },
      hasInternalControl: {
        regular: "نعم، بانتظام",
        weak: "نعم، لكن غير فعال",
        none: "لا",
      },
      financialSituation: {
        stable: "مستقرة",
        volatile: "متقلبة",
        difficulty: "في صعوبة",
        threatened: "مهددة بالتوقف",
      },
      hasFinancialPlan: {
        yes: "نعم",
        no: "لا",
      },
      debtLevel: {
        none: "لا",
        under_control: "نعم، لكن تحت السيطرة",
        high: "نعم، وتمثل عبئاً حالياً",
      },
      banksRelation: {
        good: "جيدة",
        tense: "متوترة",
        cut: "مقطوعة",
        search: "في بحث عن حلول",
      },
      salesProblems: {
        no: "لا",
        seasonal: "نعم، موسمية",
        permanent: "نعم، دائمة",
      },
      observedFraud: {
        never: "أبداً",
        limited_cases: "بعض الحالات المحدودة",
        repeated: "نعم، متكررة",
      },
      digitalizationLevel: {
        high: "مرتفع",
        medium: "متوسط",
        weak: "ضعيف",
        none: "لا يوجد",
      },
      has12MonthsPlan: {
        yes: "نعم",
        preparing: "قيد الإعداد",
        none: "لا يوجد",
      },
      selfEval: {
        lots_effort_no_results: "أعمل كثيراً... لكن النتائج لا تظهر",
        random: "كل شيء يحدث تلقائياً وليس وفق خطة",
        under_control_no_metrics: "الأمور تحت السيطرة لكن بدون مؤشرات قياس",
        clear_system: "لدي نظام واضح وأهداف دقيقة",
      },
    };

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    return maps[key]?.[value] || value || "غير مذكور";
  };

  const sendDiagnosticData = async (formData, resultData) => {
    try {
      const response = await fetch(
        "https://e-mail-dynamic.vercel.app/api/diagnostic",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            result: resultData,
            submissionDate: new Date().toISOString(),
          }),
        }
      );
      return response.ok;
    } catch (error) {
      console.error("خطأ في إرسال بيانات التشخيص:", error);
      return false;
    }
  };

  const handleBackToHome = () => {
    window.location.reload();
  };

  const handleBackHome = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.section} dir="rtl" id="diagnostic-form">
      <div className={cn("container", styles.container)}>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <div className={styles.title}>
              <span>نموذج التشخيص المسبق DIF+</span>
            </div>
            <h2 className={styles.subtitle}>التقييم المؤسسي والمالي</h2>
            <p className={styles.description}>
              أكمل هذا النموذج في 3 دقائق للحصول على تشخيص فوري.
            </p>
            <div className={styles.progress}>
              <p>الخطوة {step} / 6</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(step / 6) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className={styles.step}>
                <h3>I. المعلومات العامة</h3>
                <label className={styles.label}>
                  1. اسم المؤسسة *
                  <input
                    className={cn(styles.input, {
                      [styles.inputError]: errors.companyName,
                    })}
                    value={form.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="أدخل اسم مؤسستك"
                    required
                  />
                  {errors.companyName && (
                    <span className={styles.errorMessage}>
                      {errors.companyName}
                    </span>
                  )}
                </label>
                <label className={styles.label}>
                  2. البريد الإلكتروني للتواصل *
                  <input
                    className={cn(styles.input, {
                      [styles.inputError]: errors.companyEmail,
                    })}
                    value={form.companyEmail}
                    onChange={(e) =>
                      updateField("companyEmail", e.target.value)
                    }
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    type="email"
                  />
                  {errors.companyEmail && (
                    <span className={styles.errorMessage}>
                      {errors.companyEmail}
                    </span>
                  )}
                </label>
                <label className={styles.label}>
                  3. هاتف المؤسسة *
                  <input
                    className={cn(styles.input, {
                      [styles.inputError]: errors.companyPhone,
                    })}
                    type="tel"
                    value={form.companyPhone}
                    onChange={(e) =>
                      updateField("companyPhone", e.target.value)
                    }
                    placeholder="أدخل رقم هاتفك"
                    required
                    style={{ dir: "rtl", textAlign: "right" }}
                  />
                  {errors.companyPhone && (
                    <span className={styles.errorMessage}>
                      {errors.companyPhone}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  4. قطاع النشاط *
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
                            required
                          />
                          {value === "commercial" && "تجاري"}
                          {value === "industrial" && "صناعي"}
                          {value === "services" && "خدمات"}
                          {value === "other" && "آخر"}
                        </label>
                      )
                    )}
                  </div>
                  {errors.sector && (
                    <span className={styles.errorMessage}>{errors.sector}</span>
                  )}
                  {form.sector === "other" && (
                    <div className={styles.otherSectorInput}>
                      <label className={styles.label}>
                        يرجى تحديد قطاعك *
                        <input
                          className={cn(styles.input, {
                            [styles.inputError]: errors.otherSector,
                          })}
                          value={form.otherSector}
                          onChange={(e) =>
                            updateField("otherSector", e.target.value)
                          }
                          placeholder="مثال: فلاحة، سياحة، عقار..."
                          required
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
                    5. سنة التأسيس *
                    <input
                      className={cn(styles.input, {
                        [styles.inputError]: errors.yearCreation,
                      })}
                      type="number"
                      value={form.yearCreation}
                      onChange={(e) =>
                        updateField("yearCreation", e.target.value)
                      }
                      placeholder="مثال: 2020"
                      required
                    />
                    {errors.yearCreation && (
                      <span className={styles.errorMessage}>
                        {errors.yearCreation}
                      </span>
                    )}
                  </label>

                  <label className={styles.label}>
                    6. المدينة *
                    <input
                      className={cn(styles.input, {
                        [styles.inputError]: errors.city,
                      })}
                      value={form.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      placeholder="مثال: الدار البيضاء"
                      required
                    />
                    {errors.city && (
                      <span className={styles.errorMessage}>{errors.city}</span>
                    )}
                  </label>
                </div>

                <label className={styles.label}>
                  7. عدد الموظفين الحالي *
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
                          required
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

            {step === 2 && (
              <div className={styles.step}>
                <h3>II. الهيكلة والتنظيم</h3>

                {/* Question 8 */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    8. هل لديك هيكل تنظيمي رسمي ووصف وظيفي محدد؟ *
                  </label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="orgStructure"
                        checked={form.hasOrgStructure === "yes"}
                        onChange={() => updateField("hasOrgStructure", "yes")}
                      />
                      نعم
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="orgStructure"
                        checked={form.hasOrgStructure === "no"}
                        onChange={() => updateField("hasOrgStructure", "no")}
                      />
                      لا
                    </label>
                  </div>
                  {errors.hasOrgStructure && (
                    <div className={styles.errorMessage}>
                      {errors.hasOrgStructure}
                    </div>
                  )}
                </div>

                {/* Question 9 */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    9. هل يتم اتخاذ القرارات داخل المؤسسة بناءً على معطيات
                    وأرقام؟ *
                  </label>
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.decisionsBasedOnData,
                    })}
                    value={form.decisionsBasedOnData}
                    onChange={(e) =>
                      updateField("decisionsBasedOnData", e.target.value)
                    }
                  >
                    <option value="">-- اختر --</option>
                    <option value="always">دائماً</option>
                    <option value="sometimes">أحياناً</option>
                    <option value="rarely">نادراً</option>
                    <option value="never">أبداً</option>
                  </select>
                  {errors.decisionsBasedOnData && (
                    <div className={styles.errorMessage}>
                      {errors.decisionsBasedOnData}
                    </div>
                  )}
                </div>

                {/* Question 10 */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    10. هل توجد آليات للمراقبة الداخلية ومتابعة الأداء؟ *
                  </label>
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.hasInternalControl,
                    })}
                    value={form.hasInternalControl}
                    onChange={(e) =>
                      updateField("hasInternalControl", e.target.value)
                    }
                  >
                    <option value="">-- اختر --</option>
                    <option value="regular">نعم، بانتظام</option>
                    <option value="weak">نعم، لكن غير فعال</option>
                    <option value="none">لا</option>
                  </select>
                  {errors.hasInternalControl && (
                    <div className={styles.errorMessage}>
                      {errors.hasInternalControl}
                    </div>
                  )}
                </div>

                {/* Question 11 */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    11. التحديات التنظيمية الرئيسية التي تواجهها مؤسستك اليوم:
                  </label>
                  <div className={styles.checkboxGroup}>
                    {[
                      "ضعف التواصل الداخلي",
                      "تداخل المهام والمسؤوليات",
                      "غياب المحاسبة والشفافية",
                      "صعوبة في إدارة الوقت والإنتاجية",
                      "غياب التحفيز والولاء",
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
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.step}>
                <h3>III. الوضعية المالية</h3>
                <label className={styles.label}>
                  12. كيف تصف وضعك المالي الحالي؟ *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.financialSituation,
                    })}
                    value={form.financialSituation}
                    onChange={(e) =>
                      updateField("financialSituation", e.target.value)
                    }
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="stable">مستقرة</option>
                    <option value="volatile">متقلبة</option>
                    <option value="difficulty">في صعوبة</option>
                    <option value="threatened">مهددة بالتوقف</option>
                  </select>
                  {errors.financialSituation && (
                    <span className={styles.errorMessage}>
                      {errors.financialSituation}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  13. هل لديك دراسة مالية أو خطة تمويل واضحة؟ *
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="financialPlan"
                        checked={form.hasFinancialPlan === "yes"}
                        onChange={() => updateField("hasFinancialPlan", "yes")}
                        required
                      />
                      نعم
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="financialPlan"
                        checked={form.hasFinancialPlan === "no"}
                        onChange={() => updateField("hasFinancialPlan", "no")}
                        required
                      />
                      لا
                    </label>
                  </div>
                  {errors.hasFinancialPlan && (
                    <span className={styles.errorMessage}>
                      {errors.hasFinancialPlan}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  14. هل لمؤسستك ديون أو التزامات مرتفعة؟ *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.debtLevel,
                    })}
                    value={form.debtLevel}
                    onChange={(e) => updateField("debtLevel", e.target.value)}
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="none">لا</option>
                    <option value="under_control">نعم، لكن تحت السيطرة</option>
                    <option value="high">نعم، وتمثل عبئاً حالياً</option>
                  </select>
                  {errors.debtLevel && (
                    <span className={styles.errorMessage}>
                      {errors.debtLevel}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  15. كيف تصف العلاقة مع البنوك أو المستثمرين؟ *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.banksRelation,
                    })}
                    value={form.banksRelation}
                    onChange={(e) =>
                      updateField("banksRelation", e.target.value)
                    }
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="good">جيدة</option>
                    <option value="tense">متوترة</option>
                    <option value="cut">مقطوعة</option>
                    <option value="search">في بحث عن حلول</option>
                  </select>
                  {errors.banksRelation && (
                    <span className={styles.errorMessage}>
                      {errors.banksRelation}
                    </span>
                  )}
                </label>
              </div>
            )}

            {/* Les autres étapes restent inchangées */}
            {step === 4 && (
              <div className={styles.step}>
                <h3>IV. الأداء والمخاطر</h3>
                <label className={styles.label}>
                  16. هل تواجه مؤسستك مشاكل في تدفق المبيعات أو العقود؟ *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.salesProblems,
                    })}
                    value={form.salesProblems}
                    onChange={(e) =>
                      updateField("salesProblems", e.target.value)
                    }
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="no">لا</option>
                    <option value="seasonal">نعم، موسمية</option>
                    <option value="permanent">نعم، دائمة</option>
                  </select>
                  {errors.salesProblems && (
                    <span className={styles.errorMessage}>
                      {errors.salesProblems}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  17. هل لاحظت من قبل اضطرابات، اختلاسات أو ضعف في المراقبة
                  الداخلية؟ *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.observedFraud,
                    })}
                    value={form.observedFraud}
                    onChange={(e) =>
                      updateField("observedFraud", e.target.value)
                    }
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="never">أبداً</option>
                    <option value="limited_cases">بعض الحالات المحدودة</option>
                    <option value="repeated">نعم، متكررة</option>
                  </select>
                  {errors.observedFraud && (
                    <span className={styles.errorMessage}>
                      {errors.observedFraud}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  18. ما هو مستوى اعتماد مؤسستك على التكنولوجيا أو الرقمنة؟ *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.digitalizationLevel,
                    })}
                    value={form.digitalizationLevel}
                    onChange={(e) =>
                      updateField("digitalizationLevel", e.target.value)
                    }
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="high">مرتفع</option>
                    <option value="medium">متوسط</option>
                    <option value="weak">ضعيف</option>
                    <option value="none">لا يوجد</option>
                  </select>
                  {errors.digitalizationLevel && (
                    <span className={styles.errorMessage}>
                      {errors.digitalizationLevel}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  19. هل للمؤسسة خطة واضحة لتطوير الأداء خلال 12 شهراً؟ *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.has12MonthsPlan,
                    })}
                    value={form.has12MonthsPlan}
                    onChange={(e) =>
                      updateField("has12MonthsPlan", e.target.value)
                    }
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="yes">نعم</option>
                    <option value="preparing">قيد الإعداد</option>
                    <option value="none">لا يوجد</option>
                  </select>
                  {errors.has12MonthsPlan && (
                    <span className={styles.errorMessage}>
                      {errors.has12MonthsPlan}
                    </span>
                  )}
                </label>
              </div>
            )}

            {step === 5 && (
              <div className={styles.step}>
                <h3>V. التقييم الذاتي</h3>
                <label className={styles.label}>
                  20. اختر الجملة الأقرب إلى واقع مؤسستك اليوم *
                  <select
                    className={cn(styles.select, {
                      [styles.inputError]: errors.selfEval,
                    })}
                    value={form.selfEval}
                    onChange={(e) => updateField("selfEval", e.target.value)}
                    required
                  >
                    <option value="">-- اختر --</option>
                    <option value="lots_effort_no_results">
                      أعمل كثيراً... لكن النتائج لا تظهر
                    </option>
                    <option value="random">
                      كل شيء يحدث تلقائياً وليس وفق خطة
                    </option>
                    <option value="under_control_no_metrics">
                      الأمور تحت السيطرة لكن بدون مؤشرات قياس
                    </option>
                    <option value="clear_system">
                      لدي نظام واضح وأهداف دقيقة
                    </option>
                  </select>
                  {errors.selfEval && (
                    <span className={styles.errorMessage}>
                      {errors.selfEval}
                    </span>
                  )}
                </label>

                <label className={styles.label}>
                  21. ما هو الهدف الرئيسي الذي تسعى إليه اليوم؟ *
                  <div
                    className={cn(styles.checkboxGroup, {
                      [styles.inputError]: errors.mainGoal,
                    })}
                  >
                    {[
                      "إعادة الهيكلة والتنظيم للمؤسسة",
                      "تحسين الربحية والسيولة",
                      "الأهلية للتمويل البنكي أو الاستثمار",
                      "التحكم في المخاطر والحكامة",
                    ].map((goal) => (
                      <label key={goal} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={(form.mainGoal || []).includes(goal)}
                          onChange={() => toggleMainGoal(goal)}
                          required
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

            {step === 6 && (
              <div className={styles.step}>
                <h3>VI. الملخص قبل المصادقة</h3>
                <p className={styles.summaryText}>
                  يرجى مراجعة إجاباتك قبل إرسال النموذج للحصول على تشخيصك.
                </p>

                <div className={styles.reviewSection}>
                  <h4>I. المعلومات العامة</h4>
                  <p>
                    <strong>الاسم:</strong> {form.companyName}
                  </p>
                  <p>
                    <strong>البريد الإلكتروني:</strong> {form.companyEmail}
                  </p>
                  <p>
                    <strong>الهاتف:</strong> {form.companyPhone}
                  </p>
                  <p>
                    <strong>القطاع:</strong>{" "}
                    {getDisplayValue("sector", form.sector)}
                  </p>
                  <p>
                    <strong>سنة التأسيس:</strong> {form.yearCreation}
                  </p>
                  <p>
                    <strong>المدينة:</strong> {form.city}
                  </p>
                  <p>
                    <strong>عدد الموظفين:</strong>{" "}
                    {getDisplayValue("employees", form.employees)}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>II. الهيكلة والتنظيم</h4>
                  <p>
                    <strong>الهيكل التنظيمي:</strong>{" "}
                    {getDisplayValue("hasOrgStructure", form.hasOrgStructure)}
                  </p>
                  <p>
                    <strong>القرارات بناءً على معطيات:</strong>{" "}
                    {getDisplayValue(
                      "decisionsBasedOnData",
                      form.decisionsBasedOnData
                    )}
                  </p>
                  <p>
                    <strong>المراقبة الداخلية:</strong>{" "}
                    {getDisplayValue(
                      "hasInternalControl",
                      form.hasInternalControl
                    )}
                  </p>
                  <p>
                    <strong>التحديات التنظيمية:</strong>{" "}
                    {form.orgChallenges?.length > 0
                      ? form.orgChallenges.join(", ")
                      : "لم يتم اختيار أي تحديات"}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>III. الوضعية المالية</h4>
                  <p>
                    <strong>الوضعية المالية:</strong>{" "}
                    {getDisplayValue(
                      "financialSituation",
                      form.financialSituation
                    )}
                  </p>
                  <p>
                    <strong>الخطة المالية:</strong>{" "}
                    {getDisplayValue("hasFinancialPlan", form.hasFinancialPlan)}
                  </p>
                  <p>
                    <strong>مستوى المديونية:</strong>{" "}
                    {getDisplayValue("debtLevel", form.debtLevel)}
                  </p>
                  <p>
                    <strong>العلاقة مع البنوك:</strong>{" "}
                    {getDisplayValue("banksRelation", form.banksRelation)}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>IV. الأداء والمخاطر</h4>
                  <p>
                    <strong>مشاكل المبيعات:</strong>{" "}
                    {getDisplayValue("salesProblems", form.salesProblems)}
                  </p>
                  <p>
                    <strong>الاضطرابات الداخلية:</strong>{" "}
                    {getDisplayValue("observedFraud", form.observedFraud)}
                  </p>
                  <p>
                    <strong>مستوى الرقمنة:</strong>{" "}
                    {getDisplayValue(
                      "digitalizationLevel",
                      form.digitalizationLevel
                    )}
                  </p>
                  <p>
                    <strong>الخطة لـ 12 شهراً:</strong>{" "}
                    {getDisplayValue("has12MonthsPlan", form.has12MonthsPlan)}
                  </p>
                </div>

                <div className={styles.reviewSection}>
                  <h4>V. التقييم الذاتي</h4>
                  <p>
                    <strong>التقييم الذاتي:</strong>{" "}
                    {getDisplayValue("selfEval", form.selfEval)}
                  </p>
                  <p>
                    <strong>الأهداف:</strong>{" "}
                    {form.mainGoal?.length > 0
                      ? form.mainGoal.join(", ")
                      : "لم يتم اختيار أي أهداف"}
                  </p>
                </div>

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
                      required
                    />
                    <span>
                      أوافق على استخدام إجاباتي لإعداد تشخيص والاتصال بي.
                      (الامتثال 09‑08/RGPD) *
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
        <button
          onClick={handleBackToHome}
          className={cn("button-stroke", styles.BackButton)}
        >
          ⮕ عودة إلى الصفحة الرئيسية
        </button>
      </div>

      {/* Les modales restent inchangées */}
      {resultModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>النتيجة الفورية</h3>
            <div className={styles.resultHeader}>
              <p className={styles.thankYouMessage}>
                شكراً لإكمال النموذج. لقد استلمنا تفاصيلك بنجاح.
              </p>

              <div>
                <div className={styles.resultImageContainer}>
                  {result.category === "متينة" && (
                    <img
                      src="/images/diagnostic/green.webp"
                      alt="متينة"
                      className={styles.resultImage}
                    />
                  )}
                  {result.category === "تحتاج تحسين" && (
                    <img
                      src="/images/diagnostic/yellow.webp"
                      alt="تحتاج تحسين"
                      className={styles.resultImage}
                    />
                  )}
                  {result.category === "في خطر" && (
                    <img
                      src="/images/diagnostic/orange.webp"
                      alt="في خطر"
                      className={styles.resultImage}
                    />
                  )}
                  {result.category === "هشة" && (
                    <img
                      src="/images/diagnostic/red.webp"
                      alt="هشة"
                      className={styles.resultImage}
                    />
                  )}
                </div>
                <br />
                <div
                  className={cn(styles.scoreContainer, styles[result.color])}
                >
                  <h1 className={styles.scoreText}>
                    <strong>النسبة: {result.scorePercent}%</strong>
                  </h1>
                </div>
              </div>
              <p className={styles.resultDescription}>{result.description}</p>
            </div>

            <div className={styles.resultDetails}>
              <p className={styles.classification}>
                مؤسستك مصنفة في المستوى:{" "}
                <strong
                  style={{
                    color:
                      result.color === "green"
                        ? "#34b759"
                        : result.color === "yellow"
                        ? "#ffd02c"
                        : result.color === "orange"
                        ? "#ff8b2c"
                        : "#e81f1f",
                  }}
                >
                  {result.category}
                </strong>
                .<br></br>
                مستعد للانتقال إلى المستوى الأعلى؟
              </p>
            </div>

            <div className={styles.modalActions}>
              <button
                className={cn("button", styles.btn, styles.btnSecondary)}
                onClick={handleBackHome}
              >
                إغلاق
              </button>
              <button
                className={cn("button", styles.btn, styles.btnPrimary)}
                onClick={() => setCalendarModalOpen(true)}
              >
                حجز موعد تشخيص
              </button>
            </div>
          </div>
        </div>
      )}
      {calendarModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>احجز موعد التشخيص</h3>
            <p>اختر تاريخاً و وقتاً في جدولنا:</p>

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
              className={styles.modalIframe}
            />

            <div className={styles.modalActions}>
              <button
                className={cn("button", styles.btn, styles.btnSecondary)}
                onClick={(handleBackHome)}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
