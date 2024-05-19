'use client';

import { Icon } from '@iconify/react';

import logoHitachi from '@/images/logos/customer/Hitachi.svg';
import logoKDDI from '@/images/logos/customer/KDDI.svg';
import logoKansaiDenryoku from '@/images/logos/customer/KansaiDenryoku.svg';
import logoToyama from '@/images/logos/customer/Toyama.svg';
import logoNomura from '@/images/logos/customer/Nomura.svg';
import logoKidZania from '@/images/logos/customer/KidZania.svg';
import logoMatsuiShoken from '@/images/logos/customer/MatsuiShoken.svg';
import logoMiniCooper from '@/images/logos/customer/MiniCooper.svg';
import logoKSS from '@/images/logos/customer/KSS.svg';
import logoXperia from '@/images/logos/customer/Xperia.svg';

import { Container } from '@/components/molecules/Container';
import { Card } from '@/components/molecules/Card';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import Image from 'next/image';
import { getYearMonthAmountBetweenDates } from '@/utils';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

const leaderYears = getYearMonthAmountBetweenDates(new Date('2021-02-01'), new Date());

function Skill({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Card as='li' className='flex flex-col items-center first:rounded-t-xl md:[&:nth-child(2)]:rounded-tr-xl md:[&:nth-child(7)]:rounded-bl-xl md:first:rounded-tr-none lg:first:rounded-tr-none lg:[&:nth-child(2)]:rounded-tr-none lg:[&:nth-child(3)]:rounded-tr-xl lg:[&:nth-child(6)]:rounded-br-xl last:rounded-b-xl md:last:rounded-bl-none lg:last:rounded-bl-none gap-4 border border-default dark:border-zinc-700/40 p-6 -mt-[1px] -ml-[1px]'>
      <div className='flex justify-center items-center h-12 w-12 rounded-full border border-zinc-200 dark:border-zinc-500 p-2'>
        <Icon className='w-7 h-auto text-zinc-600 dark:text-zinc-400' icon={icon} />
      </div>
      <p className='text-center font-extrabold text-xl'>{title}</p>
      <p className='text-center text-offset text-sm'>{description}</p>
    </Card>
  );
}

interface UsableItem {
  icon: string;
  title: string;
  url: string;
}

const languages: Array<UsableItem> = [
  {
    title: 'Javascript',
    icon: 'teenyicons:javascript-solid',
    url: '',
  },
  {
    title: 'Typescript',
    icon: 'teenyicons:typescript-solid',
    url: '',
  },
  {
    title: 'PHP',
    icon: 'simple-icons:php',
    url: '',
  },
  {
    title: 'C Sharp',
    icon: 'simple-icons:csharp',
    url: '',
  },
  {
    title: 'SQL, MySQL, Oracle',
    icon: 'mdi:sql-query',
    url: '',
  },
  {
    title: 'MongoDB',
    icon: 'simple-icons:mongodb',
    url: '',
  },
];

const frameworks: Array<UsableItem> = [
  {
    title: 'React',
    icon: 'teenyicons:react-outline',
    url: '',
  },
  {
    title: 'Laravel',
    icon: 'teenyicons:laravel-solid',
    url: '',
  },

  {
    title: 'NestJS',
    icon: 'simple-icons:nestjs',
    url: '',
  },
  {
    title: 'Wordpress',
    icon: 'bi:wordpress',
    url: '',
  },
  {
    title: 'Unity',
    icon: 'simple-icons:unity',
    url: '',
  },
  {
    title: 'Vue',
    icon: 'teenyicons:vue-solid',
    url: '',
  },
];

const platforms: Array<UsableItem> = [
  {
    title: 'HTML',
    icon: 'akar-icons:html-fill',
    url: '',
  },
  {
    title: 'CSS, SCSS',
    icon: 'akar-icons:css-fill',
    url: '',
  },
  {
    title: 'Astro',
    icon: 'simple-icons:astro',
    url: '',
  },
  {
    title: 'Next JS',
    icon: 'teenyicons:nextjs-solid',
    url: '',
  },
  {
    title: 'Tailwind',
    icon: 'teenyicons:tailwind-solid',
    url: '',
  },
  {
    title: 'MUI',
    icon: 'simple-icons:mui',
    url: '',
  },
  {
    title: 'Docker',
    icon: 'simple-icons:docker',
    url: '',
  },
  {
    title: 'GitHub',
    icon: 'fa-brands:github',
    url: '',
  },
  {
    title: 'SVN',
    icon: 'file-icons:svn',
    url: '',
  },
  {
    title: 'Salesforce',
    icon: 'fa-brands:salesforce',
    url: '',
  },
  {
    title: 'Electron',
    icon: 'simple-icons:electron',
    url: '',
  },
  {
    title: 'Android',
    icon: 'ant-design:android-filled',
    url: '',
  },
  {
    title: 'Adobe Photoshop',
    icon: 'simple-icons:adobephotoshop',
    url: '',
  },
  {
    title: 'Adobe AI',
    icon: 'simple-icons:adobeillustrator',
    url: '',
  },
  {
    title: 'Adobe XD',
    icon: 'simple-icons:adobexd',
    url: '',
  },
  {
    title: 'Figma',
    icon: 'simple-icons:figma',
    url: '',
  },
  {
    title: '',
    icon: 'ph:dots-three-bold',
    url: '',
  },
];

function UsableList({ items, title }: { items: Array<UsableItem>; title: string }) {
  return (
    <div className='w-full max-w-6xl space-y-2'>
      <div className='relative rounded-xl border border-default dark:border-zinc-700/40 px-6 pb-4 pt-8'>
        <h3 className='absolute right-4 top-0 -translate-y-1/2 rounded-full border border-zinc-500 bg-white dark:bg-zinc-800 px-4 py-1 uppercase tracking-tight text-xs'>{title}</h3>
        <ul className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6'>
          {items.map((item, index) => (
            <li key={index}>
              {item.url != '' ? (
                <Link className='flex flex-col items-center gap-2' href={item.url}>
                  <Icon className='h-10 w-auto text-zinc-600' icon={item.icon} />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <div className='flex flex-col items-center gap-2'>
                  <div className='h-10 w-10'>
                    <Icon className='h-10 w-auto text-zinc-600 dark:text-zinc-400' icon={item.icon} />
                  </div>
                  <span className='text-center'>{item.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface CustomerItem {
  title: string;
  icon: string;
  url: string;
}

const customers: Array<CustomerItem> = [
  {
    title: 'Hitachi',
    icon: logoHitachi,
    url: 'https://www.hitachi-systems-ps.co.jp/',
  },
  {
    title: 'KDDI',
    icon: logoKDDI,
    url: 'https://vn.kddi.com/',
  },
  {
    title: '関西電力',
    icon: logoKansaiDenryoku,
    url: 'https://www.kepco.co.jp/',
  },
  {
    title: 'Toyama',
    icon: logoToyama,
    url: 'https://www.info-toyama.com/',
  },
  {
    title: 'Nomura',
    icon: logoNomura,
    url: 'https://www.nomurakougei.co.jp/',
  },
  {
    title: 'KidZania',
    icon: logoKidZania,
    url: 'https://www.kidzania.jp/',
  },
  {
    title: 'MatsuiShoken',
    icon: logoMatsuiShoken,
    url: 'https://www.matsui.co.jp/',
  },
  {
    title: 'MiniCooper',
    icon: logoMiniCooper,
    url: 'https://www.mini.jp/ja_JP/home.html',
  },

  {
    title: 'KS Solutions',
    icon: logoKSS,
    url: 'http://ks-sol.jp/20190401.html',
  },
  {
    title: 'Xperia',
    icon: logoXperia,
    url: 'https://www.sony-asia.com/smartphones',
  },
];

function CustomerList({ items }: { items: Array<UsableItem> }) {
  return (
    <div className='w-full max-w-6xl space-y-2'>
      <div className='relative rounded-xl border border-default dark:border-zinc-700/40 px-6 pb-6 pt-8'>
        <ul className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:grid-cols-5'>
          {items.map((item, index) => (
            <li key={index} className='flex justify-center items-center px-4 md:px-5'>
              <Link className='flex justify-center items-center h-20 w-full grayscale-[1] dark:contrast-[0] hover:grayscale-0 hover:scale-105 transition-all duration-150' target='_blank' href={item.url}>
                <Image className='object-contain object-center' src={item.icon} alt={item.title} width={180} height={180} />
                <span className='hidden'>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Develop() {
  const t = useTranslations('Develop');

  const skills: Array<FeatureItem> = [
    {
      title: t('Skills.title 1'),
      description: t('Skills.content 1'),
      icon: 'ph:layout',
    },
    {
      title: t('Skills.title 2'),
      description: t('Skills.content 2'),
      icon: 'clarity:command-outline-badged',
    },
    {
      title: t('Skills.title 3'),
      description: t('Skills.content 3'),
      icon: 'tabler:brand-unity',
    },
    {
      title: t('Skills.title 4'),
      description: t('Skills.content 4'),
      icon: 'carbon:inventory-management',
    },
    {
      title: t('Skills.title 5'),
      description:  t('Skills.content 5', { leaderYears }),
      icon: 'fluent-mdl2:party-leader',
    },
    {
      title: t('Skills.title 6'),
      description: t('Skills.content 6'),
      icon: 'cil:language',
    },
    {
      title: t('Skills.title 7'),
      description: t('Skills.content 7'),
      icon: 'fluent:design-ideas-24-regular',
    },
    {
      title: t('Skills.title 8'),
      description: t('Skills.content 8'),
      icon: 'ri:empathize-line',
    },
  ];

  return (
    <Container className='sm:px-8 mt-16 sm:mt-28'>
      <div>
        <SectionTitle title={t('Skills.title')} intro={t('Skills.content')}  />
        <div className='mt-16 sm:mt-20'>
          <ul className='grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((skill, index) => (
              <Skill key={index} {...skill} />
            ))}
          </ul>
        </div>
      </div>

      <div className='sm:px-8 mt-16 sm:mt-28'>
        <SectionTitle title={t('TechStackTools.title')} intro={t('TechStackTools.content')} />
        <div className='mt-16 sm:mt-20'>
          <div className='flex flex-col space-y-8'>
            <UsableList items={languages} title={t('TechStackTools.LANGUAGES & DATABASES')} />
            <UsableList items={frameworks} title={t('TechStackTools.LIBRARY & FRAMEWORKS')} />
            <UsableList items={platforms} title={t('TechStackTools.OTHERS')} />
          </div>
        </div>
      </div>

      <div className='sm:px-8 mt-16 sm:mt-28'>
        <SectionTitle title={t('Customers.title')} intro={t('Customers.content')} />
        <div className='mt-16 sm:mt-20'>
          <div className=''>
            <CustomerList items={customers} />
          </div>
        </div>
      </div>
    </Container>
  );
}
