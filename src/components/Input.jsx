import {observer} from 'mobx-react';
import styles from './Input.module.css';

function Input() {
    return (
        <div className={styles.block}>
            <input type="text" />
        </div>
    )
}

export default observer(Input);