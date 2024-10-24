import { GiCoffeeCup } from "react-icons/gi";
import { BiSolidBowlRice } from "react-icons/bi";
import { GiCakeSlice } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper/modules";
import image1 from "../assets/sliderimg1.webp";
import image2 from "../assets/sliderimg2.webp";
import image3 from "../assets/sliderimg3.webp";
const Slider = () => {
	const pagination = {
		clickable: true
	  };

  const sliderContent = [
    {
      img: image1,
	  description: 'See All The Delicious Food'
    },
    {
      img: image2,
	  description: 'See All Our Recipes'
    },
    {
      img: image3,
	  description: 'We Can Help You Cook Easily'
    }
  ];
  return (
	<div className="w-full h-screen">
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={pagination}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {sliderContent.map((info, index) => (
        <SwiperSlide key={index}>
			<div className="relative w-full h-full">
			<div className="absolute brightness-75 w-full h-full py-11 bg-red-200 bg-cover bg-center" style={{backgroundImage: `url(${info.img})`}}>
			</div>
			<div className="absolute w-full h-full top-0 bottom-0 right-0 left-0 flex flex-col gap-2 justify-center items-center">
				<div className="flex items-center gap-2 text-xl text-yellow-200">
					<GiCoffeeCup />
					<BiSolidBowlRice />
					<GiCakeSlice />
				</div>
				<p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-yellow-200">
					Welcome to MealApp!
				</p>
				<p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-200">
					{info.description}
				</p>
			</div>
			</div>
        </SwiperSlide>
      ))}
    </Swiper>
	</div>
  );
};

export default Slider;
