"use client";

import FriendsDetails from "@/components/FriendsDetails";
import { useFriendsData } from "@/context/DataContext";
import { useParams } from "next/navigation";

const FriendsDetailsPage = () => {
  const { id } = useParams();
  const { friendsData } = useFriendsData();
  const current = friendsData.find((item) => item.id == id);
  return (
    <div className="min-h-screen">
      <FriendsDetails item={current}></FriendsDetails>
    </div>
  );
};

export default FriendsDetailsPage;
