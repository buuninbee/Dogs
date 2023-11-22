import React from "react";
import Head from "../Helpers/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
const UserStatsGraps = React.lazy(() => import("./UserStatsGraps"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatistica" />
        <UserStatsGraps data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
