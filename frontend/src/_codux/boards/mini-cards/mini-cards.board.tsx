import { createBoard } from '@wixc3/react-board';
import { MiniCards } from '../../../components/mini-cards/mini-cards';

export default createBoard({
    name: 'Mini Cards',
    Board: () => <MiniCards />,
    environmentProps: {
        canvasWidth: 600,
        windowHeight: 800,
    },
    isSnippet: true,
});
