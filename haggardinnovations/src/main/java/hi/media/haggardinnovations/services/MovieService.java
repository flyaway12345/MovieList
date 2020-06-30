package hi.media.haggardinnovations.services;

import hi.media.haggardinnovations.model.Movie;
import hi.media.haggardinnovations.repos.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;

    public void addMovie( Movie movie){
        movieRepository.save(movie);
    }

    public List<Movie>getAllMovies(){
    List<Movie> listOfMovies = new ArrayList<>();

    movieRepository.findAll().forEach(listOfMovies::add);

    return listOfMovies;
    }

    public Optional<Movie>getMovieById(Long id){
        Optional<Movie> listOfMovies = movieRepository.findById(id);
        if (!listOfMovies.isPresent()) {
            System.out.println("ID NOT FOUND ERROR");
        }
        return listOfMovies;

    }
    public void updateMovieById(Long id, Movie movie){
        Optional<Movie> listOfMovies = movieRepository.findById(id);
        if (!listOfMovies.isPresent()) {
            System.out.println("ID NOT FOUND ERROR");
        }else{
            movieRepository.save(movie);
        }


    }
    public void deleteMovieById(Long id){
        Optional<Movie> listOfMovies = movieRepository.findById(id);
        if (!listOfMovies.isPresent()) {
            System.out.println("ID NOT FOUND ERROR");
        }else{
            movieRepository.deleteById(id);
        }


    }
}
