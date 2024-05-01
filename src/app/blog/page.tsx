import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { PostTimeline } from '@/components/molecules/PostTimeline';
import { Post } from '@/types/post';

const posts: Post[] = [
  {
    slug: 'crafting-a-design-system-for-a-multiplanetary-future',
    author: {
      displayName: 'Adam Wathan',
    },
    postedAt: '2022-09-05',
    title: 'Crafting a design system for a multiplanetary future',
    summary: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  },
  {
    slug: 'introducing-animaginary',
    author: {
      displayName: 'Adam Wathan',
    },
    postedAt: '2022-09-02',
    title: 'Introducing Animaginary: High performance web animations',
    summary: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
  },
  {
    slug: 'rewriting-the-cosmos-kernel-in-rust',
    author: {
      displayName: 'Adam Wathan',
    },
    postedAt: '2022-07-14',
    title: 'Rewriting the cosmOS kernel in Rust',
    summary: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an blog on the front page of Hacker News about rewriting some important tool in Go and I see blogs on there about rewriting things in Rust every single week.',
  },
];

export default async function Blog() {
  return (
    <SimpleLayout
      title="Writing on technology, software design, leadership, and more."
      intro="All of my form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <PostTimeline key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
