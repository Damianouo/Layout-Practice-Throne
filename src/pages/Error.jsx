import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  return (
    <div className="flex h-screen flex-col items-center pt-40 text-2xl">
      <h1 className="text-5xl font-bold">Oops !</h1>
      <h2 className="mt-8">{error.status}</h2>
      <p>{error.data?.message}</p>
    </div>
  );
}

export default Error;
