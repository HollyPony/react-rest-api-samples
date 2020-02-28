import { useFetch } from "react-rest-api";

export const ComponentWithUseApi = ({ url }) => {
  const { loading, result, error } = useFetch(url);

  if (error) {
    return JSON.stringify(error, null, 2);
  }
  return loading
    ? "loading ..."
    : result.name || JSON.stringify(result, null, 2);
};

export default ComponentWithUseApi;
