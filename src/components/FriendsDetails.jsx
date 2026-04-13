import FriendsCard from "./FriendsCard";
import { HiBellSnooze } from "react-icons/hi2";
import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useFriendsData } from "@/context/DataContext";
import { toast } from "react-toastify";

const FriendsDetails = ({ item }) => {
  const { days_since_contact, goal, next_due_date } = item;
  const { timeLine, setTimeLine } = useFriendsData();

  function addTimeLine(type) {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setTimeLine((prev) => [...prev, { data: item, time: today, type: type }]);
    toast.success(`${type} with ${item.name}`);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto px-4 gap-5">
      <div className="">
        <FriendsCard wh={true} item={item}></FriendsCard>
        <button className="btn w-full font-normal my-5">
          {" "}
          <HiBellSnooze /> Snooze 2 Weeks{" "}
        </button>
        <button className="btn w-full font-normal mb-5">
          {" "}
          <FaBoxArchive /> Archive{" "}
        </button>
        <button className="btn w-full font-normal mb-5 text-red-500">
          {" "}
          <RiDeleteBin2Fill /> Delete{" "}
        </button>
      </div>
      <div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 pb-10 mt-10">
            <div className="bg-white rounded-2xl flex flex-col justify-center items-center text-center px-5 py-10">
              <h2 className="text-3xl font-bold text-green-900">
                {days_since_contact}
              </h2>
              <p>Days Since Contact</p>
            </div>
            <div className="bg-white rounded-2xl flex-col justify-center items-center text-center px-5 py-10">
              <h2 className="text-3xl font-bold text-green-900">{goal}</h2>
              <p>Goad (Days)</p>
            </div>
            <div className="bg-white rounded-2xl flex-col justify-center items-center py-10 text-center px-5">
              <h2 className="text-3xl font-bold text-green-900">
                {next_due_date}
              </h2>
              <p>Next Due</p>
            </div>
          </div>
        </div>
        <div className="my-4 py-8 px-5 rounded-4xl bg-white">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-green-800">Relationship Goal</h3>
            <button className="btn">Edit</button>
          </div>
          <p>
            Connect every: <strong>{goal} days</strong>
          </p>
        </div>
        <div className="py-6 px-4 bg-white rounded-3xl">
          <h3 className="text-xl font-bold text-green-800">Quick Check-in</h3>
          <div className="flex justify-start items-center flex-wrap gap-4 mt-5">
            <div
              onClick={() => addTimeLine("Call")}
              className="p-4 flex flex-col justify-center items-center rounded-3xl border border-gray-300 bg-base-300 flex-1 gap-3"
            >
              <MdAddCall />
              <p>Call</p>
            </div>
            <div
              onClick={() => addTimeLine("Video")}
              className="p-4 flex flex-col justify-center items-center rounded-3xl gap-3 border border-gray-300 bg-base-300 flex-1"
            >
              <FaVideo />
              <p>Video</p>
            </div>
            <div
              onClick={() => addTimeLine("Text")}
              className="p-4 flex flex-col justify-center items-center rounded-3xl border border-gray-300 bg-base-300 flex-1 gap-3"
            >
              <MdMessage />
              <p>Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
