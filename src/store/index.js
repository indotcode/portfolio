import {action, makeObservable, observable} from 'mobx';


class Store {

    tag = {
        active: 0,
        value: [
            {name: 'PHP', year: 6},
            {name: 'Ruby', year: 2},
            {name: 'Java Script', year: 4.5}
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
        })
    }

    active(n, name){
        this[name].active = n;
    }

    saveInput(name, string){
        if(name === 'tag'){
            this.tag.value.push({name: string, yesr: 0})
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
}

export default new Store();