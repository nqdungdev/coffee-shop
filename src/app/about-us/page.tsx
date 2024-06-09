import Introduce from "@/app/about-us/components/introduce/Introduce";
import VisionMission from "@/app/about-us/components/visionMission/VisionMission";
import Contact from "@/app/about-us/components/contact/Contact";
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
