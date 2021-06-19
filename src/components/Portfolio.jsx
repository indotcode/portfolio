import { observer } from "mobx-react";
import store from '../store/index';
import styles from './Portfolio.module.scss';

function Portfolio(){
    return (
        <div>
            <h2>Portfolio</h2>
            <ul className={[styles.ul].join(' ')}>
                {store.portfolio.map((item, i) => (
                    <li key={i}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default observer(Portfolio);