import React from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/Common/Button/Button";

import classes from "./PasswordInavlidToken.module.css";
import { getImageByKey } from "@/utils/getImageBykey";
import Image from "next/image";

const PasswordInvalidToken = () => {
  return (
    <div className={`${classes.container}`}>
      <div
        className="font-700"
        style={{ textAlign: "center", color: "#ab0303" }}
      >
        Invalid Link
      </div>

      <FontAwesomeIcon
        icon={faTimesCircle}
        className="font-800"
        style={{ display: "flex", alignSelf: "center", color: "#ab0303" }}
      />
      <div> The Token is either expired or invalid</div>

      <div> Press the below button to send a new email</div>

      <Button href={`/auth/forget-password`}>
        Request Reset Password Link
      </Button>
    </div>
  );
};

export default PasswordInvalidToken;
