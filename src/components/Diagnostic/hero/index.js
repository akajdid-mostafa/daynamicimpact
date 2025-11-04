import React, { useState } from "react";
import styles from "./hero.module.sass";
import cn from "classnames";

export default function HeroSection({ onLanguageSelect, onStartForm }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (onLanguageSelect) {
      onLanguageSelect(language);
    }
  };

  const handleStartDiagnostic = () => {
    if (selectedLanguage) {
      if (onStartForm) {
        onStartForm();
      }
    } else {
      alert("Veuillez choisir une langue / يرجى اختيار اللغة");
    }
  };

  return (
    <>
      <div className={styles.breadcrumbs}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrap}>
            <img
              src="/images/diagnostic/diagnostic.webp"
              alt="Contact Dynamic Impact - Agence marketing digital et transformation"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
              <div className={styles.content}>
                <h2 className={cn("h3", styles.frtitle)}>
                  Évaluez la performance de votre entreprise en 3 min
                </h2>
                <h2 className={cn("h3", styles.artitle)}>
                  حول رؤيتك إلى تأثير ملموس: قيم أداء شركتك في 3 دقائق فقط
                </h2>
                <div className={styles.introDesc}>
                  <p>
                    Recevez un diagnostic gratuit révélant vos forces, vos
                    leviers de croissance et les priorités à améliorer.
                  </p>
                  <p>
                    أحصل على تقرير مجاني يكشف نقاط القوة، محركات النمو، ومجالات
                    التحسين داخل شركتك
                  </p>
                </div>

                {/* زر اختيار اللغة */}
                <div className={styles.languageSelector}>
                  <h3 className={styles.languageTitle}>
                    Choisissez votre langue pour commencer
                  </h3>
                  <h4 className={styles.languageSubtitle}>إختر لغة التقييم :</h4>

                  <div className={styles.languageButtons}>
                    <button
                      className={cn("button-stroke" ,styles.button2, {
                        [styles.selected]: selectedLanguage === "french",
                      })}
                      onClick={() => handleLanguageChange("french")}
                    >
                      Français
                    </button>
                    
                    <button
                      className={cn("button-stroke" ,styles.button2, {
                        [styles.selected]: selectedLanguage === "arabic",
                      })}
                      onClick={() => handleLanguageChange("arabic")}
                    >
                      العربية
                    </button>
                  </div>
                </div>

                {/* زر البدء */}
                <div className={styles.ctaSection}>
                  <button 
                    className={cn("button", styles.Button)}
                    onClick={handleStartDiagnostic}
                  >
                    Commencer le diagnostic Gratuit
                  </button>

                  {/* النص الإضافي */}
                  <div className={styles.additionalText}>
                    <p className={styles.frSmall}>
                      Vos réponses restent strictement confidentielles et
                      protégées conformément à nos engagements et à la
                      réglementation en vigueur (RGPD)
                    </p>
                    <p className={styles.arSmall}>
                      إجاباتك تبقى سرية ومحمية تماماً وفقاً لالتزاماتنا واللوائح
                      المعمول بها
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}