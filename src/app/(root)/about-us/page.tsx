import Introduce from "@/components/about-us/introduce/Introduce";
import VisionMission from "@/components/about-us/visionMission/VisionMission";
import Contact from "@/components/about-us/contact/Contact";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <main className="bg-white text-black pt-[165px]">
      <Introduce />

      <VisionMission />

      <Contact />
    </main>
  );
};

export default AboutUs;
