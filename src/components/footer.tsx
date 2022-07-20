import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { sidenavData, SideNavData } from '../data';
import '../styles/footer.css';

const Footer = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation('footer');
  const [breadcrumb, setBreadcrumb] = useState<string>('');

  useEffect(() => {
    if (location.pathname !== '/') {
      let activeRoute: SideNavData | undefined = sidenavData.find(
        ({ route }: any) => `/${route}` === location.pathname
      );
      setBreadcrumb(t('breadcrumb', { ns: activeRoute?.id }));
    } else {
      setBreadcrumb('');
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div className='footer'>
      <div>
        <span className='footer-link' onClick={() => navigate('/')}>
          {t('line_1')}
        </span>
        {breadcrumb !== '' && (
          <>
            <span>{` > `}</span>
            <span
              className='footer-link'
              onClick={() => navigate(location.pathname)}
            >
              {breadcrumb}
            </span>
          </>
        )}
      </div>
      <div>{t('line_2')}</div>
      <div>{t('line_3')}</div>
    </div>
  );
};

export default Footer;
