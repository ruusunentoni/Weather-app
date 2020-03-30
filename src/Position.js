import React, { Component } from "react";
import Weather from "./Weather";

export default class Position extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
      isLoaded: false
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            isLoaded: true
          });
        },
        error => {
          alert(error.message);
        }
      );
    } else {
      alert("Your browser doesn't support geolocation!");
    }
  }

  render() {
    const { lat, lng, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <>
          <h3>Your position is</h3>
          <p>
            Position {lat.toFixed(3)}, {lng.toFixed(3)}
          </p>
          <Weather lat={lat} lng={lng} />
        </>
      );
    } else {
      return <p>Loadig...</p>;
    }
  }
}
