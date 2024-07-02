import { createBoard } from '@wixc3/react-board';
import { WeatherDetails } from '../../../components/weather-details/weather-details';

export default createBoard({
    name: 'WeatherDetails',
    Board: () => <WeatherDetails cloudCover="sun" feelsLikeTemp={13} highTemp={17} lowTemp={9} temperature={12} />,
    isSnippet: true,
});
