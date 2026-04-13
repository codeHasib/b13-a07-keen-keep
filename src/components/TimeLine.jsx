"use client";

import { useFriendsData } from "@/context/DataContext";
import TimeLineCard from "./TimeLineCard";
import Link from "next/link";
import { useState } from "react";

const TimeLine = () => {
  const { timeLine } = useFriendsData();
  const [sort, setSort] = useState("all");

  let filtered = [];

  if (sort === "all") {
    filtered = timeLine;
  } else if (sort === "Text") {
    filtered = timeLine.filter((item) => item.type === "Text");
  } else if (sort === "Call") {
    filtered = timeLine.filter((item) => item.type === "Call");
  } else if (sort === "Video") {
    filtered = timeLine.filter((item) => item.type === "Video");
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-3">Timeline</h2>
      <div className="my-8">
        <div className="text-center">
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              {sort === "Text"
                ? "Text"
                : sort === "Video"
                  ? "Video"
                  : sort === "Call"
                    ? "Call"
                    : `Sort`}{" "}
              ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setSort("all")}>
                <a>All</a>
              </li>
              <li onClick={() => setSort("Text")}>
                <a>Text</a>
              </li>
              <li onClick={() => setSort("Call")}>
                <a>Call</a>
              </li>
              <li onClick={() => setSort("Video")}>
                <a>Video</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {filtered.length > 0 ? (
          filtered.map((item, ind) => (
            <TimeLineCard item={item} key={ind}></TimeLineCard>
          ))
        ) : (
          <div className="px-4 py-10 text-center font-bold text-2xl bg-white rounded-2xl space-y-2">
            <h1>Nothing to show</h1>
            <Link href={"/"}>
              <button className="btn">Connect With Friends</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeLine;
