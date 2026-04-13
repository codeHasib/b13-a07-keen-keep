"use client";

import { useFriendsData } from "@/context/DataContext";
import FriendsCard from "./FriendsCard";

const FriendsSection = () => {
  const { friendsData } = useFriendsData();
  return (
    <div className="container mx-auto px-2 border-top pt-5 pb-25">
      <h2 className="text-xl font-abold">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {friendsData.map((item, ind) => (
          <FriendsCard item={item} key={ind}></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
