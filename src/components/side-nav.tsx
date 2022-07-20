import { sidenavData, SideNavData } from '../data/';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/side-nav.css';

const NavItem = (item: SideNavData) => {
  const { t } = useTranslation('sidenav');
  return (
    <NavLink
      to={item.route}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'active-nav' : undefined}`
      }
    >
      {t(item.id)}
    </NavLink>
  );
};

const SideNavHeader = () => {
  const { t } = useTranslation('sidenav');
  return (
    <div>
      <header>
        <Link to='/' className='header-link'>
          {t('title')}
        </Link>
      </header>
      <NavLink
        to='/'
        className={({ isActive }) =>
          `nav-link nav-link-projects ${isActive ? 'active-nav' : undefined}`
        }
      >
        {t('projects')}
      </NavLink>
    </div>
  );
};

const SideNavigation = () => {
  // let testData = sidenavData.reduce((acc: any, curr: any) => {
  //   return { ...acc, [curr.id]: curr.name };
  // }, {});

  // console.log(JSON.stringify(testData));
  return (
    <div className='side-nav-wrapper'>
      <div className='side-nav-content'>
        <SideNavHeader />
        {sidenavData.map((item: SideNavData) => (
          <NavItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
