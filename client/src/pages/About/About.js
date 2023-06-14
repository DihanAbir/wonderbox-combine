import React from "react";
import img1 from "../../assets/icons/about-icons/free.png";
import img2 from "../../assets/icons/about-icons/cash.png";
import img3 from "../../assets/icons/about-icons/product.png";
import img4 from "../../assets/icons/about-icons/support.png";

const items = [
  {
    id: "1",
    img: img1,
    title: "Free Delivery",
    description:
      "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
  {
    id: "1",
    img: img2,
    title: "100% Cash Back",
    description:
      "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
  {
    id: "1",
    img: img3,
    title: "Quality Product",
    description:
      "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
  {
    id: "1",
    img: img4,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
  },
];

const About = () => {
  return (
    <div className="bg-blue-gray-50 mt-12 py-6">
      <h1 className="text-center font-bold text-3xl mb-4">Core Features</h1>
      <div
        className="max-w-[1240px] mx-auto cursor-pointer 
      grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 px-4"
      >
        {items.map((item) => (
          <div className="bg-white flex flex-col justify-center items-center gap-4 w-full h-60 border shadow-md shadow-blue-300 p-3">
            <img className="w-14" src={item.img} alt="" />
            <h1 className="text-center text-black font-bold text-xl">
              {item.title}
            </h1>
            <p className="text-gray-500 font-normal text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
