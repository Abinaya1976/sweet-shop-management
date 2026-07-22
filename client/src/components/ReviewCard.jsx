import RatingStars from "./RatingStars";
import "../styles/review.css";

function ReviewCard({ review }) {

    return (

        <div className="review-card">

            <div className="review-header">

                <h3>{review.customer}</h3>

                <RatingStars rating={review.rating} />

            </div>

            <p className="review-comment">

                {review.comment}

            </p>

            <small>

                {review.date}

            </small>

        </div>

    );

}

export default ReviewCard;