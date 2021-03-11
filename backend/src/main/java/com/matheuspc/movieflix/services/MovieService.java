package com.matheuspc.movieflix.services;

import com.matheuspc.movieflix.config.ResourceServerConfig;
import com.matheuspc.movieflix.dto.MovieDTO;
import com.matheuspc.movieflix.entities.Genre;
import com.matheuspc.movieflix.entities.Movie;
import com.matheuspc.movieflix.entities.Review;
import com.matheuspc.movieflix.entities.User;
import com.matheuspc.movieflix.repositories.GenreRepository;
import com.matheuspc.movieflix.repositories.MovieRepository;
import com.matheuspc.movieflix.services.exceptions.ResourceNotFoundException;
import org.checkerframework.checker.nullness.Opt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id) {
        Optional<Movie> obj = movieRepository.findById(id);
        Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        return new MovieDTO(entity, entity.getReviews());
    }

    @Transactional
    public Page<MovieDTO> findAllPaged(Long genreId, PageRequest pageRequest) {
        Genre entity = null;
        if(genreId != null){
            Optional<Genre> obj = genreRepository.findById(genreId);
            entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        }
        Page<Movie> page = movieRepository.find(entity, pageRequest);

        return page.map(x -> new MovieDTO(x, x.getReviews()));
    }
}
