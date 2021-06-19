import { observer } from "mobx-react"
import store from "../../store/index";
import styles from './Experience.module.scss';
import Tag from "./Tag";

function Experience(){
    return (
        <div>
            <h2>Experience</h2>
            <div className={styles.list}>
                {store.tag.value.map((item, i) => (
                    <Tag key={i} id={i} params={item}/>
                ))}
            </div>
        </div>
    )
}

export default observer(Experience);