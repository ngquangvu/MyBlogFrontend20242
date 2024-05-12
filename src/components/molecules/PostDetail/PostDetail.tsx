'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppContext } from '@/app/providers';
import { Container } from '@/components/molecules/Container';
import { Icon } from '@iconify/react';
import { Post } from '@/types/post';
import Link from 'next/link';
import { PostCard } from '../PostCard';
import hljs from 'highlight.js';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import php from 'highlight.js/lib/languages/php';
import python from 'highlight.js/lib/languages/python';
import csharp from 'highlight.js/lib/languages/csharp';
import scss from 'highlight.js/lib/languages/scss';
import css from 'highlight.js/lib/languages/css';
import less from 'highlight.js/lib/languages/less';
import stylus from 'highlight.js/lib/languages/stylus';
import dust from 'highlight.js/lib/languages/dust';
import n1ql from 'highlight.js/lib/languages/n1ql';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import ebnf from 'highlight.js/lib/languages/ebnf';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('python', python);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('css', css);
hljs.registerLanguage('less', less);
hljs.registerLanguage('stylus', stylus);
hljs.registerLanguage('dust', dust);
hljs.registerLanguage('n1ql', n1ql);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('ebnf', ebnf);

export function PostDetail({ post, relatedPosts }: { post: Post; relatedPosts: Post[] }) {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  useEffect(() => {
    if (post) {
      initHighlighting();
    }
  }, [post]);

  // Init highlighting for code blocks
  function initHighlighting() {
    // Prevent calling initHighlighting multiple times
    if (document.querySelectorAll('pre code.hljs').length > 0) {
      return;
    }

    // Replace all typescriptreact to typescript
    document.querySelectorAll('pre code.language-typescriptreact').forEach((el) => {
      el.classList.remove('language-typescriptreact');
      el.classList.add('language-typescript');
    });

    // Replace all prisma to typescript
    document.querySelectorAll('pre code.language-prisma').forEach((el) => {
      el.classList.remove('language-prisma');
      el.classList.add('language-typescript');
    });

    // Add line numbers to code blocks
    hljs.addPlugin({
      'after:highlightElement': ({ result, el }) => {
        const lines = document.createElement('div');
        if (!result.value.includes('<span class="line-num">')) {
          lines.innerHTML = result.value.replace(/^/gm, '<span class="line-num"></span>');
        }
        el.replaceChildren(...lines.childNodes);
      },
    });

    // Highlight all code blocks
    hljs.highlightAll()
  }

  return (
    <>
      <Container className='mt-12 sm:mt-24'>
        <div className='xl:relative'>
          <div className='mx-auto max-w-3xl -mt-6'>
            {previousPathname && (
              <button type='button' onClick={() => router.back()} aria-label='Go back to blogs' className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20'>
                <Icon icon='formkit:arrowleft' className='h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400' />
              </button>
            )}
            <article>
              <header className='flex flex-col'>
                <h1 className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100'>{post.title}</h1>
                <div className='flex flex-wrap gap-4 mt-4'>
                  {post.postTags &&
                    post?.postTags?.length > 0 &&
                    post?.postTags.map((tag) => (
                      <Link href={`/blog?tag=${tag.slug}`} key={tag.slug} className='text-base text-zinc-700 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-500 transition-all duration-200'>
                        <span className='text-teal-500'>#</span>
                        {tag.slug}
                      </Link>
                    ))}
                </div>
                <time dateTime={post.postedAtShort} className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'>
                  <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
                  <span className='ml-3'>{post.postedAt}</span>
                </time>
              </header>
              <div className='tiptap'>
                <div className='mt-12 mb-16' dangerouslySetInnerHTML={{ __html: post?.content || '' }} />
              </div>
            </article>
          </div>
        </div>

        {relatedPosts && relatedPosts?.length > 0 && (
          <div className='mx-auto max-w-3xl border-t border-default dark:border-zinc-700/40'>
            <div className='flex space-x-6 md:space-x-10 mt-16 mb-12'>
              <h2 className='text-zinc-800 pointer-events-none text-base md:text-xl font-bold dark:text-zinc-100'>Related</h2>
              <Link href='/blog' className='hover:text-teal-500 text-base md:text-xl font-bold text-zinc-400 dark:text-zinc-10 transition-all duration-200'>
                All
              </Link>
            </div>
            <div className='flex flex-col gap-16'>
              {relatedPosts.map((post: Post, index: number) => (
                <PostCard key={index} post={post} isShowTags={true} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
