import Introduce from "@/app/(root)/about-us/_components/introduce/Introduce";
import VisionMission from "@/app/(root)/about-us/_components/visionMission/VisionMission";
import Contact from "@/app/(root)/about-us/_components/contact/Contact";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <>
      <Introduce />

      <VisionMission />

      <Contact />
    </>
  );
};

export default AboutUs;
