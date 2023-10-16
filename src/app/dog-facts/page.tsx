import styles from "./DogFacts.module.scss";

const DogFacts = async () => {
  const response = await fetch("http://dogapi.dog/api/v2/facts");
  const { data } = await response.json();

  //throw new Error("Error fetching API");

  return (
    <div className={`${styles.dogfacts} page`}>
      <h1>Dog Fact:</h1>

      <p className={styles.dogfacts__fact}>{data[0].attributes.body}</p>
    </div>
  );
};

export default DogFacts;
