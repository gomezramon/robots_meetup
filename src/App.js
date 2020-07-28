import React from "react";
import "./styles.css";
import Card from "./Card";
import robots from "./robots.json";

export default function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        <img
          src="https://wildcodeschool.com/wp-content/uploads//2019/01/logo_pink_176x60.png"
          alt="WCS"
        />{" "}
        User list
      </h1>

      <div class="container-fluid">
        <div class="row" />
        {robots.map(cadaRobot => (
          <Card
            name={cadaRobot.first_name}
            surname={cadaRobot.last_name}
            mail={cadaRobot.email}
            image={cadaRobot.avatar}
          />
        ))}
      </div>
    </div>
  );
}
