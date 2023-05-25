import { validatePasswordResetToken } from "@/utils/http/dataHandler";
import React, { useEffect, useState } from "react";
import PasswordInvalidToken from "./PasswordInvalidToken";
import PasswordValidToken from "./PasswordValidToken";

const PasswordToken = ({ tokenFromEmail }) => {
  // we first need to check whether the token is valid or not

  const [tokenFromEmailvalid, setTokenFromEmailvalid] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  useEffect(() => {
    const runFunction = async () => {
      setIsTokenChecked(true);

      const res = await validatePasswordResetToken(tokenFromEmail);

      if (res?.data?.status === "ok") {
        // means token is valid and they can change the pasword
        setTokenFromEmailvalid(true);
      } else {
        // cant change need to ask for reset password again
        setTokenFromEmailvalid(false);
      }

      console.log("res", res);
    };

    tokenFromEmail && !isTokenChecked && runFunction();
  }, [tokenFromEmail, isTokenChecked]);
  return !isTokenChecked ? (
    <>loading</>
  ) : tokenFromEmailvalid ? (
    <PasswordValidToken tokenFromEmail={tokenFromEmail} />
  ) : (
    <PasswordInvalidToken />
  );
};

export default PasswordToken;
