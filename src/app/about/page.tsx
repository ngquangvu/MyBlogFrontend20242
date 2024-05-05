'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

import portraitImage from '@/images/photos/avatar.jpeg';
import { Container } from '@/components/molecules/Container';
import clsx from 'clsx';
import { getYearMonthAmountBetweenDates } from '@/utils';

function SocialLink({ className, href, target, children, icon: Icon }: { className?: string; href: string; target: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        className='group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <div className='w-6'>
          <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
        </div>
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  );
}

const socialLinks = [
  {
    href: 'https://www.facebook.com/Valkyzone/',
    target: '_blank',
    icon: 'mdi:facebook',
    title: 'Follow on Facebook',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-zinc-400',
    className: 'mt-4',
  },
  {
    href: 'https://www.instagram.com/ngquangvu/',
    target: '_blank',
    icon: 'mdi:instagram',
    title: 'Follow on Instagram',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-zinc-400',
    className: 'mt-4',
  },
  {
    href: 'https://github.com/ngquangvu',
    target: '_blank',
    icon: 'mdi:github',
    title: 'Follow on GitHub',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-zinc-400',
    className: 'mt-4',
  },
  {
    href: 'https://www.linkedin.com/in/v%C5%A9-nguy%E1%BB%85n-quang-79610a305/',
    target: '_blank',
    icon: 'mdi:linkedin',
    title: 'Follow on Linkedin',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-zinc-400',
    className: 'mt-4',
  },
  {
    href: 'mailto:nguyenquangvu.work@gmail.com',
    target: '',
    icon: 'mdi:email-outline',
    title: 'nguyenquangvu.work@gmail.com',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-zinc-400',
    className: 'mt-8 border-t border-default pt-8 dark:border-zinc-700/40',
  },
  {
    href: 'tel:+84903306600',
    target: '',
    icon: 'mdi:cellphone',
    title: '+84 903306600',
    classNameImg: 'h-5 w-auto ml-0.5 text-zinc-500 dark:text-zinc-400',
    className: 'mt-4',
  },
];

export default function About() {
  const workYears = getYearMonthAmountBetweenDates(new Date('2018-03-08'), new Date());

  return (
    <Container className='mt-16 sm:mt-28'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='flex justify-center md:block lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image priority src={portraitImage} alt='' sizes='(min-width: 1024px) 30rem, 20rem' className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800' />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>
            I’m Quang Vu.
            <br />A developer in
            <br /> Ho Chi Minh City.
          </h1>
          <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
            <p>I’m a full-stack developer with {workYears} years of experience. My journey in this field has been marked by a deep commitment to learning and mastering the latest technologies, and applying them to deliver high-quality software solutions.</p>

            <p>My passion for technology was ignited in my childhood, and it has only grown stronger over the years. This passion led me to pursue a degree in Information Technology from a reputable university. After my graduation, I embarked on my professional journey as a web developer in Ho Chi Minh city.</p>

            <p>Over the years, I have worked on a diverse range of projects, including E-commerce platforms, Customer Relationship Management (CRM) systems, Content Management Systems (CMS), and various other web applications. I have had the privilege of working with clients from Japan, a country known for its uncompromising emphasis on quality. This experience has instilled in me a deep appreciation for the importance of delivering top-notch products.</p>

            <p>At this juncture in my career, I’m actively seeking new opportunities that will allow me to leverage my skills and experiences. I am eager to engage in discussions about potential roles, and how I can contribute to your team. I am also more than happy to share my experiences and insights gained over the years. I look forward to connecting with you soon.</p>
          </div>
        </div>
        <div className='lg:pl-20'>
          <ul role='list'>
            {socialLinks.map((socialLink) => (
              <SocialLink key={socialLink.href} href={socialLink.href} target={socialLink.target} icon={() => <Icon icon={socialLink.icon} className={socialLink.classNameImg} />} className={socialLink.className}>
                {socialLink.title}
              </SocialLink>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
