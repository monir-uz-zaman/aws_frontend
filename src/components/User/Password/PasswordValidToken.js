import React, { useState } from "react";
import { resetPasswordChange } from "@/utils/http/dataHandler";
import { useRouter } from "next/router";
import ChangePasswordForm from "@/components/Form/Password/ChangePasswordForm";
import { useForm } from "@/hooks/form-hook";
import CustomToast from "@/components/Common/CustomToast/CustomToast";

const PasswordValidToken = ({ tokenFromEmail }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [state, InputHandler] = useForm(
    {
      PASSWORD: {
        value: "",
        isValid: false,
      },
      PASSWORD_CONFIRM: {
        value: "",
        isValid: false,
      },
    },
    false
    // the last false defines if the whole form is valid or not ( since we have set all isvalid to false so our total form validity will also be false)
  );

  const formSubmitHandler = async () => {
    setIsLoading(true);
    try {
      const response = await resetPasswordChange(
        state.inputs.PASSWORD.value,
        state.inputs.PASSWORD_CONFIRM.value,
        tokenFromEmail
      );
      console.log("res", response);
      response?.data?.status === "ok"
        ? CustomToast("Password Succesfully changed")
        : CustomToast(
            response?.data?.message || "Something went wrong.please try later",
            "error"
          );

      if (response?.data?.status === "ok") {
        // we send them to main page
        setIsLoading(false);
        setTimeout(() => {
          // they cant come back
          router.replace("/");
        }, 1000);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      CustomToast("Something went wrong.please try later", "error");
    }
  };
  return (
    <ChangePasswordForm
      isLoading={isLoading}
      formSubmitHandler={formSubmitHandler}
      state={state}
      InputHandler={InputHandler}
    />
  );
};

export default PasswordValidToken;
