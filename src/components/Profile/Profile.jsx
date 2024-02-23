import "./ProfileStyles.css";
const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className="card">
      <div className="cardCont">
        <img className="cardImg" src={image} width={260} alt="" />
        <p className="cardName">{name}</p>
        <p className="cardTag">{tag}</p>
        <p className="cardLocation">{location}</p>
      </div>
      {/* об'єкт з інформацією про активності */}
      <ul className="cardItems">
        <li className="cardList">
          Followers: <span className="cardListText">{stats.followers}</span>
        </li>
        <li className="cardList">
          Views: <span className="cardListText">{stats.followers}</span>
        </li>
        <li className="cardList">
          Likes: <span className="cardListText">{stats.followers}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
