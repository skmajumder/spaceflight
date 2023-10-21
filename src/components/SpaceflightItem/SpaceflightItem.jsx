import styles from "./SpaceflightItem.module.css";
import NoThumb from "./../../image/no-thumb.png";

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    date
  );
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

const SpaceflightItem = ({ item }) => {
  const {
    mission_name: name,
    links: { mission_patch_small: img },
    links: { article_link },
    launch_date_utc: date,
    rocket: { rocket_name },
    launch_success: status,
  } = item || {};
  return (
    <li className="col-lg-4 text-center mb-4">
      <div className="border rounded p-4">
        <img
          src={img !== null ? img : NoThumb}
          className={`${styles.imageSize} img-fluid`}
          alt={name}
        />
        <p className={`${styles.launchDate}`}>
          Launch Date: <time dateTime={date}>{formatDate(date)}</time>
        </p>
        <h3 className={`${styles.spaceflightName}`}>
          <a href={article_link} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h3>
        <p className={`${styles.rocketName}`}>{rocket_name}</p>
        <div>
          <p className={`${styles.launchStatus}`}>Launch Status:</p>
          <span
            className={
              status ? `${styles.statusSuccess}` : `${styles.statusFailed}`
            }
          >
            {status ? "Success" : "Failed"}
          </span>
        </div>
      </div>
    </li>
  );
};

export default SpaceflightItem;
