import styles from './App.module.scss';
import { WeatherDetails } from './components/weather-details/weather-details';

function App() {
    return (
        <div className={styles.App}>
            <WeatherDetails
                cloudCover="sun"
                feelsLikeTemp={13}
                highTemp={17}
                lowTemp={9}
                temperature={12}
            />
        </div>
    );
}
export default App;
