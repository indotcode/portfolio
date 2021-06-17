import React from 'react';
import styles from './Info.module.css';
import flag from './../images/us.png';
import {observer} from 'mobx-react';
import store from '../store/index'; 

function Info (){
    return (
        <div className={styles.block}>
            <div className={styles.name}>       
                <span>John Smith</span>
            </div>
            <div className={styles.description}>
                <span>Portland, Oregon, USA</span>
            </div>
            <div className={styles.sity}>
                <img src={flag} alt="" />
                <span>English</span>
            </div>
            <div className={styles.tag}>
                <div className={styles.tag__list}>
                    {store.tag.map((item, i) => (
                        <div key={i} className={styles.tag__item}>
                            {item.name}
                            <span onClick={() => store.removeTag(i)} className={styles.tag__itemRemove}>
                                <span>+</span>
                            </span>
                        </div>
                    ))}
                    <div className={styles.tag__plus}>+</div>
                </div>
            </div>
        </div>
    )
}

export default observer(Info);