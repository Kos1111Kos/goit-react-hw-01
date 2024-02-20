const ProductCard = ({
  img,
  productName,
  price,
  description,
  hasDiscount = false,
}) => {
  return (
    <div>
      <img width={260} src={img} alt="" />
      <h3>
        {productName}
        {hasDiscount ? <span>🏴‍☠️🌤 SALEEEE</span> : null}
        {/* {hasDiscount && <span>🏴‍☠️🌤 SALEEEE</span>} */}
      </h3>
      <h4>Price: ${price}</h4>
      <p>{description}</p>

      <button type="button">Add to Card</button>
      <button type="button">😍</button>
    </div>
  );
};

export default ProductCard;
