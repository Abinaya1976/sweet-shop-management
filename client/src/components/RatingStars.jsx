import "../styles/rating.css";

function RatingStars({ rating }) {

    return (

        <div className="rating-stars">

            {

                [...Array(5)].map((_, index) => (

                    <span
                        key={index}
                        className={
                            index < rating
                                ? "star filled"
                                : "star"
                        }
                    >

                        ★

                    </span>

                ))

            }

        </div>

    );

}

export default RatingStars;