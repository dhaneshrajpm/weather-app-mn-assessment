import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Speedometer from '../../components/Speedometer/Speedometer';
import BarChart from '../../components/BarChart/BarChart';
import { doGet } from '../../service/http';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logged } = useSelector(state => state.user);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    if (!logged) {
      return navigate('/login')
    }
    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_APIKEY;
        const city = 'Chennai';
        const countryCode = 'IN';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;

        const response = await doGet(apiUrl)
        setWeatherData(response);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [logged, navigate, dispatch]);

  return (
    <div className={styles.container}>
      {weatherData &&
        <>
          <BarChart temperature={weatherData.main.temp} />
          <Speedometer humidity={weatherData.main.humidity} />
        </>}
    </div>
  )
}

export default Home