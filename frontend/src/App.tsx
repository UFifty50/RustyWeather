import styles from './App.module.scss';
import { WeatherState, WeatherDetails } from './components/weather-details/weather-details';
import { InputGroup } from '@blueprintjs/core';

let cloudCoverVar = ['sun', 'mostSun', 'slightSun', 'mostCloud', 'slightCloud', 'cloud', 'rain', 'heavyRain', 'rainSun'];

function App() {
    let coverage: WeatherState = cloudCoverVar[~~(Math.random() * cloudCoverVar.length)];
    return (
        <div className={styles.App}>
            <InputGroup placeholder="What is the cloudCover? (sun, mostSun, slightSun, mostCloud, slightCloud, cloud, rain, heavyRain, rainSun)" />
            <WeatherDetails
                cloudCover={coverage}
                feelsLikeTemp={20}
                highTemp={22}
                lowTemp={12}
                temperature={19}
                updateTime="7:33 PM"
            />
        </div>
    );
}
export default App;
