import styles from "../styles/Home.module.css";
import NFTContract from "../components/interfaces/NFTContract";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
      <h1>Welcome to Fuse Auction</h1>
      <p>
        NFT Auction! Bid and buy nfts at best price
      </p>
      </main>
    </div>
  );
}
