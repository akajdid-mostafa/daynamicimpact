import React, { useState } from "react";
import styles from "./contact.module.sass";
import { MdMarkEmailRead, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import Breadcrumbs from "./Breadcrumbs";
import cn from "classnames";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "0",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare data in the required format
      const emailData = {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        message: formData.message,
      };

      const res = await fetch("https://email-lemon-pi.vercel.app/api/dynamic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (res.ok) {
        console.log("Email sent successfully!");
        setShowToast(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(() => setShowToast(false), 3000);
      } else {
        console.error("Failed to send email:", res.status);
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <Breadcrumbs />
      <div className={styles.contactWrapper}>
        <div className={styles.intro}>
          <h2 className={cn("h3", styles.title)}>Contactez Dynamic Impact</h2>
          <p className={styles.introDesc}>
            Vous cherchez à clarifier vos décisions et accélérer vos résultats ?
            Nous vous aidons à transformer votre stratégie, vos processus
            digitaux et votre performance pour atteindre vos
            objectifs.<strong>Contactez-nous dès maintenant</strong> pour discuter de votre
            projet et des solutions adaptées.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className={styles.cards}>
          <ContactCard
            icon={<MdLocationOn className={styles.icon} />}
            title="Adresse"
            description="5è étage, bureau N°38, Immeuble Corner Office, Bd Zoulikha Nasri, Casablanca"
            link="https://maps.app.goo.gl/VyAELKEnQyZBrGrf7"
            linkText="Voir sur Google Maps"
          />
          <ContactCard
            icon={<MdPhoneInTalk className={styles.icon} />}
            title="Téléphone"
            description="Appelez-nous directement"
            link="tel:+212660434143"
            linkText="+212 604-34143"
          />
          <ContactCard
            icon={<MdMarkEmailRead className={styles.icon} />}
            title="Email"
            description="Contactez-nous par email"
            link="mailto:contact@dynamicimpact.ma"
            linkText="contact@dynamicimpact.ma"
          />
        </div>

        {/* BUSINESS HOURS & CTA */}
        {/* <div className={styles.businessInfo}>
           <div className={styles.hours}>
             <h3>Horaires de contact</h3>
             <p>Lun–Ven : 09:00 – 18:00 • Sam : sur RDV • Dimanche : fermé</p>
           </div>
           <div className={styles.ctaBlock}>
             <a
               href="https://wa.me/212704309787"
               className={cn("button", styles.button)}
               target="_blank"
               rel="noreferrer"
             >
               Demander un devis gratuit
             </a>
           </div>
         </div> */}

        {/* MAP + SOCIAL + FORM */}
        <div className={styles.bottom}>
          <div className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88677.38504802622!2d-7.683279861497648!3d33.525008687848725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d44bd2c21a1%3A0xef88e5ae83bb7ce7!2sDynamic%20Impact%20Advertising!5e0!3m2!1sfr!2sma!4v1761304500291!5m2!1sfr!2sma"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              title="Dynamic Impact Advertising Map"
              alt="Dynamic Impact - Agence marketing digital Casablanca Maroc"
              //<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.7272900428936!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d44bd2c21a1%3A0xef88e5ae83bb7ce7!2sDynamic%20Impact%20Advertising!5e0!3m2!1sfr!2sma!4v1761037765744!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            />
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* <h2 className={styles.formTitle}>Formulaire de contact</h2> */}
            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  Votre nom *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  required
                  aria-describedby="name-error"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-phone" className={styles.label}>
                  Téléphone *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+212 6XX XXX XXX"
                  required
                  aria-describedby="phone-error"
                />
              </div>
            </div>
            <div className={styles.formmail}>
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  Adresse email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  aria-describedby="email-error"
                />
              </div>
            </div>
            <div className={styles.fieldGroup}>
              <label htmlFor="contact-message" className={styles.label}>
                Votre message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou vos besoins..."
                rows="4"
                required
                aria-describedby="message-error"
              />
            </div>
            <button type="submit" className={cn("button", styles.buttonn)}>
              Envoyer
            </button>
          </form>
        </div>

        {/* TOAST */}
        {showToast && (
          <div className={styles.toast}>Message envoyé avec succès </div>
        )}
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, description, link, linkText }) => (
  <div className={styles.card}>
    <span className={styles.cardHeader}>
      {icon}
      <p className={styles.cardTitle}>{title}</p>
    </span>
    <p className={styles.cardDesc}>{description}</p>
    <a href={link} className={styles.cardLink}>
      {linkText}
    </a>
  </div>
);

export default Contact;
