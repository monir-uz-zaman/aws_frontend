import React from "react";
import { toast } from "react-toastify";

const CustomToast = (
  message = "Success",
  status = "success",
  position = "top-center",
  theme = "dark",
  autoClose = 5000,
  closeOnClick = true,
  draggable = true
) => {
  return toast[status](message, {
    position,
    autoClose,
    closeOnClick,
    draggable,
    theme,
  });
};

export default CustomToast;
