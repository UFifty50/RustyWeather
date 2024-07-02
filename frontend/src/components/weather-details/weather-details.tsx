import { Card, H2, H3, Elevation } from '@blueprintjs/core';
import classNames from 'classnames';
import styles from './weather-details.module.scss';

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
    children?: React.ReactNode;
}

const INITIAL_TAGS = ['Seattle', 'London', 'New York'];
export const WeatherDetails = ({
    className,
    cloudCover,
    temperature,
    feelsLikeTemp,
    highTemp,
    lowTemp,
    children,
}: WeatherDetailProps) => {
    let cloudCondition: string;
    switch (cloudCover) {
        case 'sun':
            cloudCondition = 'Sunny';
        case 'mostSun':
            cloudCondition = 'Mostly Sunny';
        case 'slightSun':
            cloudCondition = 'Slight Sun';
        case 'slightCloud':
            cloudCondition = 'Slight Cloud';
        case 'mostCloud':
            cloudCondition = 'Mostly Cloudy';
        case 'cloud':
            cloudCondition = 'Cloudy';
        case 'rain':
            cloudCondition = 'Rain';
        case 'heavyRain':
            cloudCondition = 'Heavy Rain';
        case 'rainSun':
            cloudCondition = 'Sunshine and Showers';
    }

    return (
        <Card elevation={3}>
            <div>
                <p>{temperature}°C</p>
            </div>
        </Card>
    );
};
