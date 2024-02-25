import css from "./TransactionHistory.module.css"; // Додайте цей імпорт

export const TransactionHistory = ({ items }) => {
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
        {items.map((item) => (
          <tr className={css.tr} key={items.id}>
            <td className={css.td}>{items.type}</td>
            <td className={css.td}>{items.amount}</td>
            <td className={css.td}>{items.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
