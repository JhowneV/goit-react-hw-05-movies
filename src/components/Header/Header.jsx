// import { Link } from 'react-router-dom';
// import css from './Header.module.css';

// export const Header = () => {
//   return (
//     <header className={css.header}>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/movies">Movies</Link>
//       </nav>
//     </header>
//   );
// };

import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  </header>
);

export default Header;

