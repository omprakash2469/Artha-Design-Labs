"use client";
import { CONTACTS_URI } from "@/data/api";
import { setAlert } from "@/utils/setAlert";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { message, close, setAlertMessage } = setAlert();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (Object.values(userData).includes("")) {
      setAlertMessage("error", "Please fill the form!");
      return;
    }

    axios
      .post(CONTACTS_URI, userData)
      .then((res) => {
        if (res.data.status == "success") {
          setAlertMessage("success", "Thanks! We will contact you soon");
        } else {
          setAlertMessage("error", "Something went wrong!");
        }
        setUserData({
          first_name: "",
          last_name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setAlertMessage("error", "Something went wrong!");
      });
  };
  return (
    <div className="border-[6px] border-theme-six p-4 xl:p-10">
      <h2 className="primary-heading mb-12">Let&apos;s Talk!</h2>
      <form
        onSubmit={handleFormSubmit}
        method="post"
        className="space-y-4 xl:space-y-8"
      >
        <div>
          <label htmlFor="first_name" className="form-label">
            Name *
          </label>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="form-input border-theme-six"
              placeholder="First Name"
              value={userData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="form-input border-theme-six"
              placeholder="Last Name"
              value={userData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-input border-theme-six"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="form-label">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={userData.subject}
            onChange={handleChange}
            className="form-input border-theme-six"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">
            Comment or Message
          </label>
          <textarea
            name="message"
            id="message"
            value={userData.message}
            onChange={handleChange}
            className="form-input border-theme-six"
          ></textarea>
        </div>
        <div>
          {message.message && (
            <p
              className={`px-4 py-1 rounded-lg flex items-center justify-between ${
                message.status == "success"
                  ? "bg-green-100 text-green-400"
                  : "text-red-500 bg-red-100"
              }`}
            >
              {message.message}

              <button onClick={close}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </p>
          )}
        </div>
        <div>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
