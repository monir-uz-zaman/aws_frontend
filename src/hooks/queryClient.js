import { useMemo } from "react";
import { QueryClient } from "react-query";

export const useQueryClient = () => {
  const queryClient = useMemo(() => new QueryClient(), []);
  return queryClient;
};
