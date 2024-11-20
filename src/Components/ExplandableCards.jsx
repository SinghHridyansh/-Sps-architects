import React from "react";
import { useState } from "react";

const cardData = [
  { id: 1, title: "Picture 1", imgSource: "./Assets/Asset_1.jpg" },
  { id: 2, title: "Picture 2", imgSource: "./Assets/Asset_2.jpg" },
  { id: 3, title: "Picture 3", imgSource: "./Assets/Asset_3.jpg" },
  { id: 4, title: "Picture 4", imgSource: "./Assets/Asset_4.jpg" },
  { id: 5, title: "Picture 5", imgSource: "./Assets/Asset_5.jpg" },
  // { id: 6, title: "Picture 6", imgSource: "./Assets/Asset_6.jpg" },
  // { id: 7, title: "Picture 7", imgSource: "./Assets/Asset_7.png" },
  // { id: 8, title: "Picture 8", imgSource: "./Assets/Asset_8.jpg" },
];

const ExplandableCards = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-max bg-gray-300 gap-4 md:gap-2 px-8 py-10  ">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`relative lg:h-96 flex ${
            expandedCard === card.id ? "CardExpand" : "CardNormal fontZero"
          } transition-all duration-500 ease-in-out bg-gray-800 rounded-lg overflow-hidden cursor-pointer`}
          style={{
            backgroundImage: `url(${card.imgSource})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="absolute bottom-5 left-5">
            <span className="text-white text-sm md:text-lg lg:text-2xl font-semibold">
              {card.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExplandableCards;

{
  /* <div className="container bg-slate-400 text-black w-full h-max px-8 py-10 flex justify-center gap-7 lg:gap-20"></div> */
}
