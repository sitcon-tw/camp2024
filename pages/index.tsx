import Nav from "../components/Nav";
import Visual from "../components/Visual";
import Intro from "../components/Intro";
import Events from "../components/Events";
import Records from "../components/Records";
import About from "../components/About";
import Reports from "../components/Reports";
import ApplicationInfo from "../components/ApplicationInfo";
import Sponsor from "@/components/Sponsor";
export default function Home() {
  return (
    <>
      <Visual />
      <Intro />
      <Events />
      <Records />
      <Reports />
      <ApplicationInfo />
      <About />
      <Sponsor />
    </>
  );
}
