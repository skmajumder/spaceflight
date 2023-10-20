import Header from "../Header/Header";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = () => {
  return (
    <Header>
      <div aria-label="breadcrumb" className="container pt-5 my-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h1 className={styles.breadcrumbHeadline}>Spaceflight details</h1>
            <p className={styles.breadcrumbText}>
              Find out the elaborate features of all the past big spaceflights.
            </p>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Breadcrumb;
