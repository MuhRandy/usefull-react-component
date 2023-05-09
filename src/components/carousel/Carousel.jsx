import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

function Carousel() {
  const pic1 = "https://picsum.photos/500/700";
  const pic2 = "https://picsum.photos/500/800";
  const pic3 = "https://picsum.photos/500/900";
  const pic4 = "https://picsum.photos/400/700";
  const slides = [
    {
      imgUrl: pic1,
      imgAlt: "lorem ipsum",
      title: "lorem ipsum",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      imgUrl: pic2,
      imgAlt: "Lorem, ipsum.",
      title: "Lorem, ipsum.",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      imgUrl: pic3,
      imgAlt: "Lorem, ipsum dolor.",
      title: "Lorem, ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, nobis!",
    },
    {
      imgUrl: pic4,
      imgAlt: "Lorem, ipsum.",
      title: "Lorem, ipsum.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quod repellendus iste laborum, modi quisquam impedit cum enim incidunt voluptate.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSLide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[500px] w-full h-[250px] m-auto px-4 relative group">
      {/* Slide item */}
      <img
        src={slides[currentIndex].imgUrl}
        alt={slides[currentIndex].imgAlt}
        className="w-full h-full rounded-2xl duration-500 transition-all object-cover brightness-75"
      />

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <IconChevronLeft size={30} onClick={prevSlide} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <IconChevronRight size={30} onClick={nextSlide} />
      </div>

      {/* Item indicator */}
      <div className="flex gap-1 justify-center py-2 absolute bottom-1 left-0 right-0">
        {slides.map((slide, slideIndex) => (
          <div
            className="cursor-pointer"
            key={slideIndex}
            onClick={() => goToSLide(slideIndex)}
          >
            {slideIndex === currentIndex ? (
              <div className="w-[25px] h-1 bg-white rounded-lg" />
            ) : (
              <div className="w-[25px] h-1 bg-white/50 rounded-lg" />
            )}
          </div>
        ))}
      </div>

      {/* Item teks */}
      <div className="absolute bottom-5 text-center left-0 right-0 text-white px-8">
        <h1 className="text-xl">{slides[currentIndex].title}</h1>
        <p className="text-sm">{slides[currentIndex].desc}</p>
      </div>
    </div>
  );
}

export default Carousel;
