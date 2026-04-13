import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ item }) => {
  const { id, picture, name, days_since_contact, tags, status } = item;
  return (
    <Link href={`/${id}`}>
      <div className="flex flex-col justify-center items-center border border-gray-300 shadow-lg rounded-4xl py-5 px-5 mt-10 transition-all duration-300 ease-in-out hover:scale-105">
        <Image src={picture} alt={name} height={100} width={100}></Image>
        <h3 className="text-2xl my-2 font-bold">{name}</h3>
        <p>{days_since_contact}d ago</p>
        <div className="font-bold">
          {tags?.map((item, ind) => (
            <div className="badge bg-accent uppercase" key={ind}>
              {" "}
              {item}{" "}
            </div>
          ))}
        </div>
        <div
          className={`badge uppercase text-white font-bold mt-5 ${status === "Overdue" ? "badge-error" : status === "On-Track" ? "badge-accent" : "badge-warning"} `}
        >
          {" "}
          {status}{" "}
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
