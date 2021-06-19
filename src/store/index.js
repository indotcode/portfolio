import {action, makeObservable, observable} from 'mobx';


class Store {

    tag = {
        active: 0,
        value: [
            {name: 'PHP', year: '6'},
            {name: 'Ruby', year: '2'},
            {name: 'Java Script', year: '4,5'}
        ]
    };

    name = {
        active: 0,
        value: 'John Smith'
    };

    address = {
        active: 0,
        value: 'Portland, Oregon, USA'
    };

    portfolio = [
        {
            name: 'Bootstrap 4 Material Design (Sample Link)',
            link: '/'
        },
        {
            name: 'Modern JavaScript stack',
            link: '/'
        },
        {
            name: 'Datepicker for twitter bootstrap',
            link: '/'
        },
        {
            name: 'Fast and reliable Bootstrap widgets in Angular',
            link: '/'
        }
    ]

    constructor() {
        makeObservable(this, {
            tag: observable,
            name: observable,
            address: observable,
            portfolio: observable,
            active: action,
            saveInput: action,
            removeTag: action,
            yearSave: action
        })
    }

    active(n, name){
        this[name].active = n;
    }

    saveInput(name, string){
        if(name === 'tag'){
            this.tag.value.push({name: string, year: '0'})
        }
        if(name === 'name'){
            this.name.value = string;
        }
        if(name === 'address'){
            this.address.value = string;
        }
        this.active(0, name);
    }
    
    removeTag(id){
        this.tag.value.splice(id, 1)
    }

    yearSave = (id) => (event) => {
        let value = event.target.value;
        this.tag.value[id].year = this._maskYear(value);
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
}

export default new Store();