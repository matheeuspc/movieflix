package com.matheuspc.movieflix.services;

import com.matheuspc.movieflix.dto.GenreDTO;
import com.matheuspc.movieflix.entities.Genre;
import com.matheuspc.movieflix.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Transactional(readOnly = true)
    public List<GenreDTO> findAll(){
        List<Genre> list = genreRepository.findAll();
        return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
    }

}

