import DashboardCard from "@/components/dashboard/DashboardCard";
import { Button } from "@/components/ui/button";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import Image from "next/image";
// https://www.youtube.com/watch?v=hhudoSMM0yU
// https://github.com/bradtraversy/traversypress-ui
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard 
        title="Posts" 
        count={100} 
        icon={<Newspaper 
        className="text-slate-500" 
        size={72} />} 
        />
       </div>
    </>
  );
}
