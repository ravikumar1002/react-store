import { Link } from "react-router-dom";

const heroItem = [
    {
        id: "heroimg1",
        imgsource:
            "https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        imgAlt: "hero-img",
    },
];

const HeroSection = () => {
    return (
        <div className="home-main-img-container">
            {heroItem.map((item) => {
                return (
                    <div className="home-main-img" key={item.id}>
                        <Link to="/productspage">
                            <img
                                src={item.imgsource}
                                alt={item.imgAlt}
                            />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default HeroSection;
