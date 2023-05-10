import styles from "../styles/Home.module.css";
import NFTContract from "../components/interfaces/NFTContract";

export default function Nftview() {
    return (
        <div>
            <main className={styles.main}>
                <NFTContract />
            </main>
        </div>
    );
}
