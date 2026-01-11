import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Marquee = () => {
  const marqueeRef = useRef(null);

  const images = [
  {
    
    img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527eaac850562caf155695_Meta.svg",
    size:"30vw"
  
  },
  { img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae203520041ac6c98ae204_Playstation.svg" },
  { img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae2018c8b2598c2914fa35_CALM.svg" },
  { img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae200aec24e0d6827da37e_Channel%204.svg" },
  {
    img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae1ffdb46c151813897eac_Whatts%20App.svg"
  },
  {
    img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae206c33299da66dd2d0c0_XL_Recordings_Logo%201.svg"
  },{
    img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae205f6285ccbb37258ab3_Glasto.png"

   },
   {
    img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae20485e0e99ea60ad6979_Xbox-Logo.wine%201.svg"
   },
   { img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527eaac850562caf155695_Meta.svg" },
   { img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae203520041ac6c98ae204_Playstation.svg" },
   { img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae2018c8b2598c2914fa35_CALM.svg" },
   { img: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae200aec24e0d6827da37e_Channel%204.svg" },
   {
     img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae1ffdb46c151813897eac_Whatts%20App.svg"
   },
   {
     img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae206c33299da66dd2d0c0_XL_Re"
   },{
     img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae205f6285ccbb37258ab3_Glasto.png"
 
    },
    {
     img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae20485e0e99ea60ad6979_Xbox-Logo.wine%201.svg"
    }
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    const width = marquee.scrollWidth / 2;

    gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -width,
        duration: 60,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);
  
  return (
    <div className="w-full overflow-hidden py-12">
    <div
      ref={marqueeRef}
      className="flex items-center gap-30 whitespace-nowrap"
    >
      {images.map((item, index) => (
        <img
        key={index}
        src={item.img}
        className="w-11  h-full
  object-contain
  saturate-1
"
        alt=""
      />
      ))}
    </div>
  </div>


  )
}

export default Marquee
