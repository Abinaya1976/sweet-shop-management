import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-banner.jpg";
import "../styles/hero.css";

function Hero() {

    const navigate = useNavigate();

    return (

        <section className="hero">

            <div className="hero-left">

                <h1>

                    Welcome to
                    <span> Sweetie Pies</span>

                </h1>

                <p>

                    Experience the authentic taste of traditional Indian sweets,
                    freshly prepared every day with premium ingredients and
                    delivered with our Smart Branch Allocation System.

                </p>

                <div className="hero-buttons">

                    <button
                        className="shop-btn"
                        onClick={() => navigate("/home")}
                    >
                        Shop Now
                    </button>

                    <button
                        className="about-btn"
                        onClick={() => navigate("/about")}
                    >
                        Learn More
                    </button>

                </div>

            </div>

            <div className="hero-right">

                <img
                    src={heroImage}
                    alt="Sweet Collection"
                />

            </div>

        </section>

    );

}

export default Hero;