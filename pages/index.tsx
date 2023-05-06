import Nav from "../components/Nav";
import Visual from "../components/Visual";
import Intro from "../components/Intro";
import Events from "../components/Events";
import Records from "../components/Records";
import About from "../components/About";
import Footer from "../components/Footer";
import ApplicationInfo from "../components/ApplicationInfo";
export default function Home() {
  return (
    <>
      <Visual />
      <Intro />
      <Events />
      <Records />
      <ApplicationInfo />
      <About />
    </>
  );
}
