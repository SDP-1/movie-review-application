# Movie Review Application

This repository contains a Movie Review Application developed using Spring Boot and React. It allows users to review movies.

## Features

- **User Authentication**: Secure authentication system for users.
- **Movie Database Integration**: Integration with a movie database API for fetching movie details.
- **Review System**: Allows users to write and submit reviews for movies.

## Technologies Used

- **Spring Boot**: Backend framework for building the application.
- **Java**: Programming language used for backend development.
- **MongoDB**: NoSQL database used to store movie and user data.
- **React**: Frontend library for building user interfaces.
- **Bootstrap**: Frontend framework for designing responsive web pages.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SDP-1/movie-review-application.git

2. **Navigate into the directory**:
   ```bash
   cd movie-review-application

3. **Set up the database**:
  - Install MongoDB if you haven't already.
  - Ensure MongoDB is running on its default port (27017) or update the configuration in 'application.properties'.

4. **Configure application properties**:
   - Update the 'application.properties' file with your MongoDB settings
   ```bash
    spring.data.mongodb.uri=mongodb://localhost:27017/movieReviewDB

5. **Run the backend application**:
   - Open IntelliJ IDEA and run the 'MoviesApplication' file.

6. **Run the frontend application**:
   - Open VSCode.
   - Navigate to 'movie-review-application/MovieClient/movie-gold-v1'
   ```bash
    cd movie-review-application/MovieClient/movie-gold-v1
  -   Install the dependencies and start the application
      ```bash
        npm install
        npm start

5. **Run the backend application**:
   - Once the backend and frontend applications are running, open your web browser and go to 'http://localhost:3000' to access the Movie Review Application.
      
### Contact
For any inquiries or issues, please contact Your `sehandevinda1@gmail.com`.


## Sample Screenshots

![Screenshot 2024-07-10 094849](https://github.com/SDP-1/movie-review-application/assets/98279413/7a6dfd81-7e3a-4df4-9491-18cfc13f7b8a)

![Screenshot 2024-07-10 095005](https://github.com/SDP-1/movie-review-application/assets/98279413/e5d0f9c8-da7a-418b-82c9-0ba51a49654f)
