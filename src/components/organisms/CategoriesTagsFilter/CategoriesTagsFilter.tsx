import { useCategories } from '@/hooks/useCategories';
import { useTags } from '@/hooks/useTags';
import { appendUrlParam } from '@/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { SkeletonLines } from '../../molecules/SkeletonLines';
import { useSearchParams } from 'next/navigation';

export function CategoriesTagsFilter() {
  // Get search params
  const searchParams = useSearchParams();
  const paramCate = searchParams.get('c');
  const paramTag = searchParams.get('t');

  // Get categories
  const { categories, categoriesLoading } = useCategories();

  // Get tags
  const { tags, tagsLoading } = useTags();

  return (
    <div className='flex flex-col rounded-xl border border-default dark:border-zinc-700/40'>
      <div className='p-6'>
        <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
          <div className='h-6 w-6'>
            <Icon icon='tabler:category' className='h-6 w-6 text-zinc-500 flex-none' />
          </div>
          <span className='ml-3'>Categories</span>
        </h2>
        {categoriesLoading && (
          <div className='mt-6'>
            <SkeletonLines />
          </div>
        )}

        {categories && categories?.length > 0 && (
          <div className='ml-9'>
            <ul>
              {paramCate && (
                <li className='py-0.5'>
                  <Link href={appendUrlParam('c', '')} scroll={false} className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200'>
                    All
                  </Link>
                </li>
              )}
              {categories.map((cate, index) => (
                <li key={index} className='py-0.5'>
                  <Link href={appendUrlParam('c', cate.slug)} scroll={false} className={`${paramCate === cate.slug && 'font-bold pointer-events-none'} text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200`}>
                    {cate.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='border-t border-default p-6'>
        <h2 className='flex mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
          <div className='h-6 w-6'>
            <Icon icon='tabler:tag' className='h-6 w-6 text-zinc-500 flex-none' />
          </div>
          <span className='ml-3'>Tags</span>
        </h2>
        {tagsLoading && (
          <div className='mt-6'>
            <SkeletonLines />
          </div>
        )}

        {tags && tags?.length > 0 && (
          <div className='ml-9'>
            <ul>
              {paramTag && (
                <li className='py-0.5'>
                  <Link href={appendUrlParam('t', '')} scroll={false} className='text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200'>
                    #all
                  </Link>
                </li>
              )}
              {tags.map((tag, index) => (
                <li key={index} className='py-0.5'>
                  <Link href={appendUrlParam('t', tag.slug)} scroll={false} className={`${paramTag === tag.slug && 'font-bold pointer-events-none'} text-sm text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200`}>
                    #{tag.slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
