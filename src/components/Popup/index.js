import React, { useState, useEffect } from "react";
import styles from "./popup.module.sass";
import cn from "classnames";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Example reserved data
  const reservedDates = [
    "2025-11-03",
    "2025-11-06",
    "2025-11-07",
    "2025-11-10",
    "2025-11-11",
    "2025-11-14",
  ];
  const reservedTimes = ["12:00", "15:00"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // send to API here
  };

  // Format date for display and comparison
  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Only allow time selection between 9:00 and 18:00
  const availableTimes = Array.from({ length: 10 }, (_, i) => {
    const hour = 9 + i;
    const formattedHour = hour.toString().padStart(2, "0");
    return `${formattedHour}:00`;
  });

  const isDateReserved = (date) => {
    return reservedDates.includes(formatDate(date));
  };

  // Improved date filter function
  const filterDate = (date) => {
    // Don't allow past dates
    if (date < new Date().setHours(0, 0, 0, 0)) {
      return false;
    }
    
    // Check if date is reserved
    return !isDateReserved(date);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <span
          className={styles.closeBtn}
          onClick={closePopup}
          role="button"
          tabIndex={0}
        >
          ×
        </span>

        <div className={styles.popupIcon}>
          <img src="/images/logo-dynamicimpact.webp" alt="Popup Logo" />
        </div>

        <div className={styles.space32} />

        <div className={styles.heading2}>
          <h2>Reserve Your Appointment</h2>
          <div className={styles.space8} />
          <p>
            Choose your date, time, and enter your phone number to book an
            appointment with us.
          </p>
        </div>

        <div className={styles.space32} />

        {submitted ? (
          <div className={styles.successMessage}>
            <h3>Thank you!</h3>
            <p>Your appointment request has been submitted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* DATE */}
            <div className={styles.formGroup}>
              <label htmlFor="date">Date</label>
              <div className={styles.datePickerWrapper}>
                <ReactDatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  excludeDates={reservedDates.map((d) => {
                    const date = new Date(d);
                    date.setHours(0, 0, 0, 0);
                    return date;
                  })}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                  required
                  className={styles.input}
                  isClearable
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  filterDate={filterDate}
                  // Prevent showing days from other months
                  showDisabledMonthNavigation
                />
              </div>
              {selectedDate && isDateReserved(selectedDate) && (
                <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
                  ⚠️ This date is not available. Please choose another date.
                </p>
              )}
            </div>

            {/* TIME */}
            <div className={styles.formGroup}>
              <label htmlFor="time">Time</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className={styles.input}
                disabled={!selectedDate || isDateReserved(selectedDate)}
              >
                <option value="">Select time</option>
                {availableTimes.map((t) => (
                  <option
                    key={t}
                    value={t}
                    disabled={reservedTimes.includes(t)}
                    style={{
                      color: reservedTimes.includes(t) ? "#ccc" : "inherit",
                    }}
                  >
                    {t} {reservedTimes.includes(t) ? "(Unavailable)" : ""}
                  </option>
                ))}
              </select>
              {reservedTimes.includes(time) && (
                <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
                  This time slot is not available.
                </p>
              )}
            </div>

            {/* PHONE */}
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={styles.input}
                pattern="[0-9]{10,15}"
                placeholder="Enter your phone number"
              />
            </div>

            <div className={styles.space32} />

            <button
              type="submit"
              className={cn("button", styles.button)}
              disabled={
                !selectedDate ||
                isDateReserved(selectedDate) ||
                reservedTimes.includes(time) ||
                !time ||
                !phone
              }
            >
              {isDateReserved(selectedDate) || reservedTimes.includes(time)
                ? "Please select available date and time"
                : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Popup;
