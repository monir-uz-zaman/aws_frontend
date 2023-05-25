import CustomToast from "@/components/Common/CustomToast/CustomToast";
import ChangePasswordForm from "@/components/Form/Password/ChangePasswordForm";
import { useForm } from "@/hooks/form-hook";
import { changePassword } from "@/utils/http/dataHandler";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

import settings from "../../../utils/configs/settings.json";

const ChangePassword = () => {
  const session = useSession();
  const { organizationId, key } = settings.organization;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [state, InputHandler] = useForm(
    {
      OLD_PASSWORD: {
        value: "",
        isValid: false,
      },
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

  console.log(session, 99);
  const formSubmitHandler = async () => {
    // Do the signUp/login process
    setIsLoading(true);

    try {
      const response = await changePassword(
        organizationId,
        key,
        session?.data?.user?.user_id,

        state.inputs.PASSWORD.value,
        state.inputs.PASSWORD_CONFIRM.value,
        state.inputs.OLD_PASSWORD.value,
        session?.data?.user?.user_token
      );

      console.log(response);

      response?.data?.status === "ok"
        ? CustomToast("Password Succesfully changed")
        : CustomToast(
            response?.data?.message || "Something went wrong.Please try later",
            "error"
          );

      if (response?.data?.status === "ok") {
        setIsLoading(false);
        setTimeout(() => {
          router.push("/user/profile");
        }, 1000);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      CustomToast("Something went wrong.Please try later", "error");
    }
  };
  return (
    <ChangePasswordForm
      isLoading={isLoading}
      formSubmitHandler={formSubmitHandler}
      state={state}
      InputHandler={InputHandler}
      includeOldPassword={true}
    />
  );
};

export default ChangePassword;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // redirecting when there is no logged in user

  if (!session) {
    return {
      redirect: {
        destination: `/`,

        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
