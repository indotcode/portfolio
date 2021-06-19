import {observer} from 'mobx-react';
import React from 'react';
import styles from './Input.module.css';
import store from '../store/index';

class Input extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: props.value,
            valueDefault: props.value, 
            buttonActive: 0,
            button: 'ok'
        }
    }

    onInput = () => (event) => {
        let value = event.target.value;
        let button = 'ok';
        this.setState((state) => {
            state.value = value;
            state.buttonActive = state.valueDefault !== value ? 1 : 0;
            state.button = button;
            return state;
        })
    }

    onClick = () => () => {
        if(this.state.button === 'ok'){
            store.saveInput(this.props.name, this.state.value);
        }
        if(this.state.button === 'error'){
            
        }
    }

    render() {
        return (
            <div className={styles.block}>
            <input onInput={this.onInput()} type="text" className={[styles.input, styles[this.props.size]].join(' ')} value={this.state.value}/>
                {this.state.buttonActive === 1 &&
                    <button onClick={this.onClick()} className={[styles.button, styles[this.state.button]].join(' ')}></button>
                }
            </div>
        )
    }

}

export default observer(Input);