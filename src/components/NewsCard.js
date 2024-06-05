import React from "react";

const NewsCard = React.forwardRef(({ title, imageSrc }, ref) => {
  return (
    // <div className="md:px-2 lg:px-4 border-1">
    //   <img className="-rotate-1" src={imageSrc} alt="new thumbnail" />
    //   <h3 className="mt-5 text-xl font-semibold leading-tight text-black">
    //     {title}
    //   </h3>

    // </div>
    <div className="bg-gray-50 rounded-md" ref={ref}>
      <div className="overflow-hidden cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
        <img
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
          src={imageSrc}
          alt="news thumbnail"
        />
      </div>
      <p className="mt-2 mb-2 text-xl font-bold text-[#000] px-2">{title}</p>
    </div>
  );
});

export default NewsCard;