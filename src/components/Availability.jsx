import { observer } from "mobx-react";
import styles from './Availability.module.scss';


function Availability(){
    return (
        <div>
            <h2>Availability</h2>
            <p className={styles.text}>Full-time</p>
            <h3>Preferred Environment</h3>
            <p className={styles.text}>GitHub, Mac OSX</p>
        </div>
    )
}

export default observer(Availability);