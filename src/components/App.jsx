import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";

export default function App() {
  return (
    <>
      <Profile data={userData} />

      <FriendList friends={friends} />

      <FriendList friends={friends} />

      <FriendList friends={friends} />
      
      <FriendList friends={friends} />
      
      <FriendList friends={friends} />
    </>
  );
}
