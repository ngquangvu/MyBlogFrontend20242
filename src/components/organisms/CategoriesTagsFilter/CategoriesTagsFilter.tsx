import { useCategories } from '@/hooks/useCategories';
import { useTags } from '@/hooks/useTags';
import { appendUrlParam } from '@/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from '@/navigation';
import { SkeletonLines } from '../../molecules/SkeletonLines';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';

export function CategoriesTagsFilter() {
  const t = useTranslations('Blog');

  // Get search params
  const searchParams = useSearchParams();
  const paramCate = searchParams.get('c');
  const paramTag = searchParams.get('t');

  // Get categories
  const { categories, categoriesLoading } = useCategories();

  // Get tags
  const { tags, tagsLoading } = useTags();

  return (
    <Suspense>
      <div className='flex flex-col rounded-xl border border-default dark:border-zinc-700/40'>
        <div className='relative p-6 pl-5'>
          {paramCate && (
            <div className='absolute top-2 right-3'>
              <Link href={appendUrlParam('c', '')} scroll={false} className='flex items-center space-x-1 text-zinc-500 hover:text-teal-500 text-xs transition-all duration-200'>
                <Icon icon='mdi:clear-outline' className='h-3.5 w-3.5' />
                <span>{t("Clear")}</span>
              </Link>
            </div>
          )}

          <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
            <div className='h-6 w-6'>
              <Icon icon='tabler:category' className='h-6 w-6 text-zinc-500 flex-none' />
            </div>
            <span className='ml-3'>{t("Categories")}</span>
          </h2>
          {categoriesLoading && (
            <div className='mt-6'>
              <SkeletonLines />
            </div>
          )}

          {categories && categories?.length > 0 && (
            <div className='ml-9'>
              <ul>
                {categories.map((cate, index) => (
                  <li key={index} className='py-0.5'>
                    <Link href={appendUrlParam('c', cate.slug)} scroll={false} className={`${paramCate === cate.slug && 'font-bold pointer-events-none !text-teal-500 dark:text-teal-500'} text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200`}>
                      {cate.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='relative border-t border-default dark:border-zinc-700/40 p-6 pl-5'>
          {paramTag && (
            <div className='absolute top-2 right-3'>
              <Link href={appendUrlParam('t', '')} scroll={false} className='flex items-center space-x-1 text-zinc-500 hover:text-teal-500 text-xs transition-all duration-200'>
                <Icon icon='mdi:clear-outline' className='h-3.5 w-3.5' />
                <span>{t("Clear")}</span>
              </Link>
            </div>
          )}
          <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
            <div className='h-6 w-6'>
              <Icon icon='tabler:tag' className='h-6 w-6 text-zinc-500 flex-none' />
            </div>
            <span className='ml-3'>{t("Tags")}</span>
          </h2>
          {tagsLoading && (
            <div className='mt-6'>
              <SkeletonLines />
            </div>
          )}

          {tags && tags?.length > 0 && (
            <div className='ml-9'>
              <ul className='relative z-20 flex flex-wrap gap-x-5 gap-y-0 mt-3'>
                {tags.map((tag, index) => (
                  <li key={index} className='py-0.5'>
                    <Link href={appendUrlParam('t', tag.slug)} scroll={false} className={`${paramTag === tag.slug && 'font-bold pointer-events-none !text-teal-500 dark:text-teal-500'} text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200`}>
                      #{tag.slug}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
}
