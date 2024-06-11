import { Button } from "@/components/ui/button";
import Image from "next/image";
// https://www.youtube.com/watch?v=hhudoSMM0yU
// https://github.com/bradtraversy/traversypress-ui
export default function Home() {
  return (
    <>
      <h1 className="text-2xl">Dashboard</h1>
      <Button variant="destructive">Click Me</Button>
    </>
  );
}
