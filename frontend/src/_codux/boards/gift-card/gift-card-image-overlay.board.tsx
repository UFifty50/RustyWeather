import { createBoard } from '@wixc3/react-board';
import { GiftCard } from '../../../components/gift-card/gift-card';
import styles from './gift-card.board.module.scss';

const photoURL =
    'https://static.wixstatic.com/media/610b66_ac572d0e99e04e978c595228295947eb~mv2.jpg'; //img-2.jpg (800x703)

export default createBoard({
    name: 'Gift Card - Image Overlay',
    Board: () => (
        <div className={styles.grid2col}>
            <GiftCard photoURL={photoURL} />
            <GiftCard photoURL={photoURL} full />
        </div>
    ),
    environmentProps: {
        windowHeight: 700,
        canvasHeight: 600,
    },
    isSnippet: true,
});
