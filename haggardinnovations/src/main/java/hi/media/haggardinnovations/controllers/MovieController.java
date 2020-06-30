package hi.media.haggardinnovations.controllers;

import hi.media.haggardinnovations.model.Movie;
import hi.media.haggardinnovations.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MovieController {

    @Autowired
    MovieService movieService;

    @RequestMapping(method = RequestMethod.POST,value = "/movies")
    public void addMovie(@RequestBody Movie movie){
        movieService.addMovie(movie);
    }

    @RequestMapping(method = RequestMethod.GET  ,value = "/movies")
    public List<Movie> getAllMovies(){
       return movieService.getAllMovies();
    }

    @RequestMapping(method = RequestMethod.GET  ,value = "/movies/{id}")
    public Optional<Movie> getMovieById(@PathVariable Long id){
        return movieService.getMovieById(id);
    }
    @RequestMapping(method = RequestMethod.POST,value = "/movies/{id}")
    public void updateMovieById(@PathVariable Long id,@RequestBody Movie movie){
        movieService.updateMovieById(id,movie);
    }
    @RequestMapping(method = RequestMethod.DELETE,value = "/movies/{id}")
    public void deleteMovieById(@PathVariable Long id) {
        movieService.deleteMovieById(id);
    }
}
