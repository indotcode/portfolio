import { observer } from "mobx-react"
import React from "react";
import store from "../../store";
import styles from './Tag.module.scss';

class Tag extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            value: props.params.year,
            active: 0
        }
    }

    onKeyYear = () => (event) => {
        if(event.charCode === 13){
            this.setState({active: 0, value: 0})
            store.yearSave(this.props.id, this.state.value)
        }
    }

    yearInput = () => (event) => {
        this.setState({value: this._maskYear(event.target.value)});
    }

    _maskYear(string){
        let num = '0123456789,'.split('');
        let end = string.slice('-1')
        let reg = string.substring(0, string.length - 1);
        if(num.indexOf(end) === -1){
            return reg;
        }
        let t = string.match(/,/g);
        if(t !== null && t.length > 1){
            return reg;
        }
        let start = string.slice(0,1)
        if(start === ','){
            return reg;
        }
        return string;
    }

    render(){
        return (
            <div className={styles.item}>
                <div className={styles.name}>{this.props.params.name}</div>
                {this.state.active === 0 &&
                    <div onClick={() => this.setState({active: 1, value: this.props.params.year})} className={styles.year}>{this.props.params.year} years</div>
                }
                {this.state.active === 1 &&
                    <div className={styles.form}>
                        <input className={styles.input} type="text" value={this.state.value} onInput={this.yearInput()} onKeyPress={this.onKeyYear()}/>
                    </div>
                }
            </div>
        )
    }
}

export default observer(Tag);