import React, { useEffect } from "react";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const AuthGuard = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  console.log(session, 666);

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      console.log(session);

      // when user is not loggedIn

      if (!session?.data) {
        if (router.asPath !== "/" && router.asPath !== "/auth/login") {
          router.replace({
            pathname: `/auth/login`,
            query: { returnUrl: router.asPath },
          });
        } else {
          router.replace(`/auth/login`);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route, session]
  );
  return <>{children}</>;
};

export default AuthGuard;
