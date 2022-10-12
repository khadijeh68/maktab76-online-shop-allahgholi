import Carousel from 'react-bootstrap/Carousel';
import apple from "../../assets/image/apple.jpg"
import HUAWEI from "../../assets/image/HUAWEI.jpg"
import SAMSUNG from "../../assets/image/SAMSUNG.jpg"
import style from "./Slider.module.css"
function Slider() {
  return (
    <Carousel fade className={style.carousel}>
      <Carousel.Item>
        <img
          className={style.slider}
          src={SAMSUNG}
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
         className={style.slider}
          src={HUAWEI}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
           className={style.slider}
          src={apple}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;