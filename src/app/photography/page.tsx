'use client';

import { Container } from '@/components/molecules/Container';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { Gallery } from 'react-grid-gallery';
import { useState } from 'react';
import Lightbox, { SlotStyles } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Image } from 'react-grid-gallery';
import { StaticImageData } from 'next/image';

interface CustomImage extends Image {
  original: string;
}

const images: CustomImage[] = [
  {
    src: 'images/gallery/photo_1.jpeg',
    original: 'images/gallery/photo_1.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_2.jpeg',
    original: 'images/gallery/photo_2.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_3.jpeg',
    original: 'images/gallery/photo_3.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_4.jpeg',
    original: 'images/gallery/photo_4.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_5.jpeg',
    original: 'images/gallery/photo_5.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_6.jpeg',
    original: 'images/gallery/photo_6.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_7.jpeg',
    original: 'images/gallery/photo_7.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_8.jpeg',
    original: 'images/gallery/photo_8.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_9.jpeg',
    original: 'images/gallery/photo_9.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_10.jpeg',
    original: 'images/gallery/photo_10.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_11.jpeg',
    original: 'images/gallery/photo_11.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_12.jpeg',
    original: 'images/gallery/photo_12.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_13.jpeg',
    original: 'images/gallery/photo_13.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_14.jpeg',
    original: 'images/gallery/photo_14.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_15.jpeg',
    original: 'images/gallery/photo_15.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_16.jpeg',
    original: 'images/gallery/photo_16.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_17.jpeg',
    original: 'images/gallery/photo_17.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_18.jpeg',
    original: 'images/gallery/photo_18.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_19.jpeg',
    original: 'images/gallery/photo_19.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_20.jpeg',
    original: 'images/gallery/photo_20.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_21.jpeg',
    original: 'images/gallery/photo_21.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_22.jpeg',
    original: 'images/gallery/photo_22.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_23.jpeg',
    original: 'images/gallery/photo_23.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_24.jpeg',
    original: 'images/gallery/photo_24.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_25.jpeg',
    original: 'images/gallery/photo_25.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_26.jpeg',
    original: 'images/gallery/photo_26.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_27.jpeg',
    original: 'images/gallery/photo_27.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_28.jpeg',
    original: 'images/gallery/photo_28.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_29.jpeg',
    original: 'images/gallery/photo_29.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_30.jpeg',
    original: 'images/gallery/photo_30.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_31.jpeg',
    original: 'images/gallery/photo_31.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_32.jpeg',
    original: 'images/gallery/photo_32.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_33.jpeg',
    original: 'images/gallery/photo_33.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_34.jpeg',
    original: 'images/gallery/photo_34.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_35.jpeg',
    original: 'images/gallery/photo_35.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_36.jpeg',
    original: 'images/gallery/photo_36.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_37.jpeg',
    original: 'images/gallery/photo_37.jpeg',
    width: 300,
    height: 200,
  }
];

interface ImageItem {
  url: StaticImageData;
  title: string;
}

const slides = images.map(({ src, width, height }) => ({
  src: src,
  width,
  height,
}));

export default function Photography() {
  const [index, setIndex] = useState(-1);
  const handleClickImage = (index: number, item: CustomImage) => setIndex(index);
  const imageCSS: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '0.35rem',
  };

  const popupCSS: SlotStyles = {
    container: {
      background: 'rgba(0, 0, 0, 0.9)',
    },
  }
  return (
    <Container className='sm:px-8 mt-16 sm:mt-32'>
      <div>
        <SectionTitle title='Some photos I took.' intro='I love taking photos everywhere I go. Here are some of my favorite shots.' />
        <div className='mt-16 sm:mt-20'>
          <Gallery thumbnailStyle={imageCSS} margin={4} images={images} onClick={handleClickImage} enableImageSelection={false} />
          <Lightbox slides={slides} styles={popupCSS} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </div>
      </div>
    </Container>
  );
}
