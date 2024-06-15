package com.sehan.movies.Controller;

import com.sehan.movies.Entity.Movie;
import com.sehan.movies.Service.MovieService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from your React app
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping()
    private ResponseEntity<List<Movie>> getAllMoves() {
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    private ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId) {
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId), HttpStatus.OK);
    }

    @PostMapping("/save")
    private ObjectId addMovie(@RequestBody Movie movie){
        movieService.saveOrUpdateMovie(movie);
        return movie.getId();
    }


}
