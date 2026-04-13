import Image from "next/image";
import CallImg from "../../public/images/assets/call.png";
import TextImg from "../../public/images/assets/text.png";
import VidImg from "../../public/images/assets/video.png";

const TimeLineCard = ({ item }) => {
  const { data, time, type } = item;
  const { name } = data;
  return (
    <div className="flex justify-start items-center py-3 px-4 rounded-xl bg-white mb-4 gap-4">
      <div>
        <Image
          src={type === "Text" ? TextImg : type === "Call" ? CallImg : VidImg}
          alt="Image of connect"
          width={35}
          height={35}
        ></Image>
      </div>
      <div>
        <h2 className="text-[20px] font-light">
          <span className="text-green-800 font-bold"> {type} </span> with {name}
        </h2>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default TimeLineCard;
