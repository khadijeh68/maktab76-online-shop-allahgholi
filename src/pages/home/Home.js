
import Categories from "../../components/category/Categories";
import Slider from "../../components/slider/Slider";
import style from "./Home.module.css"

function Home() {


  return (
    <>
    <Slider/>
    <div className={style.category}>
      <Categories />
    </div>
    </>
    
  );
}

export default Home;
