import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/button.css";
import "@/styles/custom-carousel.css";
import "@/styles/search-modal.css";

import NextNProgress from "nextjs-progressbar";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { useQueryClient } from "@/hooks/queryClient";
import StateHolder from "@/store/contexts/StateHolder";
import Navbar from "@/components/navigation/Navbar";
import { useRouter } from "next/router";

// REACT MULTI CAROUSEL
// import "react-multi-carousel/lib/styles.css";

// REACT LOADING SKELETON
import "react-loading-skeleton/dist/skeleton.css";

// font awesome
import "../components/Common/FontAwesomeIcon.js";

// REACT TOAST
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { SessionProvider } from "next-auth/react";

import Guard from "@/components/Common/auth/Guard.js";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const queryClient = useQueryClient();
  //   The ?? operator is the nullish coalescing operator in JavaScript. It returns the left-hand operand if it is not null or undefined, otherwise it returns the right-hand operand.

  // In this case, Component.authGuard is being checked for a value that is not null or undefined. If it has a value, that value will be assigned to authGuard. Otherwise, true will be assigned to authGuard.

  // This is a way of providing a default value for the authGuard property in case it is not defined in the Component object. If Component.authGuard is null or undefined, the authGuard property will default to true.

  const authGuard = Component.authGuard ?? false;

  const router = useRouter();

  const currentActiveLink = router.pathname;

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <StateHolder>
          {/* // next N progress is for loading icon when changin groute */}
          <NextNProgress />
          {/* // if main page NAVBAR will be differnt color */}

          <Navbar secondaryPage={currentActiveLink === "/" ? false : true} />
          <Guard authGuard={authGuard}>
            <Component {...pageProps} />
          </Guard>
          <ToastContainer />
        </StateHolder>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </SessionProvider>
  );
}
