import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
	const router = useRouter();
	const currentPath = router.asPath;

	const handleClick = (e, path) => {
		if (path === currentPath) {
			e.preventDefault();
		}
	};

	return (
		<nav className={styles.navbar}>
			<a className={"/nftview" === currentPath ? `${styles.activeNav}` : ""}
				href="/nftview"
				onClick={(e) => handleClick(e, "/nftview")}>NFT Contract</a>

			<a className={"/token" === currentPath ? `${styles.activeNav}` : ""}
				href="/token"
				onClick={(e) => handleClick(e, "/token")}>ERC20 Contract</a>

			<a className={"/auction" === currentPath ? `${styles.activeNav}` : ""}
				href="/auction"
				onClick={(e) => handleClick(e, "/auction")}>AUCTION</a>
			<div>
				<ConnectButton></ConnectButton>
			</div>
		</nav >
	);
}
