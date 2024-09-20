import styles from "./Profile.module.css"

const Profile = ({ data }) => {
  return (
    <div className={styles.box}>
      <div className={styles.profileBox}>
        <img className={styles.avatar} src={data.avatar} alt={data.username} />
        <p className={styles.username}>{data.username}</p>
        <p className={styles.tag}>{data.tag}</p>
        <p className={styles.location}>{data.location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.itemText}>Followers: </span>
          <span className={styles.itemNumber}>{data.stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemText}>Views: </span>
          <span className={styles.itemNumber}>{data.stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemText}>Likes: </span>
          <span className={styles.itemNumber}>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;