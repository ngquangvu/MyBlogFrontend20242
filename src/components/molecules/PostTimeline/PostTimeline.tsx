import { Post } from '@/types/post';
import { Card } from '../Card';
import { formatDate } from '@/utils';

type Props = {
  className?: string;
  post: Post;
};

export const PostTimeline = ({ className = '', post }: Props) => {
  return (
    <article className={`${className} md:grid md:grid-cols-4 md:items-baseline`}>
      <Card className='md:col-span-3'>
        <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow as='time' dateTime={post.postedAt} className='md:hidden' decorate>
          {formatDate(post.postedAt || '')}
        </Card.Eyebrow>
        <Card.Description>{post.summary}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow as='time' dateTime={post.postedAt} className='mt-1 hidden md:block'>
        {formatDate(post.postedAt || '')}
      </Card.Eyebrow>
    </article>
  );
};
