import { createBoard } from '@wixc3/react-board';
import { SunTime } from '../../../components/sun-time/sun-time';

export default createBoard({
    name: 'SunTime',
    Board: () => <SunTime riseTime={Date.now()} setTime={Date.now()} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 462,
        windowHeight: 606,
    },
});
