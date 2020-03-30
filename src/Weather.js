import React, { Component } from "react";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "1ed941b01634038f7c6187eb61aca024";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0,
      wind_speed: 0,
      wind_direction: 0,
      description: "",
      icon: ""
    };
  }

  componentDidMount() {
    const url =
      apiUrl +
      "lat=" +
      this.props.lat +
      "&lon=" +
      this.props.lng +
      "&units=metric" +
      "&appid=" +
      apiKey;

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            temp: result.main.temp,
            wind_speed: result.wind.speed,
            wind_direction: result.wind.deg,
            description: result.weather[0].description,
            icon: result.weather[0].icon
          });
        },
        error => {
          alert(error);
        }
      );
  }

  render() {
    const { temp, wind_speed, wind_direction, description, icon } = this.state;
    const icon_url = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    return (
      <div>
        <h3>Weather at your location</h3>
        <p>{temp} C&#176;</p>
        <p>
          {wind_speed} m/s {wind_direction} degrees
        </p>
        <p>{description}</p>
        <img src={icon_url} />
      </div>
    );
  }
}
