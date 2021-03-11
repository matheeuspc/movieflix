package com.matheuspc.movieflix.services;

import com.matheuspc.movieflix.dto.ReviewDTO;
import com.matheuspc.movieflix.dto.ReviewInsertDTO;
import com.matheuspc.movieflix.entities.Review;
import com.matheuspc.movieflix.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public ReviewInsertDTO insert(ReviewInsertDTO dto) {
        Review entity = new Review();
        copyDtoToEntity(dto, entity);
        entity = reviewRepository.save(entity);
        return new ReviewInsertDTO(entity);
    }

    private void copyDtoToEntity(ReviewInsertDTO dto, Review entity) {
        entity.setId(dto.getId());
        entity.setText(dto.getText());
        entity.setUser(dto.getUser());
        entity.setMovie(dto.getMovie());
    }
}
