import styles from "../../Developer.module.scss";

interface IProps {
  name: string;
}

const Developer = ({ name }: IProps) => {
  //console.log("Hello from server");

  return <p className={styles.developer}>{name}</p>;
};

export default Developer;
