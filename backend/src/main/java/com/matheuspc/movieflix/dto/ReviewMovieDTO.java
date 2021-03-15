package com.matheuspc.movieflix.dto;

import com.matheuspc.movieflix.entities.Review;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Objects;

public class ReviewMovieDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Campo requerido")
    private String text;

    private UserReviewDTO user;

    public ReviewMovieDTO() {
    }

    public ReviewMovieDTO(Long id, String text) {
        this.id = id;
        this.text = text;
    }

    public ReviewMovieDTO(Review entity) {
        id = entity.getId();
        text = entity.getText();
        user = new UserReviewDTO(entity.getUser());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public UserReviewDTO getUser() {
        return user;
    }

    public void setUser(UserReviewDTO user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ReviewMovieDTO reviewDTO = (ReviewMovieDTO) o;
        return id.equals(reviewDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
