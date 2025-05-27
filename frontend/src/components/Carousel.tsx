import Slider from "react-slick";
import type { ComponentProps } from "../utils/types";
// Import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Carousel settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: (
    <div>
      <div className="next-slick-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
        </svg>
      </div>
    </div>
  ),

  prevArrow: (
    <div>
      <div className="next-slick-arrow rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
        </svg>
      </div>
    </div>
  ),
  responsive: [
    {
      breakpoint: 1024, // below 1024px (md and smaller)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // below 640px (sm)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = ({ data }: ComponentProps) => {
  return (
    <div className="flex flex-col gap-10 px-3">
      <h1 className="text-lg uppercase text-center">Our Services</h1>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <img
                src={item.image_url}
                alt={item.post_title}
                loading="lazy"
                className="w-full min-h-[400px] h-auto object-cover"
              />
              <h3 className="absolute bottom-2 left-0 right-0 text-center py-3 font-semibold text-xl text-white uppercase">
                {item.post_title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
