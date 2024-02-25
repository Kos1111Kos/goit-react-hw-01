import css from "./Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardCont}>
        <img className={css.cardImg} src={avatar} width={260} alt="" />
        <p className={css.cardName}>{username}</p>
        <p className={css.cardTag}>{tag}</p>
        <p className={css.cardLocation}>{location}</p>
      </div>
      {/* об'єкт з інформацією про активності */}
      <ul className={css.cardItems}>
        <li className={css.cardList}>
          Followers: <span className={css.cardListText}>{stats.followers}</span>
        </li>
        <li className={css.cardList}>
          Views: <span className={css.cardListText}>{stats.views}</span>
        </li>
        <li className={css.cardList}>
          Likes: <span className={css.cardListText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
