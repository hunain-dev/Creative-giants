import React from 'react'

const WhatWeDo = () => {
    const data = [
        {
          number: "100+",
          text: "Years of combined experience in creative production, design.",
        },
        {
          number: "200+",
          text: "Projects successfully completed across multiple industries.",
        },
        {
          number: "300+",
          text: "Happy clients who love our work and creativity.",
        },
      ];
  return (
    <div className=' pt-28 w-full '>
        <div className=' px-10 w-full '>
            <h3 className='Switzer-light  text-[1.2vw] uppercase '>What we do</h3>
            <h2 className='Switzer-light tracking-tight text-[4.4vw] leading-15 w-5xl py-5'>We are artists, designers, <br />
producers, creatives, clients and
technicians. We work together to
create immersive experiences
and bring ideas to life in
real-world spaces.</h2>
        </div>

        <div className=' flex items-center justify-center w-full'>
            <div className='h-full w-fit'>
                <h4 className='py-12 text-1xl tracking-tight w-3xl text-left text-[#9D9C9A] Switzer-light'>We go beyond the traditional agency model and empower people across different
industries to realise their creative ambitions. From the marketing director looking
for more impact, to the artist reaching out to new audiences - we have the
experience, the dedication, the skills and the resources to make seemingly
impossible projects happen. Our clients don’t hire us, they join us. And in doing so,
become Creative Giants themselves.</h4>
<div className="flex flex-col md:flex-row gap-2 h-full w-full">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col h-full w-64">
          <h3 className="text-6xl md:text-7xl Switzer-light">{item.number}</h3>
          <p className="Switzer-light tracking-tight text-sm md:text-1xl mt-2">{item.text}</p>
        </div>
      ))}
    </div>

            </div>

        </div>
      
    </div>
  )
}

export default WhatWeDo
