'use client';

import { Container } from '@/components/molecules/Container';
import { PostDetail } from '@/components/molecules/PostDetail';
import { SkeletonLine } from '@/components/molecules/SkeletonLine';
import { usePost } from '@/hooks/usePost';
import { Post } from '@/types/post';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const dummy: Post = {
  author: {
    displayName: 'Adam Wathan',
  },
  postedAt: '2022-09-05',
  slug: 'crafting-a-design-system-for-a-multiplanetary-future',
  title: 'Crafting a design system for a multiplanetary future',
  summary: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
  content: `
    Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae posterior
    in utraque respicere candidus Mimasque formae; quae conantem cervice. Parcite
    variatus, redolentia adeunt. Tyrioque dies, naufraga sua adit partibus celanda
    torquere temptata, erit maneat et ramos, [iam](#) ait dominari
    potitus! Tibi litora matremque fumantia condi radicibus opusque.
    Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur
    levitate quas ubi arcum ripas oculos abest. Adest [commissaque
    victae](#) in gemitus nectareis ire diva
    dotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita
    nimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu
    nil utinam paternos ima, commentaque.
    
    Aere repetiti cognataque natus. Habebat vela solutis saepe munus nondum adhuc
    oscula nomina pignora corpus deserat.
    
    ## Lethaei Pindumve me quae dinumerat Pavor
    
    Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis Herses omnes nec
    divite: et ille illa furit sim verbis Cyllenius.
    
    1. Captus inpleverunt collo
    2. Nec nam placebant
    3. Siquos vulgus
    4. Dictis carissime fugae
    5. A tacitos nulla viginti
    
    Ungues fistula annoso, ille addit linoque motatque uberior verso
    [rubuerunt](#) confine desuetaque. _Sanguine_ anteit
    emerguntque expugnacior est pennas iniqui ecce **haeret** genus: peiora imagine
    fossas Cephisos formosa! Refugitque amata [refelli](#)
    supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum
    regna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota
    ars talis.
    
    `,
};

export default function BlogPost() {
  const currentPage = usePathname();
  const lastSegment = currentPage.split('/').pop();
  const key = lastSegment?.split('-').pop();

  // Get posts
  const { post, postLoading } = usePost(key || '');

  return (
    <>
      {postLoading && (
        <Container className='mt-16 sm:mt-28'>
          <div className='space-y-6'>
            <SkeletonLine />
            <SkeletonLine />
            <SkeletonLine />
          </div>
        </Container>
      )}
      {post && <PostDetail post={post} />}
      {!postLoading && !post && (
        <Container className='mt-16 sm:mt-28'>
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold text-zinc-800 dark:text-zinc-100'>Blog not found</h2>
            <p className='text-base text-zinc-600 dark:text-zinc-400'>I apologize for the inconvenience, but the requested blog post does not exist. Please check the URL or try again later.</p>
            <div>
              <Link href='/'>Back to Home</Link>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
