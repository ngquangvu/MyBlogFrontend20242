import Image, { ImageProps } from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { makeSubscribe } from '@/hooks/useSubscribers';
import { Button } from '@/components/atoms/Button';

export function Newsletter() {
  const router = useRouter();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    makeSubscribe(email).then(() => {
      router.push('thank-you');
    });
  };

  return (
    <form action='/subscribers' onSubmit={onSubmitForm} method='POST' className='rounded-xl border border-default p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <div className='h-6 w-6'>
          <Icon icon='tabler:mail' className='h-6 w-6 text-zinc-500 flex-none' />
        </div>
        <span className='ml-3'>Stay up to date</span>
      </h2>
      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>Get notified when I publish something new, and unsubscribe at any time.</p>
      <div className='mt-6 flex'>
        <input type='email' name='email' className='h-10 min-w-0 flex-auto appearance-none rounded-lg border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10' placeholder='Email address' aria-label='Email address' required />
        <Button type='submit' className='h-10 ml-4 flex items-center  focus:ring-4 focus:ring-teal-500/10 dark:focus:ring-teal-400/10'>
          Join
        </Button>
      </div>
    </form>
  );
}
