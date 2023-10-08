import Link from "next/link";
import Image from "next/image";
import NextLogo from "../../../public/assets/images/logo.png";
import ROUTES, { HOME } from "../../../constants/routes";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <header className={styles.navbar}>
    <nav className={styles.body}>
      <Link href={HOME}>
        <Image src={NextLogo.src} alt="next logo" width={100} height={21} />
      </Link>

      <ul className={styles.body__links}>
        {ROUTES.map(({ id, name, href }) => (
          <li key={id}>
            <Link href={href} className="nextLink">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
