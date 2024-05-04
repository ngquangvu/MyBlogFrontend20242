// @ts-ignore
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


export function SlideAttitudeImages() {
  const imagesSlide: string[] = ['/images/slide/slide_1.jpeg', '/images/slide/slide_2.jpeg', '/images/slide/slide_3.jpeg', '/images/slide/slide_4.jpeg', '/images/slide/slide_5.jpeg', '/images/slide/slide_6.jpeg', '/images/slide/slide_7.jpeg', '/images/slide/slide_8.jpeg', '/images/slide/slide_9.jpeg', '/images/slide/slide_10.jpeg', '/images/slide/slide_11.jpeg', '/images/slide/slide_12.jpeg', '/images/slide/slide_13.jpeg', '/images/slide/slide_14.jpeg', '/images/slide/slide_15.jpeg', '/images/slide/slide_16.jpeg', '/images/slide/slide_17.jpeg', '/images/slide/slide_18.jpeg', '/images/slide/slide_19.jpeg', '/images/slide/slide_20.jpeg', '/images/slide/slide_21.jpeg', '/images/slide/slide_22.jpeg', '/images/slide/slide_23.jpeg'];

  const settingsSlide = {
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: false,
        },
      },
    ],
  };

  return (
    <div className='slider-container overflow-hidden'>
      <Slider {...settingsSlide}>
        {imagesSlide.map((image, index) => (
          <div key={index}>
            <Image priority src={image} alt='' width={300} height={300} className='rounded-xl' />
          </div>
        ))}
      </Slider>
    </div>
  );
}
