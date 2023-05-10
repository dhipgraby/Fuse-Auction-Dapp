import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="/nftview">NFT Contract</a>
			<a href="/token">ERC20 Contract</a>
			<a href="/auction">AUCTION</a>
			<div>
				<ConnectButton></ConnectButton>
			</div>
		</nav>
	);
}
