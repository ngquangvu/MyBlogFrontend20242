import { Icon } from '@iconify/react';
import Link from 'next/link';

export function SocialLinkGroup() {
  return (
    <div className='mt-6 flex gap-6 h-6'>
      <SocialLink href='#' aria-label='Follow on Facebook' icon={() => <Icon icon='mdi:facebook' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on Instagram' icon={() => <Icon icon='mdi:instagram' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on GitHub' icon={() => <Icon icon='mdi:github' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
      <SocialLink href='#' aria-label='Follow on LinkedIn' icon={() => <Icon icon='mdi:linkedin' className='h-6 w-auto text-zinc-500 dark:text-white' />} />
    </div>
  );
}

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
