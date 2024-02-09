package com.sehan.movies.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Movie {
    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releseDate;
    private String trailerLink;
    private String poster;
    private List<String> genress;
    private List<String> backDrops;

    @DocumentReference
    private List<Review> reviewIds;
}
