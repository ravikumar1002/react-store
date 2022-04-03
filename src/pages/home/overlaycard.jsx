import { Link } from "react-router-dom"

const OverlayCard = ({ overlayCardData }) => {

    return (
        <div className="home-overlay-card-grid home-overlay-card">
            {overlayCardData.map((item) => {
                return (
                    <div className="image-card-container card-overlay-container image-card" key={item._id} >
                        <Link to="/ProductsPage">
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