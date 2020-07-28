import React from "react";

const Card = props => {
  return (
    <div>
      <div class="col-md-3 col-sm-6">
        <figure class="card " data-name="Valerie Polley">
          <img src={props.image} class="card-img-top" alt="Derrek Gaskin" />

          <div class="card-body">
            <h2 class="card-title">
              {props.name} {props.surname}
            </h2>

            <address class="card-text">{props.mail}</address>
          </div>
          <button class="btn btn-primary">
            Greeting{" "}
            <span aria-label="greeting" role="img">
              {" "}
              ✋{" "}
            </span>
          </button>
        </figure>
      </div>
    </div>
  );
};

export default Card;
