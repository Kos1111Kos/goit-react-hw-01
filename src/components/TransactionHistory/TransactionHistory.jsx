import css from "./TransactionHistory.module.css"; // Додайте цей імпорт

export const TransactionHistory = ({ item }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {item &&
          item.map((item) => (
            <tr className={css.tr} key={item.id}>
              <td className={css.td}>{item.type}</td>
              <td className={css.td}>{item.amount}</td>
              <td className={css.td}>{item.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
