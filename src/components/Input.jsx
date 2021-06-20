import {observer} from 'mobx-react';
import React from 'react';
import styles from './Input.module.scss';
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

    isValid(string) {
        let spec = '$%#*()@[]'.split('');
        let stringRes = string.split('');
        let n = 0;
        stringRes.forEach(s => {
            if(spec.indexOf(s) !== -1){
                n = 1;
            }
        });
        return n === 0    
    }

    onInput = () => (event) => {
        const value = event.target.value;
        let button = 'ok';
        if(!this.isValid(value)){
            button = 'error';
        }
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
            let button = 'ok';
            const value = this.state.value.substring(0, this.state.value.length - 1);
            if(!this.isValid(value)){
                button = 'error';
            }
            this.setState((state) => {
                state.value = value;
                state.buttonActive = state.valueDefault !== state.value ? 1 : 0;
                state.button = button;
                return state;
            })
        }
    }

    onKeyInput = () => (event) => {
        if(event.charCode === 13 && this.state.button === 'ok'){
            store.saveInput(this.props.name, this.state.value);
        }
    }

    render() {
        return (
            <div className={styles.block}>
                <input onKeyPress={this.onKeyInput()} onInput={this.onInput()} type="text" className={[styles.input, styles[this.props.size], styles[this.state.width]].join(' ')} value={this.state.value}/>
                {this.state.buttonActive === 1 &&
                    <button onClick={this.onClick()} className={[styles.button, styles[this.state.button]].join(' ')}></button>
                }
                {this.state.button === 'error' && this.props.name === 'name' &&
                    <div className={styles.errorText}>Error Name</div>
                }
                {this.state.button === 'error' && this.props.name === 'address' &&
                    <div className={styles.errorText}>Error Address</div>
                }
                {this.state.button === 'error' && this.props.name === 'tag' &&
                    <div className={styles.errorText}>Error Tag</div>
                }
            </div>
        )
    }

}

export default observer(Input);