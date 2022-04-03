import { Link } from "react-router-dom";

const ProductShowCaseCard = ({ showCaseProducts }) => {
  return (
    <>
      {showCaseProducts.map((item) => {
        return (
          <Link 
            to="/productspage"
            className="card-body-md card-horizontal-md home-product-card"
            key={item._id}
          >
            <div className="card-img flex-align-centre ">
              <img
                src={item.imgsource}
                alt="demoProducts"
                className="card-md-img horizontal-product-card-img"
              />
            </div>
            <div className="card-content-container flex-col-space-between">
              <div className="card-img-heading">
                <h5>{item.type}</h5>
              </div>
              <div className="card-content">
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProductShowCaseCard ;
