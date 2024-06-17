import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import api from "../../api/axiosConfig";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const [reviewText, setReviewText] = useState("");
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [movieId, getMovieData]);

  const addReview = async (reviewText) => {
    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: reviewText,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: reviewText }];
      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt={movie?.title} />
        </Col>
        <Col>
          <ReviewForm
            handleSubmit={addReview}
            labelText="Write a Review?"
            defaultValue={reviewText}
          />
          <hr />
          {reviews?.map((r, index) => (
            <div key={index}>
              <Row>
                <Col>{r.body}</Col>
              </Row>
              <hr />
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
