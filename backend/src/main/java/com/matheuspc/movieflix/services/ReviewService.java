package com.matheuspc.movieflix.services;

import com.matheuspc.movieflix.dto.ReviewDTO;
import com.matheuspc.movieflix.entities.Review;
import com.matheuspc.movieflix.repositories.MovieRepository;
import com.matheuspc.movieflix.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private AuthService authService;

    public ReviewDTO insert(ReviewDTO dto) {
        Review entity = new Review();
        copyDtoToEntity(dto, entity);
        entity = reviewRepository.save(entity);
        return new ReviewDTO(entity);
    }

    private void copyDtoToEntity(ReviewDTO dto, Review entity) {
        entity.setId(dto.getId());
        entity.setText(dto.getText());
        entity.setUser(authService.authenticated());
        entity.setMovie(movieRepository.getOne(dto.getMovieId()));
    }
}
