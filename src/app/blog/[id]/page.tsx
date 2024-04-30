'use client';

import { PostDetail } from '@/components/molecules/PostDetail';
import { PostWithSlug } from '@/types/post';

const dummy: PostWithSlug = {
  author: 'Adam Wathan',
  date: '2022-09-05',
  slug: 'crafting-a-design-system-for-a-multiplanetary-future',
  title: 'Crafting a design system for a multiplanetary future',
  description: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
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
  return <PostDetail post={dummy} />;
}