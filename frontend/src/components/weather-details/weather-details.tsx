import classNames from 'classnames';
import styles from './weather-details.module.scss';
import SunnySvg from '../../assets/sunny.svg';

export interface WeatherDetailProps {
    className?: string;
    cloudCover:
        | 'sun'
        | 'mostSun'
        | 'slightSun'
        | 'mostCloud'
        | 'slightCloud'
        | 'cloud'
        | 'rain'
        | 'heavyRain'
        | 'rainSun';
    temperature: number;
    feelsLikeTemp: number;
    highTemp: number;
    lowTemp: number;
    updateTime: string;
    children?: React.ReactNode;
}

export const WeatherDetails = ({
    className,
    cloudCover,
    temperature,
    feelsLikeTemp,
    highTemp,
    lowTemp,
    updateTime,
    children,
}: WeatherDetailProps) => {
    let tempFormat = 'C';
    let cloudCondition: string = 'Invalid cloud condition';
    switch (cloudCover) {
        case 'sun':
            cloudCondition = 'Sunny';
            break;
        case 'mostSun':
            cloudCondition = 'Mostly Sunny';
            break;
        case 'slightSun':
            cloudCondition = 'Slight Sun';
            break;
        case 'slightCloud':
            cloudCondition = 'Slight Cloud';
            break;
        case 'mostCloud':
            cloudCondition = 'Mostly Cloudy';
            break;
        case 'cloud':
            cloudCondition = 'Cloudy';
            break;
        case 'rain':
            cloudCondition = 'Rain';
        case 'heavyRain':
            break;
            cloudCondition = 'Heavy Rain';
        case 'rainSun':
            cloudCondition = 'Sunshine and Showers';
            break;
        default:
            console.error('Invalid cloud coverage name passed to <Weather Details />.');
    }

    return (
        <div className={styles.root}>
            <div className={styles.detailGrid}>
                <div className={styles.temp}>
                    <p className={classNames(styles.temp, styles.textL)}>{temperature}°</p>
                    <p className={classNames(styles.tempFormat, styles.textM)}>{tempFormat}</p>
                </div>
                <div className={styles.cloudCoverImage}>
                    <img src={SunnySvg} />
                </div>
                <div className={styles.feelsLike}>
                    <div className={styles.feelsLikeInner}>
                        <p className={styles.textS}>Feels like {feelsLikeTemp}°</p>
                        <p className={classNames(styles.tempFormat, styles.textXS)}>{tempFormat}</p>
                    </div>
                </div>
                <div className={styles.cloudCoverText}>
                    <p className={styles.textS}>{cloudCondition}</p>
                </div>
                <div className={classNames(styles.highLowTemp, styles['colour-Lgrey'])}>
                    <p className={styles.textS}>
                        high {highTemp} | low {lowTemp}
                    </p>
                </div>
                <div className={styles.updateTime}>
                    <p className={classNames(styles['colour-Lgrey'], styles.textM)}>{updateTime}</p>
                </div>
            </div>
        </div>
    );
};
