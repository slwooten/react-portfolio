import React from 'react';

export default function Portfolio() {
  return (
    <div class='d-flex flex-column justify-content-center align-items-center m-3'>
      <h1 class='m-3'>Portfolio</h1>
      <div class='d-flex flex-row flex-wrap justify-content-center col-sm-9'>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='imgs/Moovie.png' alt='test'></img>
            <h3>Moovie Reviews</h3>
            <p><a href='https://slwooten.github.io/moovie-reviews/'>Live Preview ></a></p>
            <p><a href='https://github.com/slwooten/moovie-reviews'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='imgs/Sportify.png' alt='test'></img>
            <h3>Sportify</h3>
            <p><a href='https://calm-shelf-72649.herokuapp.com/login'>Live Preview ></a></p>
            <p><a href='https://github.com/JanInquisitor/Sportify'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='imgs/weatherdashboard.png' alt='test'></img>
            <h3>Weather Dashboard</h3>
            <p><a href='https://slwooten.github.io/live-weather-dashboard/'>Live Preview ></a></p>
            <p><a href='https://github.com/slwooten/live-weather-dashboard'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='imgs/daytimePlanner.png' alt='test'></img>
            <h3>Daytime Planner</h3>
            <p><a href='https://slwooten.github.io/daytime-planner/'>Live Preview ></a></p>
            <p><a href='https://github.com/slwooten/daytime-planner'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='imgs/passwordGen.png' alt='test'></img>
            <h3>Project Name</h3>
            <p><a href='https://slwooten.github.io/password-generator-free/'>Live Preview ></a></p>
            <p><a href='https://github.com/slwooten/password-generator-free'>GitHub Repo ></a></p>
          </div>
        </div>
        <div class='m-3 card'>
          <div class='card-body text-center m-3'>
            <img class='mb-3' src='imgs/eccomerceBackend.png' alt='test'></img>
            <h3>E-Commerce Backend</h3>
            <p><a href='https://github.com/slwooten/e-commerce-backend'>Live Preview ></a></p>
            <p><a href='https://github.com/slwooten/e-commerce-backend'>GitHub Repo ></a></p>
          </div>
        </div>
        


      </div>
    </div>
  );
}
