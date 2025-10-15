import React, { useState } from "react";
import cn from "classnames";
import styles from "./contact-form.module.css";
import { Dropdown } from "../../../components/ui";
import Socials from "../../../components/socials";
import mock from "../../../constants/mock";

const ContactForm = ({ options = mock.options }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        setTimeout(() => setShowToast(false), 3000);
      } else {
        console.error("Failed to send email:", res.status);
        alert("Error sending message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.wrapper}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={styles.textfield}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={styles.textfield}
                required
              />
            </div>

            <div className={styles.wrapper}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className={styles.textfield}
                required
              />
              <Dropdown
                placeholder="Select an option"
                className={styles.dropdown}
                options={options}
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className={styles.textarea}
              required
            />

            <button 
              type="submit" 
              className={cn("button", styles.button)}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>

          {showToast && (
            <div className={styles.toast}>Message sent successfully! ✅</div>
          )}

          <div className={cn("paragraph-medium", styles.protected)}>
            This site is protected by reCAPTCHA and the Google 
            <button type="button" className={styles.link}>Privacy Policy</button>
             and 
            <button type="button" className={styles.link}>Terms of Service</button>
             apply.
          </div>
        </div>
        <div className={styles.side_content}>
          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Address</div>
            <a href="mailto:shop@yourstore.com" className={cn("label-medium", styles.link)}>
              shop@yourstore.com
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Email</div>
            <a href="mailto:contact@yourstore.com" className={cn("label-medium", styles.link)}>
              contact@yourstore.com
            </a>
            <a href="mailto:sales@yourstore.com" className={cn("label-medium", styles.link)}>
              sales@yourstore.com
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Phone</div>
            <a href="tel:+3331305210" className={cn("label-medium", styles.link)}>
              +33 (0) 31-305-210
            </a>
            <button type="button" className={cn("label-medium", styles.link)}>
              mon - fri: 09:00 - 17:00
            </button>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Follow us</div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;