import { Navigate } from "react-router-dom";
import { Card } from "@/_components/Card/Card";
import { useGetMovies } from "./_queries/useGetMovies";
import { useAuth } from "@clerk/clerk-react";

export const Movies = () => {
  const { data: movies, isLoading } = useGetMovies();
  const { isSignedIn, signOut } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-4 h-screen">
      <button
        onClick={() => signOut()}
        className="btn btn-primary flex justify-center -0 mx-auto md:absolute md:top-2 md:right-3"
      >
        Signout
      </button>
      <h1 className="text-bold text-center text-xl md:text-4xl mb-10 mt-10">
        Top Box Office US
      </h1>
      <div className="flex justify-center flex-wrap gap-5">
        {isLoading ? (
          <span className="loading loading-spinner text-primary"></span>
        ) : !isLoading && !movies ? (
          <h1>Ooops, somethings wrong with the movies </h1>
        ) : (
          movies?.map((movie, index) => <Card key={index} {...movie} />)
        )}
      </div>
    </div>
  );
};
