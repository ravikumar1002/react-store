import "./home.css";
import "../../css/main.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import demoProduct from "../../backend/db/demo-data";
import OverlayCard from "./overlaycard";
import HeroSection from "./hero-section";
import ProductShowCaseCard from "./showcase-products";
import { getCategory } from "../../api-request/getCategory";
import { useDocumentTitle } from "../../hooks/document-title";
import { useOperations } from "../../hooks/useOperations";
import { useAuth } from "../../context/auth/auth-context";

const Home = () => {
    const { getCartFromApi, getWishlistProductsFromApi } = useOperations()
    const { token } = useAuth()
    const [categorySecion, setCategorySection] = useState([])
    const getAllCategory = async () => {
        const typeOfCategory = await getCategory()
        setCategorySection(typeOfCategory.categories)
    }

    useEffect(() => {
        if (token) {
            getWishlistProductsFromApi(token);
            getCartFromApi(token)
        }
    }, []);


    useEffect(() => {
        useDocumentTitle("Home")
        getAllCategory()
    }, [])

    return (
        <main>
            <OverlayCard overlayCardData={categorySecion} />
            <HeroSection />
            <div className="home-product-card-container">
                <ProductShowCaseCard showCaseProducts={demoProduct} />
            </div>
            <div className="flex-center">
                <button>
                    <Link to="/productspage" className="btn btn-primary btn-md">
                        See More Product
                    </Link>
                </button>
            </div>
            <div className="page-bottom-margin"></div>
        </main>
    );
};

export default Home;
