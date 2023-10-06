import React from "react";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Carousel() {
    const options = {
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 450,
        nav: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        },
    }
  return (
    <div >
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item mx-3">
         <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        <div className="item mx-3">
        <div className="w-full h-[50vh] m-4 p-3 px-3 bg-gray-500 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum blanditiis reiciendis accusamus doloribus. Perferendis tempora ipsa exercitationem iusto, quaerat mollitia quis. Labore minima aut, rerum nostrum alias quisquam incidunt.
         </div>
        </div>
        
      </OwlCarousel>
    </div>
  );
}
