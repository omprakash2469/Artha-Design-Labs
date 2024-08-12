"use client";
import {
  faClose,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SectionHeader from "../Header/SectionHeader";
import { useState } from "react";
import { ENQUIRY_URI } from "@/data/api";
import axios from "axios";
import { setAlert } from "@/utils/setAlert";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const { message, close, setAlertMessage } = setAlert();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (Object.values(formData).includes("")) {
      setAlertMessage("error", "Please fill the form!");
      return;
    }

    axios
      .post(ENQUIRY_URI, formData)
      .then((res) => {
        if (res.data.status == "success") {
          setAlertMessage("success", "Thanks! We will contact you soon");
        } else {
          setAlertMessage("error", "Something went wrong!");
        }
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      })
      .catch((error) => {
        setAlertMessage("error", "Something went wrong!");
      });
  };
  return (
    <section className="container py-10 xl:py-20">
      <div className="grid xl:grid-cols-2 border-2 border-slate-200 rounded-3xl p-2 xl:p-4 gap-5 xl:gap-10 shadow-lg shadow-slate-200">
        <div
          className={`bg-[url(/images/home/contact-us.png)] bg-cover p-4 xl:p-10 2xl:p-20 rounded-3xl grid items-center`}
        >
          <h2 className="primary-heading">Connect with Our Team Today</h2>
          <ul className="space-y-4 xl:space-y-10 *:space-x-2 xl:*:space-x-4 *:flex text-sm xl:text-lg font-poppins">
            <li>
              <FontAwesomeIcon icon={faPhone} className="mt-1" />
              <Link href={"tel:9814227724"}>+91 9814227724</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
              <Link href={"mailto:contact@arthadesignlabs.com"}>
                contact@arthadesignlabs.com
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocation} className="mt-1" />
              <Link href={"#"}>
                5th Floor, KFC Building, Gumtala Sub Urban, D - Block, Ranjit
                Avenue, Amritsar, Punjab 143001
              </Link>
            </li>
          </ul>
        </div>

        <div className="px-4 xl:px-10">
          <SectionHeader
            subtitle={"contact us"}
            heading={"Get in Touch With Us"}
          />
          <p className="text-slate-500 text-center text-sm -mt-4 mb-4 xl:mb-6">
            Have questions or inquiries? Reach out to us today for expert
            architectural services tailored to your needs. We&apos;re here to
            bring your vision to life
          </p>

          <form
            onSubmit={handleFormSubmit}
            className="py-4 xl:px-6 space-y-4 xl:space-y-6"
          >
            <div className="grid xl:grid-cols-2 gap-4 xl:gap-6">
              <div>
                <label htmlFor={"name"} className="form-label">
                  Your Name
                </label>
                <input
                  title="Your Name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  className="form-input"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor={"number"} className="form-label">
                  Your Number
                </label>
                <input
                  title="Your Number"
                  name="number"
                  type="tel"
                  placeholder="Enter Your Number"
                  value={formData.number}
                  className="form-input"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor={"email"} className="form-label">
                Your Email
              </label>
              <input
                title="Your Email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="form-input"
                placeholder="Write Your Message Here"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
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

            <div className="text-center">
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
