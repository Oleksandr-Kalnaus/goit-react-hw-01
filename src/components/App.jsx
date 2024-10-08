import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json";
import "modern-normalize";

export default function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
