import "./home.css";
import "../../css/main.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import demoProduct from "../../backend/db/demo-data";
import OverlayCard from "./overlaycard";
import HeroSection from "./hero-section";
import ProductShowCaseCard from "./showcase-products";
import { getCategory } from "../../api-request/getCategory";
import { useDocumentTitle } from "../../hooks/document-title";

const Home = () => {
     const [categorySecion, setCategorySection] = useState([])
     const getAllCategory = async() => {
         const typeOfCategory =  await getCategory()
          setCategorySection(typeOfCategory.categories)
     }
    useEffect(()=> {
        useDocumentTitle("Home")
        getAllCategory()
    },[])
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
