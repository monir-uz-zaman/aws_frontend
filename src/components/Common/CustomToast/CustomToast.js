import React from "react";
import { toast } from "react-toastify";

const CustomToast = (
  message = "Success",
  status = "success",
  theme = "dark",
  autoClose = 5000,
  closeOnClick = true,
  draggable = true
) => {
  return toast[status](message, {
    autoClose,
    closeOnClick,
    draggable,
    theme,
  });
};

export default CustomToast;
