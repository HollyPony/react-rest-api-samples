import React from "react";

import { useGetJson } from "react-rest-api";

export const ComponentWithUseGetJson = ({ url }) => {
  const { loading, result, error } = useGetJson(url);

  if (error) {
    return error.toString();
  }
  return loading ? "loading ..." : result.name || JSON.stringify(result);
};

export default ComponentWithUseGetJson;
