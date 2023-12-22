import Carousel from "../../components/Home/Carousel";
import Navbar from "../../components/Home/Navbar";
import img1 from "../../assets/slidesCarousel/01.png";
import img2 from "../../assets/slidesCarousel/02.png"
import img3 from "../../assets/slidesCarousel/03.png"


function Home() {
  let slides = [img1, img2, img3];

  return (
    <div>
      <Navbar/>
      <section className="w-full m-auto">
        <Carousel slides={slides} />
      </section>
    </div>
  );
}

export default Home;
