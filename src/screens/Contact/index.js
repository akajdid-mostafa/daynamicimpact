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
            description="Imm Corner Office, lotissement Florida lot N°5, 5ème Étage,Bureau N°38, Casablanca, Morocco"
            link="https://maps.app.goo.gl/VyAELKEnQyZBrGrf7"
            linkText="Voir sur Google Maps"
          />
          <ContactCard
            icon={<MdPhoneInTalk className={styles.icon} />}
            title="Téléphone"
            description="Appelez-nous directement"
            link="tel:+212660434143"
            linkText="+216 604-34143"
          />
          <ContactCard
            icon={<MdMarkEmailRead className={styles.icon} />}
            title="Email"
            description="contact@dynamicimpact.ma"
            link="mailto:contact@dynamicimpact.ma"
            linkText="Écrire"
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.7272900428936!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d44bd2c21a1%3A0xef88e5ae83bb7ce7!2sDynamic%20Impact%20Advertising!5e0!3m2!1sfr!2sma!4v1761037765744!5m2!1sfr!2sma"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              title="Dynamic Impact Advertising Map"
              alt="Dynamic Impact location in Casablanca, Morocco"
              //<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.7272900428936!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d44bd2c21a1%3A0xef88e5ae83bb7ce7!2sDynamic%20Impact%20Advertising!5e0!3m2!1sfr!2sma!4v1761037765744!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            />
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* <h2 className={styles.formTitle}>Formulaire de contact</h2> */}
            <div className={styles.formRow}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Téléphone"
                required
              />
            </div>
            <div className={styles.formmail}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              {/* <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="0" disabled>
                  Choisissez un service
                </option>
                <option value="Nettoyage All">Tous services</option>
                <option value="Façades">Nettoyage des façades</option>
                <option value="Panneaux solaires">
                  Nettoyage panneaux solaires
                </option>
                <option value="Électricité">Réparations électriques</option>
                <option value="Plomberie">Réparations d’eau</option>
                <option value="Insectes">Destruction des nuisibles</option>
              </select> */}
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows="4"
              required
            />
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
