import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err.status, err.message);
  return <div>Error</div>;
};

export default Error;
