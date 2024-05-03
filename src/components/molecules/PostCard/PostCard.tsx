import { Post } from '@/types/post';
import { Card } from '../Card';
import { formatDate } from '@/utils';
import Link from 'next/link';

type Props = {
  className?: string;
  isShowTags?: boolean;
  post: Post;
};

export const PostCard = ({ className = '', post, isShowTags = false }: Props) => {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${post.url}`}>
        {post.title}
      </Card.Title>
      {isShowTags && (
        <div className='relative z-20 flex flex-wrap gap-4 mt-1 mb-2'>
        {post.postTags &&
          post?.postTags?.length > 0 &&
          post?.postTags.map((tag) => (
            <Link href={`/blog?tag=${tag.slug}`} key={tag.slug} className='text-xs text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200'>
              <span className=''>#{tag.slug}</span>
            </Link>
          ))}
      </div>
      )}
      <Card.Eyebrow as="time" dateTime={post.postedAtShort} decorate>
        {formatDate(post.postedAtShort || '')}
      </Card.Eyebrow>
      <Card.Description className='line-clamp-3'>{post.summary}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  );
};
