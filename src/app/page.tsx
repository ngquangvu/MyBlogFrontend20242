'use client';

import { Icon } from '@iconify/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import logoCanvasAsia from '@/images/logos/company/canvas_asia.png';
import logoFujinet from '@/images/logos/company/fujinet_jsc.png';
import logoHCMUTE from '@/images/logos/company/hcmute.png';
import { useEffect, useState } from 'react';
import { Container } from '@/components/molecules/Container';

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

function SocialLinKGroup() {
  return (
    <div className='mt-6 flex gap-6 h-6'>
      <SocialLink href='#' aria-label='Follow on X' icon={() => <Icon icon='fa6-brands:x-twitter' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on Instagram' icon={() => <Icon icon='mdi:instagram' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on GitHub' icon={() => <Icon icon='mdi:github' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on LinkedIn' icon={() => <Icon icon='mdi:linkedin' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
    </div>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel = typeof role.start === 'string' ? role.start : role.start.label;
  let startDate = typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className='flex gap-4'>
      <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
        <Image src={role.logo} alt='' className='h-10 w-10 rounded-full object-contain' unoptimized />
      </div>
      <dl className='flex flex-auto flex-wrap gap-x-2'>
        <dt className='sr-only'>Company</dt>
        <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>{role.company}</dd>
        <dt className='sr-only'>Role</dt>
        <dd className='text-xs text-zinc-500 dark:text-zinc-400'>{role.title}</dd>
        <dt className='sr-only'>Date</dt>
        <dd className='ml-auto text-xs text-zinc-400 dark:text-zinc-500' aria-label={`${startLabel} until ${endLabel}`}>
          <time dateTime={startDate}>{startLabel}</time> <span aria-hidden='true'>—</span> <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Canvas.Asia',
      title: 'Developer ・ Leader',
      logo: logoCanvasAsia,
      start: 'Dec 2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Fujinet Systems JSC',
      title: 'Developer',
      logo: logoFujinet,
      start: 'Mar 2018',
      end: 'Nov 2021',
    },
    {
      company: 'HCMUTE University',
      title: 'Student',
      logo: logoHCMUTE,
      start: 'Nov 2014',
      end: 'May 2018',
    },
  ];

  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <div className='w-6'>
          <Icon icon='tabler:briefcase' className='h-6 w-6 text-zinc-500 flex-none' />
        </div>
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
}

const imagesSlide: string[] = ['/images/slide/slide_1.jpeg', '/images/slide/slide_2.jpeg', '/images/slide/slide_3.jpeg', '/images/slide/slide_4.jpeg', '/images/slide/slide_5.jpeg', '/images/slide/slide_6.jpeg', '/images/slide/slide_7.jpeg', '/images/slide/slide_8.jpeg', '/images/slide/slide_9.jpeg', '/images/slide/slide_10.jpeg', '/images/slide/slide_11.jpeg', '/images/slide/slide_12.jpeg', '/images/slide/slide_13.jpeg', '/images/slide/slide_14.jpeg', '/images/slide/slide_15.jpeg', '/images/slide/slide_16.jpeg', '/images/slide/slide_17.jpeg', '/images/slide/slide_18.jpeg', '/images/slide/slide_19.jpeg', '/images/slide/slide_20.jpeg', '/images/slide/slide_21.jpeg', '/images/slide/slide_22.jpeg', '/images/slide/slide_23.jpeg'];

function SlideImages() {
  const settingsSlide = {
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    speed: 5500,
    autoplaySpeed: 5500,
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
            <Image src={image} alt='' width={300} height={300} className='rounded-md' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default function Home() {
  const [greeting, setGreeting] = useState<string>('　');

  useEffect(() => {
    const greetings = ['Hello!', 'Hi there!', 'Hey!', 'Greetings!', 'Howdy!', 'Salutations!', 'Nice to see you!', 'Hiya!'];
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)] + ' 👋');
  }, []);

  return (
    <div className='sm:px-8 mt-16 sm:mt-32'>
      <Container>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>{greeting}</h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>I am Quang Vu, a full-stack developer based in Vietnam, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
          <SocialLinKGroup />
        </div>
      </Container>
      <Container className='mt-12 md:mt-20'>
        <div className='mx-auto'>
          <SlideImages />
        </div>
      </Container>
      <Container className='mt-24 md:mt-28'>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            <div className='space-y-6'>Blog...</div>
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Resume />
          </div>
        </div>
      </Container>
    </div>
  );
}
