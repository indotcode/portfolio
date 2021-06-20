import { observer } from "mobx-react";
import styles from './Feedback.module.scss';


function Feedback(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <div className={styles.text}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default observer(Feedback);