import React, { useState } from "react";
import FetchAPI from "./Components/FetchApi";
import { Params, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function openform() {
  document.querySelector(".form").classList.add("active");
}
function createMovieDetail(props) {
  return (
    <div className="details">
      <div className="header">
        <div className="partone">
          <p className="moviename">
            {props?.name} &nbsp;
            <FontAwesomeIcon icon={faStar} className="star" />
            &nbsp;{props?.rating?.average || "N/A"}
          </p>
          <span className="language">
            <b>Language:</b> {props?.language}
          </span>
          <span className="date">
            <b>Premiered:</b> {props?.premiered}
          </span>
          <p className="genres">
            <b>Genres:</b> {props?.genres?.toString()}
          </p>
          <div className="summary">
            <b>Summary:</b>{" "}
            {props?.summary
              ?.replace("<p>", "")
              .replace("<b>", "")
              .replace("</b>", "")
              .replace("</p>", "")}
          </div>
          <div className="buttons">
            <a href="/" className="back">
              Back
            </a>
            <button className="book" onClick={openform}>
              Book
            </button>
          </div>
        </div>
        <img
          src={props?.image?.original}
          className="mainimage"
          alt="img"
          width="25%"
        />
      </div>
      <div className="form">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Movie Name
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              value={props?.name}
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Date
            </label>
            <input type="date" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Show
            </label>
            <select id="inputState" class="form-select">
              <option selected>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Book() {
  const [book, bookmovie] = useState({});

  const params = useParams();
  const url = `https://api.tvmaze.com/shows/${params.bookid}`;
  React.useEffect(() => {
    fetch(url).then((response) =>
      response
        .json()
        .then((data) => bookmovie(data))
        .catch((err) => console.log(err))
    );
  }, [params]);
  return (
    <div>
      <div className="contentofeach">
        <div className="detail">{createMovieDetail(book)}</div>
      </div>
    </div>
  );
}
export default Book;
