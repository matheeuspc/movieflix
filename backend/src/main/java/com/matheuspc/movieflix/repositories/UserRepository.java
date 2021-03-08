package com.matheuspc.movieflix.repositories;

import com.matheuspc.movieflix.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
