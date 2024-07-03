"use client";

import FetchFact from "@/fetch/FetchFact";
import { useQuery } from "@tanstack/react-query";

const Fetchpage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["facts"],
    refetchOnMount: false,
    queryFn: FetchFact,
    refetchInterval: 100,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>{data.fact}</div>
    </div>
  );
};

export default Fetchpage;
