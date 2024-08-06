import styles from './App.module.scss';
import { WeatherState, WeatherDetails } from './components/weather-details/weather-details';
import { SubdetailBar } from './components/subdetail-bar/subdetail-bar';
import { InputGroup } from '@blueprintjs/core';
import Classnames from 'classnames';
import { SunTime } from './components/sun-time/sun-time';

let cloudCoverVar = ['sun', 'slightCloud', 'cloud', 'rain', 'heavyRain', 'rainSun'];

function App() {
    let coverage: WeatherState = cloudCoverVar[~~(Math.random() * cloudCoverVar.length)];
    return (
        <div className={Classnames(styles.App, styles.div2)}>
            <div className={styles.div7}>
                <div className={styles.div4}>
                    <div className={styles.div3} />
                </div>
                <div className={styles.div1}>
                    <div>
                        <InputGroup placeholder="What is the cloudCover? (sun, mostSun, slightSun, mostCloud, slightCloud, cloud, rain, heavyRain, rainSun)" />
                    </div>
                    <div className={styles.div6}>
                        <WeatherDetails
                            cloudCover={coverage}
                            feelsLikeTemp={20}
                            highTemp={22}
                            lowTemp={12}
                            temperature={19}
                            updateTime="7:33 PM"
                            className={Classnames(styles.weatherDetails, styles.weatherDetails1)}
                        />
                    </div>
                    <div className={styles.div5}>
                        <SubdetailBar
                            windSpeed={12}
                            windSpeedType={'mi/h'}
                            humidity={93}
                            pollution={16}
                            className={styles.subdetailBar}
                        />
                    </div>
                    <div className={styles.div8}>
                        <SunTime riseTime={20000000} setTime={120013063} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
