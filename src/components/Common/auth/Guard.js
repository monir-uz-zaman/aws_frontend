import AuthGuard from "./AuthGuard";

const Guard = ({ children, authGuard }) => {
  if (authGuard) {
    return <AuthGuard>{children}</AuthGuard>;
  } else {
    return <>{children}</>;
  }
};

export default Guard;
