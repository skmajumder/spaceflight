import styles from './Footer.module.css'

const Footer = ({ children }) => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-lg-12 text-center mt-5">
          <span className={styles.footerText}>{children}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
