import { Post } from '@/types/post';
import { Card } from '../Card';
import { formatDate } from '@/utils';

type Props = {
  className?: string;
  post: Post;
};

export const PostCard = ({ className = '', post }: Props) => {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${post.slug}`}>
        {post.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={post.postedAtShort} decorate>
        {formatDate(post.postedAtShort || '')}
      </Card.Eyebrow>
      <Card.Description className='line-clamp-3'>{post.summary}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  );
};
