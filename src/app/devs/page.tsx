import Developer from "./components/Developer";
import DEVELOPERS from "./devs.data";
import styles from "./Developer.module.scss";

const Devs = () => (
  <div className={`${styles.devs} page`}>
    <h1 className={styles.devs__title}>Developer List</h1>

    <div className={styles.devs__list}>
      {DEVELOPERS.map(({ id, name }) => (
        <Developer key={id} name={name} />
      ))}
    </div>
  </div>
);

export default Devs;
