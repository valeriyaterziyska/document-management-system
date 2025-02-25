import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <>
            <ul className={styles.navigation}>
                <li><Link to="/">All files</Link></li>
                <li><Link to="/add-file">Add file</Link></li>
                
            </ul>
        </>
    );
}