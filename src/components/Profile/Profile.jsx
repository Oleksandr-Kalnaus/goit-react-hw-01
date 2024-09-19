const Profile = ({ data }) => {
  return (
    <div>
      <div>
        <img src={data.avatar} alt={data.username} />
        <p>{data.username}</p>
        <p>@{data.tag}</p>
        <p>{data.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers: </span>
          <span>{data.stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{data.stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;