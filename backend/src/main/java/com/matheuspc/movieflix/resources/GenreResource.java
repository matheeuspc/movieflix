package com.matheuspc.movieflix.resources;

import com.matheuspc.movieflix.dto.GenreDTO;
import com.matheuspc.movieflix.services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
@RequestMapping(value = "/genres")
public class GenreResource {

    @Autowired
    private GenreService genreService;

    @GetMapping
    public ResponseEntity<List<GenreDTO>> findAll(){
        List<GenreDTO> list = genreService.findAll();
        return ResponseEntity.ok().body(list);
    }

}
