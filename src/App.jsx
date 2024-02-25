import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";

function App() {
  return (
    <>
      <div>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>

      <FriendList friends={friends} />
    </>
  );
}

export default App;
