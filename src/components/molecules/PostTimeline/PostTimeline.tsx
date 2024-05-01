import { Post } from '@/types/post';
import { Card } from '../Card';
import { formatDate } from '@/utils';

type Props = {
  className?: string;
  post: Post;
};

export const PostTimeline = ({ className = '', post }: Props) => {
  return (
    <article className={`${className} md:grid md:grid-cols-5 md:items-baseline`}>
      <Card className='md:col-span-4 ml-2'>
        <Card.Title href={`/blog/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow as='time' dateTime={post.postedAtShort} className='md:hidden' decorate>
          {formatDate(post.postedAtShort || '')}
        </Card.Eyebrow>
        <Card.Description>{post.summary}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow as='time' dateTime={post.postedAtShort} className='mt-1 hidden md:block'>
        {formatDate(post.postedAtShort || '')}
      </Card.Eyebrow>
    </article>
  );
};
