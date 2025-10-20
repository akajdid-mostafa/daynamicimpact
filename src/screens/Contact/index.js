import React, { useState } from "react";
import styles from "./contact.module.sass";
import { MdMarkEmailRead, MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import Breadcrumbs from "../../components/Breadcrumbs";
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
        message: formData.message
      };

      const res = await fetch("https://email-lemon-pi.vercel.app/api/dynamic", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
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
         {/* INTRO */}
         <div className={styles.intro}>
           <p className={styles.introDesc}>
             Besoin d'un accompagnement digital personnalisé ? Notre équipe d'experts 
             en transformation digitale, marketing digital et développement web vous 
             accompagne dans votre projet. Contactez-nous pour un devis gratuit et 
             une consultation personnalisée.
           </p>
         </div>

        {/* CONTACT CARDS */}
        <div className={styles.cards}>
          <ContactCard
            icon={<MdLocationOn className={styles.icon} />}
            title="Adresse"
            description="Imm Corner Office, lotissement Florida lot N°5, 5ème Étage N°38, Casablanca, Morocco"
            link="https://maps.app.goo.gl/62SaNxku43sSR4RZ8"
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
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=G9C7+2XC,%20Bd%20Zoulikha%20Nasri,%20Casablanca+(Dynamic%20Impact)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              title="Ocean Connecting Map"
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
