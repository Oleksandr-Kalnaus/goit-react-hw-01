import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  // функція для перетворення першої літери у велику, взято з просторів інтернету,
  // виклик capitalizeFirstLetter(передаємо рядок який треба відформатувати).
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tabletHead}>
        <tr>
          <th className={styles.tabletItem}>Type</th>
          <th className={styles.tabletItem}>Amount</th>
          <th className={styles.tabletItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr className={styles.tabletRow} key={transaction.id}>
            <td className={styles.tabletItem}>
              {capitalizeFirstLetter(transaction.type)}
            </td>
            <td className={styles.tabletItem}>{transaction.amount}</td>
            <td className={styles.tabletItem}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
