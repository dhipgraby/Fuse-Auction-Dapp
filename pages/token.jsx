import styles from "../styles/Home.module.css";
import TokenInterface from "../components/interfaces/TokenInterface"

export default function Token() {
    return (
        <div>            
            <main className={styles.main}>
                <TokenInterface />
            </main>
        </div>
    );
}
