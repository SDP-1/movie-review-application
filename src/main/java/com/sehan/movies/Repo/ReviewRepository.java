package com.sehan.movies.Repo;

import com.sehan.movies.Entity.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.View;
@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId > {
}
