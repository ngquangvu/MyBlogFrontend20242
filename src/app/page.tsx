'use client';

import { Icon } from '@iconify/react';
// @ts-ignore
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
import { Card } from '@/components/molecules/Card';
import { formatDate } from '@/utils';
import { Button } from '@/components/atoms/Button';
import { PostWithSlug } from '@/types/post';
import { PostCard } from '@/components/molecules/PostCard/PostCard';

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
      <SocialLink href='#' aria-label='Follow on Facebook' icon={() => <Icon icon='mdi:facebook' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on Instagram' icon={() => <Icon icon='mdi:instagram' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on GitHub' icon={() => <Icon icon='mdi:github' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on LinkedIn' icon={() => <Icon icon='mdi:linkedin' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
    </div>
  );
}

function Newsletter() {
  return (
    <form action='/thank-you' className='rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <Icon icon='tabler:mail' className='h-6 w-6 text-zinc-500 flex-none' />
        <span className='ml-3'>Stay up to date</span>
      </h2>
      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>Get notified when I publish something new, and unsubscribe at any time.</p>
      <div className='mt-6 flex'>
        <input type='email' className='h-10 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10' placeholder='Email address' aria-label='Email address' required />
        <Button type='submit' className='h-10 ml-4 flex items-center  focus:ring-4 focus:ring-teal-500/10 dark:focus:ring-teal-400/10'>
          Join
        </Button>
      </div>
    </form>
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
    // {
    //   company: 'HCMUTE University',
    //   title: 'Student',
    //   logo: logoHCMUTE,
    //   start: 'Nov 2014',
    //   end: 'May 2018',
    // },
  ];

  return (
    <div className='rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'>
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

const posts: PostWithSlug[] = [
  {
    slug: 'crafting-a-design-system-for-a-multiplanetary-future',
    author: 'Adam Wathan',
    date: '2022-09-05',
    title: 'Crafting a design system for a multiplanetary future',
    description: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
  {
    slug: 'introducing-animaginary',
    author: 'Adam Wathan',
    date: '2022-09-02',
    title: 'Introducing Animaginary: High performance web animations',
    description: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
  },
  {
    slug: 'rewriting-the-cosmos-kernel-in-rust',
    author: 'Adam Wathan',
    date: '2022-07-14',
    title: 'Rewriting the cosmOS kernel in Rust',
    description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an blog on the front page of Hacker News about rewriting some important tool in Go and I see posts on there about rewriting things in Rust every single week.',
  },
];

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
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </div>
  );
}
