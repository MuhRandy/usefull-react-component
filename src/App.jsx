import Carousel from "./components/carousel/Carousel";
import Carousel2, { CarouselItem } from "./components/carousel/Carousel2";

function App() {
  const pic1 = "https://picsum.photos/500/700";
  const pic2 = "https://picsum.photos/500/800";
  const pic3 = "https://picsum.photos/500/900";
  const pic4 = "https://picsum.photos/400/700";
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel2>
        <CarouselItem>
          <img src={pic4} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src={pic2} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src={pic3} alt="" />
        </CarouselItem>
        <CarouselItem>
          <img src={pic3} alt="" />
        </CarouselItem>
      </Carousel2>
    </div>
  );
}

export default App;
