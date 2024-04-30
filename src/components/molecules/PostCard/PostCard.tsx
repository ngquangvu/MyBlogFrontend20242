import { PostWithSlug } from '@/types/post';
import { Card } from '../Card';
import { formatDate } from '@/utils';

type Props = {
  className?: string;
  post: PostWithSlug;
};

export const PostCard = ({ className = '', post }: Props) => {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${post.slug}`}>
        {post.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={post.date} decorate>
        {formatDate(post.date)}
      </Card.Eyebrow>
      <Card.Description>{post.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};
