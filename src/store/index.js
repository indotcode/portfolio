import {action, makeObservable, observable} from 'mobx';


class Store {

    tag = [
        {name: 'PHP', year: 6},
        {name: 'Ruby', year: 2},
        {name: 'Java Script', year: 4.5}
    ];

    constructor() {
        makeObservable(this, {
            tag: observable,
            addTag: action,
            removeTag: action,
        })
    }

    addTag(name){
        this.tag.push({name: name, yesr: 0})
    }
    
    removeTag(id){
        this.tag.splice(id, 1)
        console.log(id)
    }
}

export default new Store();