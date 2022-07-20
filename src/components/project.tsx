import { useEffect, useState } from 'react';
import BackToTop from './back-to-top';

const Project = ({ children }: any) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {children}
      {showButton && <BackToTop id='root' duration={500} />}
    </>
  );
};

export default Project;
