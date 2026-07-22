import { useState } from "react";
import "../styles/review.css";

function ReviewForm({ onAddReview }) {

    const [rating, setRating] = useState(5);

    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (comment.trim() === "") {

            alert("Please enter your review.");

            return;

        }

        onAddReview({

            customer: "You",

            rating,

            comment,

            date: new Date().toLocaleDateString()

        });

        setRating(5);

        setComment("");

    };

    return (

        <form
            className="review-form"
            onSubmit={handleSubmit}
        >

            <h2>Write a Review</h2>

            <label>

                Rating

            </label>

            <select

                value={rating}

                onChange={(e) => setRating(Number(e.target.value))}

            >

                <option value={5}>★★★★★</option>

                <option value={4}>★★★★☆</option>

                <option value={3}>★★★☆☆</option>

                <option value={2}>★★☆☆☆</option>

                <option value={1}>★☆☆☆☆</option>

            </select>

            <textarea

                placeholder="Share your experience..."

                value={comment}

                onChange={(e) => setComment(e.target.value)}

                rows="5"

            />

            <button type="submit">

                Submit Review

            </button>

        </form>

    );

}

export default ReviewForm;