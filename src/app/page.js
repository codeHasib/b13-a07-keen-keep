import Banner from "@/components/Banner";
import FriendsSection from "@/components/FriendsSection";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <>
      <div className="bg-base-300">
        <Banner></Banner>
        <StatsCard></StatsCard>
        <FriendsSection></FriendsSection>
      </div>
    </>
  );
}
