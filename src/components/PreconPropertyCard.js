import Link from "next/link";
import React from "react";
import { resenditial } from "../../api/routes";
import { saleLease } from "@/constant";
import { Image } from "react-bootstrap";
// import { Image } from "react-bootstrap";

const PreconPropertyCard = React.forwardRef(
  ({ data, link, small = false }, ref) => {
    const handleImageError = (e) => {
      e.target.onerror = null;
      e.target.src = `/noimage.webp`;
    };
    return (
      // <Link
      //   href={link}
      //   className="text-black hover:text-black hover:no-underline"
      // >
      //   <div className="w-[200px] min-h-[450px] relative" ref={ref}>
      //     <div className="w-full">
      //       {/* {console.log(data.image)} */}
      //       <img
      //         src={`https://api.dolphy.ca${data?.image[0].image}`}
      //         alt="property-image"
      //         className="h-[220px] rounded-3xl"
      //       ></img>
      //     </div>
      //     <section className="pt-4">
      //       <div className="w-full">
      //         <h2 className="font-bold text-lg leading-5 text-wrap">
      //           {data.project_name}
      //         </h2>
      //         <h3 className="text-wrap">
      //           <img src="/location.svg" className="w-5 inline mb-1 h-[]"></img>
      //           {data.project_address}
      //         </h3>
      //       </div>
      //       <button className="rounded-lg bg-white w-1/2 flex justify-center h-[40px] items-center border-2 border-black absolute bottom-2 left-2">
      //         Details→
      //       </button>
      //       {data.price_starting_from && data.price_to ? (
      //         <div>
      //           ${data.price_starting_from}-${data.price_to}
      //         </div>
      //       ) : (
      //         ""
      //       )}
      //       <div className="text-primary-color font-bold uppercase">
      //         {data.status}
      //       </div>
      //     </section>
      //   </div>
      // </Link>
      <section className="text-black px-1" ref={ref}>
        <Link href="/" className="text-black hover:no-underline w-full">
          <div className="lg:px-0 h-full">
            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 group p-0 hover:shadow-lg hover:-translate-y-1 relative">
              <div
                className={`${
                  small ? "h-44" : "h-80"
                } overflow-hidden relative`}
              >
                <div className="h-80 relative">
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={`https://api.dolphy.ca${data?.image[0].image}`}
                    alt="property image"
                    onError={handleImageError}
                  />
                </div>
              </div>
              <div className="flex-1 sm:px-5 py-3 ">
                <div className="flex flex-row justify-between">
                  <div className=" truncate text-ellipsis">
                    <div className="text-[#002349] font-medium text-lg bva">
                      {data.project_name}
                    </div>
                  </div>
                </div>
                <h2 className="text-black d-flex align-items-center justify-content-between">
                  <div className="flex flex-row items-center font-bold text-black text-lg">
                    {data.project_address}
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </Link>
      </section>
    );
  }
);

export default PreconPropertyCard;
