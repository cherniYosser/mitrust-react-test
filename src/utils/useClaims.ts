import { useQuery } from "react-query";
import { getFetchQuery } from "./useFetch";

const useClaims = () =>
  useQuery(["getClaims"], () => getFetchQuery("/api/v2/public/claims"));

export default useClaims;
