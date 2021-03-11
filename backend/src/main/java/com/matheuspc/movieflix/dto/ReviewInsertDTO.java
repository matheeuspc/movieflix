package com.matheuspc.movieflix.dto;

import com.matheuspc.movieflix.entities.Movie;
import com.matheuspc.movieflix.entities.Review;
import com.matheuspc.movieflix.entities.User;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class ReviewInsertDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    private User user;

    private Movie movie;

    public ReviewInsertDTO(Long id, String text, User user, Movie movie) {
        this.id = id;
        this.text = text;
        this.user = user;
        this.movie = movie;
    }

    public ReviewInsertDTO(Review entity) {
        id = entity.getId();
        text = entity.getText();
        user = entity.getUser();
        movie = entity.getMovie();
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
