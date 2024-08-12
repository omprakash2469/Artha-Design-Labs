"use client";
import { useState } from "react";

export function setAlert() {
  const [message, setMessage] = useState({
    status: "",
    message: "",
  });

  const setAlertMessage = (status, message) => {
    setMessage({
      status: status,
      message: message,
    });
  };

  const close = () => {
    setMessage({
      status: "",
      message: "",
    });
  };
  return {
    message: message,
    setAlertMessage: setAlertMessage,
    close: close,
  };
}
