import { Post } from '@/types/post';
import { Card } from '../Card';
import { appendUrlParam, formatDate } from '@/utils';
import Link from 'next/link';

type Props = {
  className?: string;
  post: Post;
};

export const PostTimeline = ({ className = '', post }: Props) => {
  return (
    <article className={`${className} md:grid md:grid-cols-5 md:items-baseline`}>
      <Card className='md:col-span-4 ml-2'>
        <Card.Title href={`/blog/${post.url}`} className='line-clamp-2'>{post.title}</Card.Title>
        <Card.Eyebrow as='time' dateTime={post.postedAtShort} className='md:hidden' decorate>
          {formatDate(post.postedAtShort || '')}
        </Card.Eyebrow>
        <Card.Description className='line-clamp-3'>{post.summary}</Card.Description>
        <ul className='relative z-20 flex flex-wrap gap-x-5 gap-y-1 mt-3'>
          {post?.postTags &&
            post?.postTags.map((tag, index) => (
              <li key={index} className='text-sm font-medium text-zinc-800 hover:text-teal-500 transition-all duration-200'>
                <Link href={appendUrlParam('t', tag.slug)} scroll={false}>
                  <span className='text-teal-500 mr-0.5'>#</span>
                  {tag.slug}
                </Link>
              </li>
            ))}
        </ul>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow as='time' dateTime={post.postedAtShort} className='mt-1 hidden md:block'>
        {formatDate(post.postedAtShort || '')}
      </Card.Eyebrow>
    </article>
  );
};
