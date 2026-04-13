import Image from "next/image";
import data from "../data/friends_data.json";

export default function Home() {
  const frnds = data;
  return (
    <>
      <div>
        {frnds.map((item, ind) => (
          <Image
            key={ind}
            src={item.picture}
            alt={item.name}
            height={50}
            width={50}
          ></Image>
        ))}
      </div>
    </>
  );
}
