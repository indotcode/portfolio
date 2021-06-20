import { useState } from 'react';
import LogoDefault from './../images/Userpic.png'
import styles from './Logo.module.scss';

function Logo (){

    const [img, setImg] = useState('');

    const [logo, setLogo] = useState({})

    const fileChange = () => (event) => {
        const file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
            setImg(event.target.result)
        };
        reader.readAsDataURL(file);
        setLogo(file);
    }

    return (
        <div className={styles.block}>
            <div className={styles.images}>
                {img === ''
                    ? <img src={LogoDefault} alt="" />
                    : <img src={img} alt="" />
                }
            </div>
            <label className={styles.load} htmlFor='file'></label>
            <input type="file" id='file' className={styles.file} onChange={fileChange()}/>
            {img !== '' &&
                <div className={styles.save}></div>
            }
        </div>
    )
}

export default Logo;