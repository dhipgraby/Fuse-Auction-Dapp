import styles from "../styles/Home.module.css";
import GLDToken from "../components/interfaces/GLDToken"

export default function Token() {
    return (
        <div>            
            <main className={styles.main}>
                <GLDToken />
            </main>
        </div>
    );
}
