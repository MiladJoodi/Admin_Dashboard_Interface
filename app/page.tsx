import DashboardCard from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// https://www.youtube.com/watch?v=hhudoSMM0yU
// https://github.com/bradtraversy/traversypress-ui
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard />
      </div>
    </>
  );
}
