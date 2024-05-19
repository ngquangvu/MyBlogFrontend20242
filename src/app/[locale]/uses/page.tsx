import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { Card } from '@/components/molecules/Card';
import { Section } from '@/components/molecules/Selection';
import { useTranslations } from 'next-intl';

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

export default function Uses() {
  const t = useTranslations('Uses');

  return (
    <SimpleLayout title={t('title')} intro={t('content')}>
      <div className='space-y-20'>
        <ToolsSection title={t('Workstation.title')}>
          <Tool title={t('Workstation.title 1')}>{t('Workstation.content 1')}</Tool>
          <Tool title={t('Workstation.title 2')}>{t('Workstation.content 2')}</Tool>
          <Tool title={t('Workstation.title 3')}>{t('Workstation.content 3')}</Tool>
          <Tool title={t('Workstation.title 4')}>{t('Workstation.content 4')}</Tool>
          <Tool title={t('Workstation.title 5')}>{t('Workstation.content 5')}</Tool>
          <Tool title={t('Workstation.title 6')}>{t('Workstation.content 6')}</Tool>
          <Tool title={t('Workstation.title 7')}>{t('Workstation.content 7')}</Tool>
        </ToolsSection>
        <ToolsSection title={t('DevelopmentTools.title')}>
          <Tool title={t('DevelopmentTools.title 1')}>{t('DevelopmentTools.content 1')}</Tool>
          <Tool title={t('DevelopmentTools.title 2')}>{t('DevelopmentTools.content 2')}</Tool>
          <Tool title={t('DevelopmentTools.title 3')}>{t('DevelopmentTools.content 3')}</Tool>
        </ToolsSection>
        <ToolsSection title={t('Design.title')}>
        <Tool title={t('Design.title 1')}>{t('Design.content 1')}</Tool>
          <Tool title={t('Design.title 2')}>{t('Design.content 2')}</Tool>
          <Tool title={t('Design.title 3')}>{t('Design.content 3')}</Tool>
        </ToolsSection>
        <ToolsSection title={t('Productivity.title')}>
        <Tool title={t('Productivity.title 1')}>{t('Productivity.content 1')}</Tool>
          <Tool title={t('Productivity.title 2')}>{t('Productivity.content 2')}</Tool>
          <Tool title={t('Productivity.title 3')}>{t('Productivity.content 3')}</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
