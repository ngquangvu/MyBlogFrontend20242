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
    src: 'images/gallery/photo_1_thumbnail.jpeg',
    original: 'images/gallery/photo_1.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_2_thumbnail.jpeg',
    original: 'images/gallery/photo_2.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_3_thumbnail.jpeg',
    original: 'images/gallery/photo_3.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_4_thumbnail.jpeg',
    original: 'images/gallery/photo_4.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_5_thumbnail.jpeg',
    original: 'images/gallery/photo_5.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_6_thumbnail.jpeg',
    original: 'images/gallery/photo_6.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_7_thumbnail.jpeg',
    original: 'images/gallery/photo_7.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_8_thumbnail.jpeg',
    original: 'images/gallery/photo_8.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_9_thumbnail.jpeg',
    original: 'images/gallery/photo_9.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_10_thumbnail.jpeg',
    original: 'images/gallery/photo_10.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_11_thumbnail.jpeg',
    original: 'images/gallery/photo_11.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_12_thumbnail.jpeg',
    original: 'images/gallery/photo_12.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_13_thumbnail.jpeg',
    original: 'images/gallery/photo_13.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_14_thumbnail.jpeg',
    original: 'images/gallery/photo_14.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_15_thumbnail.jpeg',
    original: 'images/gallery/photo_15.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_16_thumbnail.jpeg',
    original: 'images/gallery/photo_16.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_17_thumbnail.jpeg',
    original: 'images/gallery/photo_17.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_18_thumbnail.jpeg',
    original: 'images/gallery/photo_18.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_19_thumbnail.jpeg',
    original: 'images/gallery/photo_19.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_20_thumbnail.jpeg',
    original: 'images/gallery/photo_20.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_21_thumbnail.jpeg',
    original: 'images/gallery/photo_21.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_22_thumbnail.jpeg',
    original: 'images/gallery/photo_22.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_23_thumbnail.jpeg',
    original: 'images/gallery/photo_23.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_24_thumbnail.jpeg',
    original: 'images/gallery/photo_24.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_25_thumbnail.jpeg',
    original: 'images/gallery/photo_25.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_26_thumbnail.jpeg',
    original: 'images/gallery/photo_26.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_27_thumbnail.jpeg',
    original: 'images/gallery/photo_27.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_28_thumbnail.jpeg',
    original: 'images/gallery/photo_28.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_29_thumbnail.jpeg',
    original: 'images/gallery/photo_29.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_30_thumbnail.jpeg',
    original: 'images/gallery/photo_30.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_31_thumbnail.jpeg',
    original: 'images/gallery/photo_31.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_32_thumbnail.jpeg',
    original: 'images/gallery/photo_32.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_33_thumbnail.jpeg',
    original: 'images/gallery/photo_33.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_34_thumbnail.jpeg',
    original: 'images/gallery/photo_34.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_35_thumbnail.jpeg',
    original: 'images/gallery/photo_35.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_36_thumbnail.jpeg',
    original: 'images/gallery/photo_36.jpeg',
    width: 300,
    height: 200,
  },
  {
    src: 'images/gallery/photo_37_thumbnail.jpeg',
    original: 'images/gallery/photo_37.jpeg',
    width: 300,
    height: 200,
  }
];

interface ImageItem {
  url: StaticImageData;
  title: string;
}

const slides = images.map(({ original, width, height }) => ({
  src: original,
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
    borderRadius: '0.65rem',
  };

  const popupCSS: SlotStyles = {
    container: {
      background: 'rgba(0, 0, 0, 0.9)',
    },
  }
  return (
    <Container className='sm:px-8 mt-16 sm:mt-28'>
      <div>
        <SectionTitle title='Some photos I took.' intro='I love taking photos everywhere I go. Here are some of my favorite shots, all of them taken with my phone.' />
        <div className='-mx-1 mt-16 sm:mt-20'>
          <Gallery thumbnailStyle={imageCSS} margin={4} images={images} onClick={handleClickImage} enableImageSelection={false} />
          <Lightbox slides={slides} styles={popupCSS} open={index >= 0} index={index} close={() => setIndex(-1)} />
        </div>
      </div>
    </Container>
  );
}
