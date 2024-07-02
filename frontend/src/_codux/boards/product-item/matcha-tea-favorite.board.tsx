import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';

const itemPhoto =
    'https://static.wixstatic.com/media/610b66_7acd9e84def64d8a92ee67e74c21f908~mv2.png'; // matcha-tea.png (480x585)

export default createBoard({
    name: 'Matcha Tea  - Favorite',
    Board: () => (
        <ProductItem
            isFavorite={true}
            itemName="Matcha Tea"
            itemPhotoURL={itemPhoto}
            itemPrice={9.99}
            itemDescription="240 calories, 32g sugar, 7g fat."
        />
    ),
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    },
    isSnippet: true,
});
