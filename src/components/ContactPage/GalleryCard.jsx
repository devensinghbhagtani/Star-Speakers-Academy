import React from "react";

function GalleryCard({ setOpacity, setImageNumber, card }) {
  return (
    <div
      onMouseOver={() => {
        setImageNumber(card);
        setOpacity(true);
      }}
      onMouseLeave={() => {
        setOpacity(false);
      }}
      className="w-12 h-12 md:w-14  overflow-hidden md:h-14 rounded-full hover:border-[3px] border-[#20B486] bg-slate-500"
    >
      <img
        className="w-full h-full  object-cover"
        src={`../.././assets/Gallery/image_${card}.JPG`}
        alt=""
      />
    </div>
  );
}

export default GalleryCard;
