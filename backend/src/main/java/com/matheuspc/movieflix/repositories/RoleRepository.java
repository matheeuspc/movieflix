package com.matheuspc.movieflix.repositories;

import com.matheuspc.movieflix.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
