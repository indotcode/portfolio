import React from 'react';
import styles from './Info.module.scss';
import flag from './../images/us.png';
import {observer} from 'mobx-react';
import store from '../store/index';
import Input from './Input';

function Info (){
    return (
        <div className={styles.block}>
            {store.name.active === 0 && 
                <div className={styles.name} onClick={() => store.active(1, 'name')}>
                    <span>{store.name.value}</span>
                </div>
            }
            {store.name.active === 1 && 
                <div className={styles.block__form}>
                    <Input name="name" size="large_full" value={store.name.value}/>
                </div>
            }
            {store.address.active === 0 && 
                <div className={styles.address} onClick={() => store.active(1, 'address')}>
                    <span>{store.address.value}</span>
                </div>
            }
            {store.address.active === 1 && 
                <div className={styles.block__form}>
                    <Input name="address" size="middle_full" value={store.address.value}/>
                </div>
            }
            <div className={styles.sity}>
                <img src={flag} alt="" />
                <span>English</span>
            </div>
            <div className={styles.tag}>
                <div className={styles.tag__list}>
                    {store.tag.value.map((item, i) => (
                        <div key={i} className={styles.tag__item}>
                            {item.name}
                            <span onClick={() => store.removeTag(i)} className={styles.tag__itemRemove}>
                                <span>+</span>
                            </span>
                        </div>
                    ))}
                    {store.tag.active === 0 && 
                        <div className={styles.tag__plus} onClick={() => store.active(1, 'tag')}>+</div>
                    }
                    {store.tag.active === 1 && 
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