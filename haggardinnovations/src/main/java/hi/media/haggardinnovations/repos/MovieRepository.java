package hi.media.haggardinnovations.repos;

import hi.media.haggardinnovations.model.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface MovieRepository extends CrudRepository<Movie,Long> {

}
