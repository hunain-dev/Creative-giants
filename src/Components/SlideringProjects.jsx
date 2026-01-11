import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideringProjects = () => {
  const data = [
    { 
        projectno:"project no 1",
        projecttitle: (
            <>
              Halo <br /> Masterpiece
            </>
          ),
                  projectdesc:"A 6X3 metre renaissance-style oil painting to support the launch of Xbox’s flagship video game, Halo Infinite.",
        projectimg:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/687a407bf6500870415015e9_Container.webp"



     },
     { 
        projectno:"project no 2",
        projecttitle: (
            <>
              impossible to  <br /> ignore
            </>
          ),
        projectdesc:"A 2.5 ton, 4.3m high, hyper-realistic sculpture of a homeless man, installed at London Kings Cross and Birmingham’s Bullring.",
        projectimg:"https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c780dfee06bc96dd71_Impossible%20to%20ignore.webp"



     },
     { 
        projectno:"project no 3",
        projecttitle: (
            <>
              Silent fall
            </>
          ),
        projectdesc:"A fully immersive exhibition by Superblue London and artist duo AA Murakami.",
        projectimg:"https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/679a55c7ae87290f99fcacbb_dc48c758f2deddacf340441d11ac0c4a_Silent%20Fall.webp"



     },
  ];

  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const totalWidth = wrapperRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(wrapperRef.current, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalWidth - viewportWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
   

      {/* HORIZONTAL SECTION */}
      <section
        ref={sectionRef}
        className="h-full mt-31  w-full overflow-hidden  text-white"
      >
        <div
          ref={wrapperRef}
          className="flex h-full py-20 items-center gap-16 px-50"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="lg:h-[70vh]  overflow-hidden lg:min-w-[73vw] rounded-3xl flex items-center justify-center"
              style={{ backgroundColor: item.background }}
            >
              <div className="h-full  w-full ">

                <div className="h-full w-full flex relative items-end justify-end">
                <div className=" h-full flex items-start justify-center gap-1  p-6 py-20">
                    <div  className="imagecon flex items-center justify-center h-full  ">
                        <img src={item.projectimg} className="h-full w-full object-cover" alt="" />
                    </div>
                    <div className="h-full py-10 w-fit px-3">
                    <h2 className="Switzer-light text-[1.2vw] ">production</h2>
                    <h2 className="Switzer-light text-[1.2vw] ">London</h2>
                    <h2 className="Switzer-light text-[1.2vw] ">Adam & EVE</h2>
                    <h2 className="Switzer-light text-[1.2vw] ">Crisis</h2>
                    <p className="Switzer-light text-[1.3vw] mt-4 w-sm">A 2.5 ton, 4.3m high, hyper-realistic sculpture of a homeless man, installed at London Kings Cross and Birmingham’s Bullring.
                    </p>

                    </div>

                </div>
                <div   className="absolute py-10 px-10 top-0 left-0 right-0  w-fit">
                    <h1 className="Switzer-light text-sm uppercase">{item.projectno}</h1>
                    <h3 className="Switzer-light text-6xl mt-3 mix-blend-difference">{item.projecttitle}</h3>
                </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    
    </>
  );
};

export default SlideringProjects;
