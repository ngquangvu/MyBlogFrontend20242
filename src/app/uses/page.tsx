import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { Card } from '@/components/molecules/Card';
import { Section } from '@/components/molecules/Selection';

function ToolsSection({ children, ...props }: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role='list' className='space-y-16'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
};

export default function Uses() {
  return (
    <SimpleLayout title='Software I use, gadgets I love, and other things I recommend.' intro='I get asked about the things I use to build software, stay productive, and live my life. Here’s a big list of all of my favorite stuff.'>
      <div className='space-y-20'>
        <ToolsSection title='Workstation'>
          <Tool title='Apple 15.6” MacBook Pro 2019, core i9, 32GB RAM'>I was using Windows laptops for a long time but I switched to MacBook. I like MacOS and performance is good for the development work I do.</Tool>
          <Tool title='Dell 27” P2723QE 90W'>The display of this monitor is wide enough to have multiple windows open side by side at once. With 90W power delivery, I can charge my MacBook Pro with a single cable.</Tool>
          <Tool title='Filco Minila Air 2016 x SP SA Oblivion Keycap'>I really liked the idea of a wireless mechanical keyboard with a long battery life, especially paired with the retro Oblivion keycap design.</Tool>
          <Tool title='Apple Magic Trackpad 2'>As much as I love the track pad on the MacBook Pro, I love the Magic Trackpad 2 even more. It’s just so big and easy to use. The gestures are great and I can’t imagine using a computer without them.</Tool>
          <Tool title='Apple Magic Keyboard 2022'>Recently, I’ve noticed that the keycap profile of my mechanical keyboard creates some noise, so I decided to switch to this keyboard. The typing experience is okay, and the function keys seamlessly integrate with my MacBook, working perfectly.</Tool>
          <Tool title='Apple Airpod Pro 2'>Last gadget in this list I bought from Apple. I was using overhead and overear headphones but the weight of them was bothering me. So I switched to Airpod Pro 2, the sound quality and the noise cancellation is good enough for me.</Tool>
          <Tool title='SMA Ergonomic 02'>My back was hurting from sitting in a chair all day so I got this chair. It’s not the most comfortable chair I’ve ever sat in but it’s is comfortable chair.</Tool>
        </ToolsSection>
        <ToolsSection title='Development tools'>
          <Tool title='VS Code'>Best code editor I’ve ever used. I’ve tried a lot of them but I always come back to VS Code. It’s fast, has great extensions, and is just a pleasure to use.</Tool>
          <Tool title='iTerm2'>Simple but powerful terminal emulator. I like the split panes and the ability to have multiple tabs open at once.</Tool>
          <Tool title='Insomnia'>Postman is great, but I prefer Insomnia. It’s simpler, faster, and I like its design.</Tool>
        </ToolsSection>
        <ToolsSection title='Design'>
          <Tool title='Figma'>Beside Adobe XD, Figma is the best design tool I’ve ever used. It’s fast, has great collaboration features, and is just a pleasure to use.</Tool>
          <Tool title='Adobe Photoshop'>
            No need to explain the powerful tool. I use it for photo editing and some design work.
          </Tool>
          <Tool title='Adobe AI'>
            I’m not a designer but I use it for some simple vector design work.
          </Tool>
        </ToolsSection>
        <ToolsSection title='Productivity'>
          <Tool title='Notion'>Can’t say enough good things about Notion. I use it for everything from note-taking to project management, book summaries, and even writing articles.</Tool>
          <Tool title='Alfred'>I use Alfred for everything. It’s a great app launcher and I use it for clipboard history, snippets, and a lot more.</Tool>
          <Tool title='Apple Focus'>Simple tool that helps me stay focused. I use it to block distracting websites and apps when I need to get work done. Sync across all my Apple devices is a great feature.</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
