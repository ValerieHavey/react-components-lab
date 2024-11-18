import WeatherData from "./WeatherData";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <WeatherIcon img={props.img} imgAlt={props.imgAlt}/>
      <WeatherData conditions={props.conditions} time={props.time} />
    </div>
  );
}
