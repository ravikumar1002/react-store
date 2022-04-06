import { Link } from "react-router-dom"
import { productsDataContext } from "../../context/products-context/products-data"
import { useContext } from "react";
const OverlayCard = ({ overlayCardData }) => {

    const { filteredApplyItemState, filteredApplyItemDispatch } = useContext(productsDataContext);

    return (
        <div className="home-overlay-card-grid home-overlay-card">
            {overlayCardData.map((item) => {
                return (
                    <div className="image-card-container card-overlay-container image-card" key={item._id} >
                        <Link to="/productspage"
                            onClick={
                                (e) => {
                                    const selectedItems = [...filteredApplyItemState.activeCategory, item.categoryName.toLowerCase()]
                                    filteredApplyItemDispatch({
                                        type: "CATEGORY",
                                        payload: {
                                            category: selectedItems,
                                        },
                                    });
                                }
                            }>
                            <div className="image-card-container">
                                <img src={item.imgsources} className="image-card" />
                            </div>
                            <div className="card-overlay-content overlay-card-box">
                                <p className="fs-lg overlay-msg">{item.categoryName}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default OverlayCard 