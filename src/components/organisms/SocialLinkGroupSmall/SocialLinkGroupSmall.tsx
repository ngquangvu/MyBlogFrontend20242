import { Icon } from '@iconify/react';
import { Link } from '@/navigation';

const socialLinks = [
  {
    href: 'https://www.facebook.com/Valkyzone/',
    target: '_blank',
    icon: 'mdi:facebook',
    title: 'Follow on Facebook',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-white',
    className: '',
  },
  {
    href: 'https://www.instagram.com/ngquangvu/',
    target: '_blank',
    icon: 'mdi:instagram',
    title: 'Follow on Instagram',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-white',
    className: '',
  },
  {
    href: 'https://github.com/ngquangvu',
    target: '_blank',
    icon: 'mdi:github',
    title: 'Follow on GitHub',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-white',
    className: '',
  },
  {
    href: 'https://www.linkedin.com/in/v%C5%A9-nguy%E1%BB%85n-quang-79610a305/',
    target: '_blank',
    icon: 'mdi:linkedin',
    title: 'Follow on Linkedin',
    classNameImg: 'h-6 w-auto text-zinc-500 dark:text-white',
    className: '',
  }
];

export function SocialLinkGroup() {
  return (
    <div className='mt-6 flex gap-6 h-6'>
      {
        socialLinks.map((link, index) => (
          <SocialLink key={index} href={link.href} target={link.target} aria-label={link.title} icon={() => <Icon icon={link.icon} className={link.classNameImg} />} className={link.className} />
        ))
      }
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
