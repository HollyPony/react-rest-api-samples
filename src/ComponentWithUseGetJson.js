import React from "react";

import { useGet } from "react-rest-api";

export const ComponentWithUseGetJson = ({ url }) => {
  const { loading, result, error } = useGet(url);

  if (error) {
    return error.toString();
  }
  return loading ? "loading ..." : result.name || JSON.stringify(result);
};

export default ComponentWithUseGetJson;
