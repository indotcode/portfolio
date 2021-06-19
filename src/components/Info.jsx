import React, { useState } from 'react';
import styles from './Info.module.css';
import flag from './../images/us.png';
import {observer} from 'mobx-react';
import store from '../store/index';
import Input from './Input';

function Info (){
    
    const [activeTag, setActiveTag] = useState(0);


    return (
        <div className={styles.block}>
            <div className={styles.name}>       
                <span>{store.name}</span>
            </div>
            <div className={styles.address}>
                <span>{store.address}</span>
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
                    {activeTag === 0 && 
                        <div className={styles.tag__plus} onClick={() => setActiveTag(1)}>+</div>
                    }
                    {activeTag === 1 && 
                        <div className={styles.tag__form}>
                             <Input name="tag" size="small" value=''/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default observer(Info);