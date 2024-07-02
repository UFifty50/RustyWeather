import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';

const itemPhoto =
    'https://static.wixstatic.com/media/610b66_58b938ac4bc14e5a8c19a65b57d2162a~mv2.png'; // macchiato.png (530x620)

export default createBoard({
    name: 'Esspresso Macchiato',
    Board: () => (
        <ProductItem
            itemDescription="A European-style classic. Rich espresso marked with dollop of steamed milk and foam."
            itemName="Espresso Macchiato"
            itemPhotoURL={itemPhoto}
            itemPrice={9.5}
        />
    ),
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    },
    isSnippet: true,
});
