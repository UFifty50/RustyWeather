import { GiftCard } from './components/gift-card/gift-card';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <GiftCard />
            <GiftCard full />
        </div>
    );
}
export default App;
