import styles from './Footer.module.css'

const Footer = ({ children }) => {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-lg-12 text-center">
          <span className={styles.footerText}>{children}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
