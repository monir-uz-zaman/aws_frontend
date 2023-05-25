import Link from "next/link";
import React from "react";
import Button from "../Common/Button/Button";
import { Input } from "../Common/Input/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../Common/Validation/Validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classes from "./Form.module.css";
import { getImageByKey } from "@/utils/getImageBykey";
import Image from "next/image";

import { useSession } from "next-auth/react";

const LoginForm = ({ state, InputHandler, formSubmitHandler, loading }) => {
  const session = useSession();

  return (
    <div className={`${classes.container} `}>
      <Image
        src={getImageByKey("login_background")}
        height={500}
        width={300}
        className={classes.containerbgImage}
        alt="login_background"
      />
      <form
        className={`${classes.formContainer} `}
        onSubmit={formSubmitHandler}
      >
        <h2 className={`${classes.formHeader} font-700  `}>LOGIN</h2>

        <Input
          id="EMAIL"
          label={"Employee ID"}
          placeholder={"Enter your id here"}
          type="text"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errorText={"Enter id"}
          onInput={InputHandler}
          iconName={<FontAwesomeIcon icon={faEnvelope} />}
        />

        <Input
          id="PASSWORD"
          label={"Password"}
          placeholder={"Enter password"}
          errorText={"Password is required"}
          type="Password"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={InputHandler}
          iconName={<FontAwesomeIcon icon={faLock} />}
        />

        <Button
          className={`${classes.loginFormButton} width-100`}
          disabled={!state.isValid || loading || session?.data?.user?.user_id}
          formButton
        >
          {loading || session?.data?.user?.user_id ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
