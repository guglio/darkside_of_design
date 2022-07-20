import { SideNavData } from '../data';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/tile.css';

const Tile = (item: SideNavData) => {
  const { t } = useTranslation('projects');
  let navigate = useNavigate();
  return (
    <div onClick={() => navigate(item.route)} className='tile'>
      <div className='tile-text-wrapper'>
        <div className='tile-text-content font-18'>
          <div>{t(item.id)}</div>
        </div>
      </div>
      <img src={item.image} className='tile-image' alt={t(item.id)} />
    </div>
  );
};

const Tiles = ({ data }: any) => {
  return (
    <div className='tile-wrapper'>
      {data.map((item: SideNavData) => (
        <Tile key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Tiles;
