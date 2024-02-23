import "./App.css";
import Profile from "./components/Profile/Profile";

const userData = {
  username: "Jacques Gluke",
  tag: "@jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       {productDAta.map((item) => {
//         return (
//           <Profile
//             key={item.id}
//             productName={item.productName}
//             price={item.price}
//             hasDiscount={item.hasDiscount}
//             description={item.description}
//             img={item.img}
//           />
//         );
//       })}
//       {/* <ProductCard
//         productName="jeep black"
//         price={100}
//         hasDiscount={true}
//         description="ffppksfmkkk"
//         img="https://img.glavnoe.in.ua/uploads/2024/02/02082201/7594ce72-eed721d62acaf70de036fae71fbe88d2.jpg"
//       /> */}
//     </div>
//   );
// }

export default App;
