import {action, makeObservable, observable} from 'mobx';


class Store {

    tag = [
        {name: 'PHP', year: 6},
        {name: 'Ruby', year: 2},
        {name: 'Java Script', year: 4.5}
    ];

    name = 'John Smith';

    address = 'Portland, Oregon, USA';

    constructor() {
        makeObservable(this, {
            tag: observable,
            name: observable,
            address: observable,
            saveInput: action,
            removeTag: action,
        })
    }

    saveInput(name, string){
        if(name === 'tag'){
            console.log(name);
            // this.tag.push({name: string, yesr: 0})
        }
    }
    
    removeTag(id){
        this.tag.splice(id, 1)
    }
}

export default new Store();