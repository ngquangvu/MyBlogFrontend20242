import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function ThankYou() {
  const t = useTranslations('Thanks');

  return (
    <SimpleLayout title={t('title')} intro={t('content')}>
      <div>
        <Link href='/'>{t('Back to home')}</Link>
      </div>
    </SimpleLayout>
  );
}
