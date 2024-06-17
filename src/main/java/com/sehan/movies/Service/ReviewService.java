package com.sehan.movies.Service;

import com.sehan.movies.Entity.Movie;
import com.sehan.movies.Entity.Review;
import com.sehan.movies.Repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }

    public List<Review> getReviewsByImdbId(String imdbId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("imdbId").is(imdbId));
        List<Movie> movies = mongoTemplate.find(query, Movie.class);

        if (movies.isEmpty()) {
            return List.of();
        }

        Movie movie = movies.get(0);
        return movie.getReviewIds();
    }

}
