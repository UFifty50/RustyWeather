import { createBoard } from '@wixc3/react-board';
import { WeatherDetails } from '../../../components/weather-details/weather-details';

export default createBoard({
    name: 'WeatherDetails',
    Board: () => (
        <WeatherDetails
            cloudCover="rainSun"
            feelsLikeTemp={20}
            highTemp={22}
            lowTemp={12}
            temperature={19}
            updateTime="7:33 PM"
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 408,
        canvasHeight: 238,
        windowWidth: 561,
        windowHeight: 561,
    },
});
