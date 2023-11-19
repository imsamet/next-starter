/* eslint-disable */
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import Button from '../elements/button';
import Heading from '../elements/texts/heading';
const Error = ({ status, title, desc, buttonText, buttonLink }) => {
  return (
    <section className={cn('section', styles.section)}>
      <div className={cn('container', styles.container)}>
        <div className={styles.content}>
          <span>{status}</span>
          <Heading type="h1">{title}</Heading>
          <Heading type="h2">{desc}</Heading>
          <Link to={buttonLink} passHref legacyBehavior>
            <Button type="secondary" className={styles.button}>
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
Error.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};
Error.defaultProps = {
  status: '404 Error',
  title: 'We’ve lost this page',
  desc: 'Sorry, the page you are looking for doesn’t exist or has been moved.',
  buttonText: 'Anasayfa',
  buttonLink: '/',
};
export default Error;
