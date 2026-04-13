"use client";

import Chart from "@/components/Chart";
import { useFriendsData } from "@/context/DataContext";

const StatsPage = () => {
  const { timeLine } = useFriendsData();
  return (
    <div className="min-h-screen container mx-auto px-4">
      <h2 className="font-bold text-3xl my-8">Friendship Analytics</h2>
      {timeLine.length > 0 ? (
        <div className="container mx-auto bg-white p-10 rounded-2xl">
          <h3 className="text-green-800 font-bold">By Interaction Type</h3>
          <Chart data={timeLine}></Chart>
        </div>
      ) : (
        <div className="py-10 px-10 text-center bg-white text-2xl container mx-auto my-10 rounded-4xl font-bold">
          No stats to show!!
        </div>
      )}
    </div>
  );
};

export default StatsPage;
