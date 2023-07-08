import React from 'react';
import { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';


// const foodData = [
//   { name: 'Paneer Wrap', class: 'Paneer' },
//   { name: 'Paneer Lababdar', class: 'Paneer' },
//   { name: 'Kadai Paneer Dhaba Style', class: 'Paneer' },
//   { name: 'Egg Curry', class: 'Egg' },
//   { name: 'Egg Bhurji', class: 'Egg' },
//   { name: 'Egg Khema', class: 'Egg' },
//   { name: 'Egg Lababdar', class: 'Egg' },
//   { name: 'Half Fry', class: 'Egg' },
//   { name: 'Biryani', class: 'Rice' },
//   { name: 'Egg Biryani', class: 'Rice' },
//   { name: 'Veg Pulav', class: 'Rice' },
//   { name: 'Vadapav', class: 'Chat' },
//   { name: 'Puff', class: 'Chat' },
//   { name: 'Sev Puri', class: 'Chat' },
//   { name: 'Dahi Puri', class: 'Chat' },
//   { name: 'Samosa', class: 'Chat' },
// ];


const SpecialMenu = () => {

  // const [selectedClasses, setSelectedClasses] = useState([]);

  // const toggleClass = (foodClass) => {
  //   if (selectedClasses.includes(foodClass)) {
  //     setSelectedClasses(selectedClasses.filter((c) => c !== foodClass));
  //   } else {
  //     setSelectedClasses([...selectedClasses, foodClass]);
  //   }
  // };

  // const foodClasses = Array.from(new Set(foodData.map((food) => food.class)));

  // const filteredFoods = foodData.filter((food) =>
  //   selectedClasses.length === 0 ? true : selectedClasses.includes(food.class)
  // );

  return (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Paneer</p>
        <div className="app__specialMenu_menu_items">
          {data.Paneer.map((paneer, index) => (
            <MenuItem key={paneer.title + index} title={paneer.title} price={paneer.price} tags={paneer.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.f} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Egg</p>
        <div className="app__specialMenu_menu_items">
          {data.Egg.map((egg, index) => (
            <MenuItem key={egg.title + index} title={egg.title} price={egg.price} tags={egg.tags} />
          ))}
        </div>
      </div>
    </div>


            {/* //another section */}


            <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Rice</p>
        <div className="app__specialMenu_menu_items">
          {data.Rice.map((rice, index) => (
            <MenuItem key={rice.title + index} title={rice.title} price={rice.price} tags={rice.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.e} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Chat</p>
        <div className="app__specialMenu_menu_items">
          {data.Chat.map((chat, index) => (
            <MenuItem key={chat.title + index} title={chat.title} price={chat.price} tags={chat.tags} />
          ))}
        </div>
      </div>
    </div>
    {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div> */}
  </div>
  );
};

export default SpecialMenu;