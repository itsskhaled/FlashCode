import Footer from "./Footer/page";
import HomePage from "./Home/page";
import HowItWork from "./HowItWork/page";
import OurValuse from "./OurValues/page";
import SafetyTrust from "./SafetyTrust/page";

export default function Home() {
  return (
    <>
      <HomePage />
      <OurValuse />
      <HowItWork />
      <SafetyTrust />
      <Footer />
    </>
  );
}
