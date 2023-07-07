import React, { useState, useEffect } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imageList = [
    images.paneer,
    images.eggbiryani,
    images.puff,
    images.sevpuri,
    images.samosa,
  ];

  const handleClick = (event) => {
    event.preventDefault();
    const targetLocation = '#menu';
  
    if (window.location.hash === targetLocation) {
      // Target location is already in the URL, scroll to it
      const targetElement = document.querySelector(targetLocation);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Target location is not in the URL, update the hash and prevent default
      window.location.hash = targetLocation;
    }
  };
  return (

    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button type="button" className="custom__button" onClick={handleClick}>
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={imageList[imageList.length === 5 ? currentImageIndex % 5 : currentImageIndex]} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;