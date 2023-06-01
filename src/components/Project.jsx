import React from 'react';

import quizApp from '../imagesAndFiles/project4.gif';
import workday from '../imagesAndFiles/project5.gif';
import weather from '../imagesAndFiles/project6.png';
import task from '../imagesAndFiles/project7.png';
import finalProject from '../imagesAndFiles/finalProject.png';

export default function Project() {
  return (
    <div className="container pt-5 pb-5 mb-2">
      <div className="row justify-content-evenly my-4">
        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src={quizApp} alt="" className="img-fluid" />
          </div>
          <a
            href="https://fer-117.github.io/quizApp/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center m-1 link-overlay text-decoration-none bg-dark rounded"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Quiz App</p>
            </div>
          </a>
        </div>

        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src={workday} alt="" className="img-fluid" />
          </div>
          <a
            href="https://fer-117.github.io/workDay-Scheduler/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1 "
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Workday Scheduler</p>
            </div>
          </a>
        </div>
      </div>

      <div className="row justify-content-evenly my-4">
        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src={weather} alt="" className="img-fluid" />
          </div>
          <a
            href="https://fer-117.github.io/weatherDashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Weather Dashboard</p>
            </div>
          </a>
        </div>

        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src={task} alt="" className="img-fluid" />
          </div>
          <a
            href="https://fathomless-caverns-42442.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Note-Taker</p>
            </div>
          </a>
        </div>
      </div>

      <div className="row justify-content-evenly my-4">
        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src={finalProject} alt="" className="img-fluid" />
          </div>
          <a
            href="https://whispering-oasis-41573.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Final Project</p>
            </div>
          </a>
        </div>

        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src="../../Assets/" alt="" className="img-fluid" />
          </div>
          <a
            href="https://github.com/your-repository-link"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Project 6</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
