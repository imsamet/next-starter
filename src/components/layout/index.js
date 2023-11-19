import cn from 'classnames';
import styles from './style.module.css';
import Nav from '../nav';
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
export default Layout;
