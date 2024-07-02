import { createBoard } from '@wixc3/react-board';
import { GiftCard } from '../../../components/gift-card/gift-card';
import styles from './gift-card.board.module.scss';

export default createBoard({
    name: 'Gift Card',
    Board: () => (
        <div className={styles.grid2col}>
            <GiftCard />
            <GiftCard full />
        </div>
    ),
    environmentProps: {
        windowHeight: 700,
        canvasHeight: 600,
    },
    isSnippet: true,
});
