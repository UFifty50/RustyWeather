import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1138,
        canvasHeight: 747,
        windowWidth: 575,
        windowHeight: 606,
    },
});
