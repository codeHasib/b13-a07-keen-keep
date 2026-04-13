"use client";

import { useFriendsData } from "@/context/DataContext";

export default function Home() {
  const { friendsData, setTimeLine, timeLine } = useFriendsData();
  console.log(timeLine);
  return (
    <>
      {friendsData.map((item, ind) => {
        return (
          <button
            className="btn bg-red-300"
            key={ind}
            onClick={() => setTimeLine("what")}
          >
            {" "}
            {item.name}{" "}
          </button>
        );
      })}
    </>
  );
}
