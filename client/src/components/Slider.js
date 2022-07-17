import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, subtitle2,subtitle0, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Kinet" className="slider__image" />
          <div className="slider__content">
            
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle0}</p>
            <p>{subtitle}</p>
            <p>{subtitle2}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle0}</p>
            <p>{subtitle}</p>
            <p>{subtitle2}</p>
          </div>
          <img src={imageSrc} alt="Games" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
