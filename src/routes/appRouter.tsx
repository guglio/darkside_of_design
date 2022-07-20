import { Routes, Route } from 'react-router-dom';
import { sidenavData, SideNavData } from '../data';
import Projects from './projects';
import Footer from '../components/footer';
import '../styles/main-router.css';

const AppRouter = () => {
  return (
    <div className='main-router-wrapper'>
      <Routes>
        {sidenavData.map((item: SideNavData) => (
          <Route path={item.route} element={item.element} key={item.id} />
        ))}
        <Route path='/*' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
