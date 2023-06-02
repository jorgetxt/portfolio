import style from "./CardCarousel.module.css";
// import { v4 as uuidv4 } from "uuid";
import Card from "./CardCarousel";
import Carousel from "./Carousel";

function CarouselScreen() {
  let cards = [
    {
      key: "test1",
      content: <Card image="/../../../public/sliders/developer_slide1.jpg" />,
    },
    {
      key: "test2",
      content: <Card image="/sliders/developer_slide1.jpg" />,
    },
    {
      key: "test3",
      content: <Card image="/sliders/developer_slide1.jpg" />,
    },
    {
      key: "test4",
      content: <Card image="/sliders/developer_slide1.jpg" />,
    },
    {
      key: "test5",
      content: <Card image="/sliders/developer_slide1.jpg" />,
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
