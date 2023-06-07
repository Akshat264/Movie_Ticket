import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { Card } from "bootstrap-4-react";
function CreateMovieCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="eachcard">
      <Card.Header>Movie Name: {props.show.name}</Card.Header>
      <Card.Image src={props.show.image.original} className="image" />
      <Card.Body>
        <Card.Title>Rating: {props.show.rating.average || "N/A"}</Card.Title>
        <Card.Subtitle mb="2" text="muted">
          {props.show.genres.toString()}
        </Card.Subtitle>
        <Card.Text>
          {props.show.language} | {props.show.type} | {props.show.runtime}min |{" "}
          {props.show.premiered}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={`/book/${props.show.id}`}>Book Now</Card.Link>
        <Card.Link href={props.show.officialSite || props.show.url}>
          Official Site
        </Card.Link>
      </Card.Footer>
    </Card>
  );
}

function FetchAPI() {
  const [records, setrecord] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((response) =>
      response
        .json()
        .then((data) => setrecord(data))
        .catch((err) => console.log(err))
    );
  }, []);
  return (
    <div className="content">
      <div className="cards">{records.map(CreateMovieCard)}</div>
    </div>
  );
}
export default FetchAPI;
