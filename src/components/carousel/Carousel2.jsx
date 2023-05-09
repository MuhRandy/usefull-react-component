import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import { Children, cloneElement } from "react";

function Carousel2({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Children.count(children) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Children.count(children) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSLide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="overflow-hidden group relative rounded-2xl">
      {/* Item */}
      <div
        className={`whitespace-nowrap transition-transform duration-300 w-[300px] h-[200px] translate-x-[-${
          currentIndex * 100
        }%]`}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, { width: "100%", height: "100%" });
        })}
      </div>

      {/* Sliders */}
      <div>
        {/* prev */}
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IconChevronLeft size={30} onClick={prevSlide} />
        </div>

        {/* next */}
        <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <IconChevronRight size={30} onClick={nextSlide} />
        </div>
      </div>

      {/* Item indicator */}
      <div className="flex gap-1 justify-center py-2 absolute bottom-1 left-0 right-0">
        {Children.map(children, (child, index) => (
          <div
            className="cursor-pointer"
            key={index}
            onClick={() => goToSLide(index)}
          >
            {index === currentIndex ? (
              <div className="w-[25px] h-1 bg-white rounded-lg" />
            ) : (
              <div className="w-[25px] h-1 bg-white/50 rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CarouselItem({ children, width, height }) {
  return (
    <div
      style={{ width: width, height: height }}
      className={`inline-flex items-center justify-center h-[200px] bg-green-500 text-white`}
    >
      {children}
    </div>
  );
}

export default Carousel2;
