import React, { useState } from "react";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import LoginForm from "@/components/Form/LoginForm";
import { useForm } from "@/hooks/form-hook";
import { useRouter } from "next/router";
import CustomToast from "@/components/Common/CustomToast/CustomToast";

const Login = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [state, InputHandler] = useForm(
    {
      EMAIL: {
        value: "",
        isValid: false,
      },
      PASSWORD: {
        value: "",
        isValid: false,
      },
    },
    false
    // the last false defines if the whole form is valid or not ( since we have set all isvalid to false so our total form validity will also be false)
  );

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const returnUrl = router.query.returnUrl || "/";

    try {
      let res = await signIn(
        "credentials",

        {
          username: state.inputs.EMAIL.value,
          password: state.inputs.PASSWORD.value,
          // firstName: "bishal shah",  ->this will work as well for signup
          redirect: false,
        }
      );
      if (res?.status === 200) {
        // CustomToast("Welcome to Foodin. Get fresh be healthy", "success");
        router.push(returnUrl);
      } else {
        CustomToast(
          res?.error || "Something went wrong.Please try later",
          "error"
        );
      }
      setLoading(false);

      console.log(res, "9888");
    } catch (error) {
      CustomToast("Something went wrong.Please try later", "error");
      setLoading(false);
    }
  };
  return (
    <LoginForm
      state={state}
      InputHandler={InputHandler}
      formSubmitHandler={formSubmitHandler}
      loading={loading}
    />
  );
};

export default Login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // redirecting when there is session

  if (session) {
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
