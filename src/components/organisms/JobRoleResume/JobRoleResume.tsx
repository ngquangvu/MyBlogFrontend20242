import Image, { ImageProps } from 'next/image';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';

import logoCanvasAsia from '@/images/logos/company/canvas_asia.png';
import logoFujinet from '@/images/logos/company/fujinet_jsc.png';
import logoShuei from '@/images/logos/company/shuei_infotech.png';

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

export function JobRoleResume() {
  const t = useTranslations('Works');
  const resume: Array<Role> = [
    {
      company: t('shuei'),
      title: t('shuei title'),
      logo: logoShuei,
      start: t('shuei start'),
      end: {
        label: t('shuei end'),
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: t('canvas'),
      title: t('canvas title'),
      logo: logoCanvasAsia,
      start: t('canvas start'),
      end: t('canvas end'),
    },
    {
      company: t('fujinet'),
      title: t('fujinet title'),
      logo: logoFujinet,
      start: t('fujinet start'),
      end: t('fujinet end'),
    },
  ];

  return (
    <div className='rounded-xl border border-default p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <div className='w-6'>
          <Icon icon='tabler:briefcase' className='h-6 w-6 text-zinc-500 flex-none' />
        </div>
        <span className='ml-3'>{t('title')}</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
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
