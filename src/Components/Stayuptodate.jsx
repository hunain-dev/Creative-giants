import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Stayuptodate = () => {
//   const [index, setIndex] = useState(0);

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? testimonialscards.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setIndex((prev) => (prev === testimonialscards.length - 1 ? 0 : prev + 1));
//   };

 

const objcard = [
  {
    img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/6882cc2aa788ed759d4e2c18_68502c02bf65bde2e99084bd_fosx9tr0ktkkftzrzl0hd45zh4h2-p-1600.webp",
    tittle:"CALM Missed Birthdays Wins Big",
    desc:"There are certain projects that offer a sense of pride, regardless of how they’re received in the industry. In fact our favourite work is often defined not by the number of awards it receives, but by how emotionally invested we are in the idea."
  },
  {
    img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/6853ebd2236c724389859c71_bffz9emy0znkf4ksb0lqon4b1q80-p-1600.webp",
    tittle:"CALM Missed Birthdays Wins Big",
    desc:"There are certain projects that offer a sense of pride, regardless of how they’re received in the industry. In fact our favourite work is often defined not by the number of awards it receives, but by how emotionally invested we are in the idea."
  },
  {
    img:"https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/6852e8dfa2b3746c7ac6708a_Shangri-La%202015_01%20%5BPG%20EDIT%5D.webp",
    tittle:"CALM Missed Birthdays Wins Big",
    desc:"There are certain projects that offer a sense of pride, regardless of how they’re received in the industry. In fact our favourite work is often defined not by the number of awards it receives, but by how emotionally invested we are in the idea."
  },
  
]



  return (
    <div className=" grid  py-10 gap-6 px-7  w-full">
      <div className=" Switzer-light w-full ">
        <h2 className="uppercase">News & opinion</h2>
        <div className="h-full leading-30 flex items-center justify-between w-full ">
          <h1 className="text-[6vw]  tracking-tighter">Stay up to date</h1>
          <div className="h-full  ">
            <div className="h-full gap-1 flex items-center justify-center">
              <div
                className={`h-9 w-9 rounded-full border border-black 
            flex items-center justify-center cursor-pointer transition-all duration-300`}
              >
                <GoArrowLeft />
              </div>

              <div
                className={`h-9 w-9 rounded-full border border-black 
            flex items-center justify-center cursor-pointer transition-all duration-300`}
              >
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-between gap-7 mt-6   w-full">
        {
          objcard.map((elem,index)=>{
            return(
              <div key={index} className="h-full w-full">
              <div className=" w-full">
                  <img className="h-full w-full object-cover" src={elem.img} alt="" />
              </div>
            <h2 className="Switzer-light uppercase py-3">{elem.tittle}</h2>
            <h5 className="Switzer-light tracking-tight text-[#7A7A79] text-[1vw] leading-5">{elem.desc}</h5></div> 
            )
          })
        }
       
       
      </div>

    </div>
  );
};

export default Stayuptodate;
