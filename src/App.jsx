import "./App.css";
import ProductCard from "./components/ProductCard";

const productDAta = [
  {
    id: "1_product",
    productName: "jeep black",
    price: 100,
    hasDiscount: true,
    description: "ffppksfmkkk",
    img: "https://img.glavnoe.in.ua/uploads/2024/02/02082201/7594ce72-eed721d62acaf70de036fae71fbe88d2.jpg",
  },
  {
    id: "2_product",
    productName: "jeep green",
    price: 200,
    hasDiscount: false,
    description: "ffmkkk",
    img: "https://img.glavnoe.in.ua/uploads/2024/02/02082201/7594ce72-eed721d62acaf70de036fae71fbe88d2.jpg",
  },
  {
    id: "3_product",
    productName: "jeep yelow",
    price: 300,
    hasDiscount: false,
    description: "ffffffffffff",
    img: "https://img.glavnoe.in.ua/uploads/2024/02/02082201/7594ce72-eed721d62acaf70de036fae71fbe88d2.jpg",
  },
];

function App() {
  return (
    <div>
      {productDAta.map((item) => {
        return (
          <ProductCard
            key={item.id}
            productName={item.productName}
            price={item.price}
            hasDiscount={item.hasDiscount}
            description={item.description}
            img={item.img}
          />
        );
      })}
      {/* <ProductCard
        productName="jeep black"
        price={100}
        hasDiscount={true}
        description="ffppksfmkkk"
        img="https://img.glavnoe.in.ua/uploads/2024/02/02082201/7594ce72-eed721d62acaf70de036fae71fbe88d2.jpg"
      /> */}
    </div>
  );
}

export default App;
