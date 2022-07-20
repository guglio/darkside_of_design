import Tiles from '../components/tiles';
import { sidenavData } from '../data';
import '../styles/projects.css';

const Projects = () => {
  return (
    <>
      <Tiles data={sidenavData} />
      <p>↑ Back to top</p>
    </>
  );
};

export default Projects;
