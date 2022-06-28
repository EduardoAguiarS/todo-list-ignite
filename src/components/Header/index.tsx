// CSS Import
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="src/assets/rocket.svg" alt="Todo List Ignite Logo" />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  );
}
