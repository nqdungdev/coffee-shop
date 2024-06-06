"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Slider = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const next = (currentSlide + 1) % 2;
    const id = setTimeout(() => handleShowSlides(next), 5000);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleShowSlides = (index: number) => {
    (slideRef.current as HTMLDivElement).children[currentSlide].classList.add(
      "animate-fadeOut"
    );
    setTimeout(() => setCurrentSlide(index), 900);
  };

  return (
    <div className="relative -mt-[170px]">
      <div
        className="relative h-[700px] w-full"
        style={{ position: "relative" }}
      >
        <div ref={slideRef} className="h-full">
          {[
            { image: "/uploads/source/slide/slide1.png" },
            { image: "/uploads/source/slide/slide2.png" },
          ].map(
            (el, index) =>
              el && (
                <div
                  key={index}
                  className={`relative w-full h-full duration-700 ease-in-out rounded-lg overflow-hidden ${
                    currentSlide === index
                      ? "block animate-fadeIn"
                      : "hidden animate-fadeOut"
                  }`}
                >
                  <Image
                    src={el.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
