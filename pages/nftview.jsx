import styles from "../styles/Home.module.css";
import NFTInterface from "../components/interfaces/NFTInterface";

export default function Nftview() {
    return (
        <div>
            <main className={styles.main}>
                <NFTInterface />
            </main>
        </div>
    );
}
