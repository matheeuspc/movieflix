# movieflix
Project created for final task - bootcamp devSuperior

## Overview
This project was developed as a lesson from bootcamp DevSuperior. The goal of this project was to develop a movie management system.

## Conceptual Model
![](https://github.com/matheeuspc/projectImages/blob/main/conceptual_model_movieflix.png?raw=true)
## Endpoints Available
  * Login credentials
  ```java
  [POST] /oauth/token
  ```
  * Get all movies (paged)
  ```java
  [GET] /movies
  ```
  * Get movie by id
  ```java
  [GET] /movies/{id}
  ```
  * Get all genres
  ```java
  [GET] /genres
  ```
  * Create a review
  ```java
  [POST] /reviews
  ```
  
  ### Payload to create and update a client
  ```json
  {
    "text": "Great movie!",
    "movieId": 5
}
  ```
