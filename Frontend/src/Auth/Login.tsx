import { SignIn, useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="p-6 h-screen w-screen flex justify-center items-center">
      {!isSignedIn ? <SignIn /> : <Navigate to="/movies" />}
    </div>
  );
};
