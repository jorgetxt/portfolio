import style from "./CardCarousel.module.css";
// import { v4 as uuidv4 } from "uuid";
import Card from "./CardCarousel";
import Carousel from "./Carousel";
import imageTest from "../../public/sliders/developer_slide1.jpg";

function CarouselScreen() {
  let cards = [
    {
      key: "test1",
      content: <Card image={imageTest} />,
    },
    {
      key: "test2",
      content: <Card image={imageTest} />,
    },
    {
      key: "test3",
      content: <Card image={imageTest} />,
    },
    {
      key: "test4",
      content: <Card image={imageTest} />,
    },
    {
      key: "test5",
      content: <Card image={imageTest} />,
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CarouselScreen;
