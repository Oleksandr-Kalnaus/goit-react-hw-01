import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
  <div className={styles.friendListItem}> 
      <img src={avatar} alt={`${name}'s avatar`} width="48" className={styles.avatar} />
      <p className={styles.friendName}>{name}</p>
      <p className={isOnline ? styles.statusOnline : styles.statusOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
