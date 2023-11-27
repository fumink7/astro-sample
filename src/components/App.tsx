import styles from "../styles/test.module.scss";
import { AppChild } from "./AppChild";
export default () => (
  <>
    <p className={styles.sampleText}>hello react!</p>
    <AppChild />
  </>
);
