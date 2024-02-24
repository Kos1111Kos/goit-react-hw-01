import css from "./ProfileStyle.module.css";

const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardCont}>
        <img className={css.cardImg} src={image} width={260} alt="" />
        <p className={css.cardName}>{name}</p>
        <p className={css.cardTag}>{tag}</p>
        <p className={css.cardLocation}>{location}</p>
      </div>
      {/* об'єкт з інформацією про активності */}
      <ul className={css.cardItems}>
        <li className={css.cardList}>
          Followers: <span className={css.cardListText}>{stats.followers}</span>
        </li>
        <li className={css.cardList}>
          Views: <span className={css.cardListText}>{stats.followers}</span>
        </li>
        <li className={css.cardList}>
          Likes: <span className={css.cardListText}>{stats.followers}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
