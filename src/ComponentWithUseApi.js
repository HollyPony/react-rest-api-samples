import React from "react";

import { useApi } from "react-rest-api";

export const ComponentWithUseApi = ({ url, method = "getJson" }) => {
  const { loading, result, error } = useApi(method, url);

  if (error) {
    return error.toString();
  }
  return loading
    ? "loading ..."
    : result.name || JSON.stringify(result, null, 2);
};

export default ComponentWithUseApi;
