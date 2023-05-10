import styles from "../styles/Home.module.css";
import AuctionComponents from "../components/AuctionComponents"

export default function auction() {
    return (
        <div>
            <main className={styles.main}>
                <AuctionComponents />
            </main>
        </div>
    );
}
