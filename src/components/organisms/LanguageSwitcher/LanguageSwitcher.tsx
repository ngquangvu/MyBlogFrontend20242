import { Menu, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { Fragment } from 'react';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/navigation';
import { locales } from '@/config/config';
import { useTranslations } from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations('LocaleSwitcher');

  function onSelectChange(nextLocale: string) {
    // @ts-expect-error
    router.replace({ pathname, params }, { locale: nextLocale });
  }

  return (
    <div>
      <Menu as='div' className='relative bg-white/90 dark:bg-zinc-800/90 rounded-full'>
        <div>
          <Menu.Button className='h-10 w-10 flex items-center justify-center group rounded-full border border-default dark:border-zinc-700 shadow-lg shadow-zinc-800/5 px-2 py-2 transition'>
            <Icon icon='material-symbols-light:language' className='h-6 w-6 text-zinc-500 hover:text-teal-500 focus:text-teal-500 transition-all duration-200 flex-none' />
          </Menu.Button>
        </div>

        <Transition as={Fragment} enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md shadow-lg bg-white dark:bg-zinc-800 shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:text-zinc-200 dark:ring-white/10'>
            <div className='py-1 '>
              {locales.map((item) => (
                <Menu.Item key={item}>
                  <button
                    onClick={() => {
                      onSelectChange(item);
                    }}
                    className={`${locale === item ? 'font-semibold pointer-events-none' : ''} text-gray-700 hover:text-teal-500 dark:hover:text-teal-400 block px-4 py-2 text-sm bg-white dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 transition-all duration-300`}
                  >
                    {t(item)}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
