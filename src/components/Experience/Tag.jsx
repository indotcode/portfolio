import { observer } from "mobx-react"
import React from "react";
import store from "../../store";
import styles from './Tag.module.scss';

class Tag extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            active: 0
        }
    }

    onKeyYear = () => (event) => {
        if(event.charCode === 13){
            this.setState({active: 0})
        }
    }

    render(){
        return (
            <div className={styles.item}>
                <div className={styles.name}>{this.props.params.name}</div>
                {this.state.active === 0 &&
                    <div onClick={() => this.setState({active: 1})} className={styles.year}>{this.props.params.year} years</div>
                }
                {this.state.active === 1 &&
                    <div className={styles.form}>
                        <input className={styles.input} type="text" value={this.props.params.year} onInput={store.yearSave(this.props.id)} onKeyPress={this.onKeyYear()}/>
                    </div>
                }
            </div>
        )
    }
}

export default observer(Tag);