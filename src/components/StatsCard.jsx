"use client";

import { useFriendsData } from "@/context/DataContext";

const StatsCard = () => {
  const { friendsData, timeLine } = useFriendsData();
  const onTrackLength = friendsData.filter(
    (friend) => friend.status === "On-Track",
  ).length;
  const overDueLength = friendsData.filter(
    (friend) => friend.status === "Overdue",
  ).length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto px-5 gap-4 pb-10 mb-10">
      <div className="bg-white rounded-2xl py-8 px-15 text-center">
        <h2 className="text-3xl font-bold text-green-900">
          {friendsData.length}
        </h2>
        <p>Total Friends</p>
      </div>
      <div className="bg-white rounded-2xl py-8 px-15 text-center">
        <h2 className="text-3xl font-bold text-green-900">{onTrackLength}</h2>
        <p>On-Track</p>
      </div>
      <div className="bg-white rounded-2xl py-8 px-15 text-center">
        <h2 className="text-3xl font-bold text-green-900">{overDueLength}</h2>
        <p>Need Attention</p>
      </div>
      <div className="bg-white rounded-2xl py-8 px-15 text-center">
        <h2 className="text-3xl font-bold text-green-900">{timeLine.length}</h2>
        <p>Interactions This Month</p>
      </div>
    </div>
  );
};

export default StatsCard;
