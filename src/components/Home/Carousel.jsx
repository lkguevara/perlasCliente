import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import '../../index.css'
const Carousel = ({ slides }) => {
    let [ current, setCurrent] = useState(0);

    let previousSlide =() =>{
        if(current === 0 ) setCurrent(slides.length - 1);
        else setCurrent(current - 1)
    }

    let netxSlide = () => {
        if(current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1)
    }

  return (
    <div className='overflow-hidden relative w-screen'>
    {/* Sliders */}
        <div className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
        >
        {slides.map((s, index) => {
            return <img key={index} src={s} className='carousel-image min-w-full' />;
        })}
        </div>

    {/* Botones*/}
        <div className='absolute top-0 h-full w-full justify-between items-center flex px-5'>
            <button onClick={previousSlide}>
                <IoIosArrowBack color="#FF9A62" size="40px" />
            </button>
            <button onClick={netxSlide}>
                <IoIosArrowForward color="#FF9A62" size="40px" />
            </button>
        </div>


        <div className="absolute md:bottom-6 bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 md:w-4 md:h-4 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

// Prototypes
Carousel.propTypes = {
    slides: PropTypes.array.isRequired,
};

export default Carousel;
