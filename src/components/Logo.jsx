import LogoDefault from './../images/Userpic.png'
import styles from './Logo.module.scss';

function Logo (){
    return (
        <div className={styles.block}>
            <img src={LogoDefault} alt="" />
        </div>
    )
}

export default Logo;