import "../styles/globals.css";
import "../styles/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import { mainnet, polygon, goerli, polygonMumbai, hardhat } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";

// Create a custom provider for Ganache
const ganache = {
	id: 1337,
	name: "Ganache",
	network: "Ganache",
	nativeCurrency: {
	  decimals: 18,
	  name: "Ether",
	  symbol: "ETH",
	},
	rpcUrls: {
	  default: {
		http: ["http://127.0.0.1:8545"],
	  },
	  public: {
		http: ["http://127.0.0.1:8545"],
	  },
	},
  };

const { chains, provider } = configureChains(
	[
		mainnet,
		goerli,
		polygon,
		polygonMumbai,
		hardhat,
		ganache
	],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: "Fuse Auction",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
	hardhat,
	ganache,
});

export { WagmiConfig, RainbowKitProvider };

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const account = useAccount({
		onConnect({ address, connector, isReconnected }) {
			if (!isReconnected) router.reload();
		},
	});
	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider
				modalSize="compact"
				initialChain={process.env.NEXT_PUBLIC_DEFAULT_CHAIN}
				chains={chains}
			>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
