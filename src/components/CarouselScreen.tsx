import style from "./CardCarousel.module.css";
// import { v4 as uuidv4 } from "uuid";
import Card from "./CardCarousel";
import Carousel from "./Carousel";
import imageTest from "../../public/sliders/developer_slide1.jpg";

function CarouselScreen() {
  let cards = [
    {
      key: "card1-node-mongo",
      content: (
        <Card
          image="https://particles.js.org/images/google.svg"
          title={"title_card1"}
          description={"description_card1"}
          url="https://github.com/jorgetxt/server-basic-express"
        />
      ),
    },
    {
      key: "card2-nest",
      content: (
        <Card
          image={imageTest}
          title={"title_card2"}
          description={"description_card2"}
        />
      ),
    },
    {
      key: "card3",
      content: (
        <Card
          image={imageTest}
          title={"title_card3"}
          description={"description_card3"}
        />
      ),
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="60%"
        margin="0 auto"
        offset={2}
        showArrows={true}
      />
    </div>
  );
}

export default CarouselScreen;
