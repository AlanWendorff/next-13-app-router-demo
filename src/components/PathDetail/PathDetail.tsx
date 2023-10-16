"use client";
import { usePathname } from "next/navigation";
import styles from "./PathDetail.module.scss";

const PathDetail = () => {
  //console.log("Hello from client");

  const pathname = usePathname();

  return <p className={styles.pathDetail}>src/app{pathname}</p>;
};

export default PathDetail;
