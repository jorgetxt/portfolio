import Image from "next/image";
import Slide1 from "../../public/sliders/developer_slide1.jpg";

const Slider1 = () => {
  return <Image src={Slide1} alt="Developer" style={{ height: "100vh" }} />;
};

export default Slider1;
