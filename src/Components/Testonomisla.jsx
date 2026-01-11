import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Testonomisla = () => {
  const [index, setIndex] = useState(0);

  const testimonialscards = [
    {
      background:"#FFACEA",
      color:"#8A0467",
      text: "Working with this team of brilliant, problem solving, passionate, agile Ninjas is such a joy. Their creative ambition  desire to help bring even the most eye watering &amp; challenging projects to life is second to none.",
      name: "Nikki Cramphorn",
      company: "Adam & Eve DDB",
    },
    {
      background:"#A5EBD6",
      color:"#03624C",
      text: "Not content with executing whatever you ask of them to the highest standard, they consistently improve and develop concepts, taking them in exciting new directions I could have never foreseen.",
      name: "Sarah Williams",
      company: "Creative Studio",
    },
    {
      color:"#101731",
      background:"#A5C8EB",
      text: "I’ve worked with Creative Giants for many years, and they never fail to deliver… they jump head feet into all challenges and over-deliver every time. What I especially like about them is that they often enhance the creative, as well as being solutions orientated…",
      name: "John Carter",
      company: "TechFlow",
    },
   
  ];

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonialscards.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === testimonialscards.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full px-7 mt-30">

      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <h2 className="Switzer-light uppercase text-lg">Testimonials</h2>

        <div className="h-full gap-3 flex items-center justify-center">
          <div
            onClick={prevSlide}
            className={`h-9 w-9 rounded-full border border-black 
            flex items-center justify-center cursor-pointer transition-all duration-300
            ${index === 0 ? "opacity-40" : "opacity-100"}`}
          >
            <GoArrowLeft />
          </div>

          <div
            onClick={nextSlide}
            className={`h-9 w-9 rounded-full border border-black 
            flex items-center justify-center cursor-pointer transition-all duration-300
            ${index === testimonialscards.length - 1 ? "opacity-40" : "opacity-100"}`}
          >
            <GoArrowRight />
          </div>
        </div>
      </div>

 {/* Slider */}
<div className="h-fit m-auto mt-10 w-full flex justify-center">

<div
  className="max-w-[70%] overflow-hidden relative"
  style={{ backgroundColor: testimonialscards[index].background }}
>
  {/* SLIDES WRAPPER */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
    {testimonialscards.map((item, i) => (
      <div key={i} className="min-w-full px-12 py-11">
        <h2 className="Switzer-light text-6xl tracking-tighter" style={{color:item.color}}>
          {item.text}
        </h2>

        <div className="pt-20 Switzer-light text-xl " style={{color:item.color}}>
          <h3>{item.name}</h3>
          <h3>{item.company}</h3>
        </div>
      </div>
    ))}
  </div>
</div>

</div>

    </div>
  );
};

export default Testonomisla;
