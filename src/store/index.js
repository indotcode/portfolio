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
        value: 'Осинники Победы 54'
    };

    location = {
        zoom: 14,
        geo: {
            lat: 0,
            lng: 0
        },
        active: 0
    }

    apiKey = 'AIzaSyAsHP7eRW47kbqjbl61fVLV1QY7OdJdTYM';

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

    code = `<div class='golden-grid'> 
    <div style='grid-area: 
    11 / 1 / span 10 / span 
    12;'>
    </div> 
</div>`;

    feedback = [
        {
            name: 'The Most Amaizing...',
            text: 'The only true wisdom is in knowing you know nothing...'
        },
        {
            name: 'In clients I look for...',
            text: 'There is only one good, knowledge, and one evil, ignorance.'
        }
    ]

    constructor() {
        makeObservable(this, {
            tag: observable,
            name: observable,
            address: observable,
            portfolio: observable,
            code: observable,
            location: observable,
            apiKey: observable,
            active: action,
            saveInput: action,
            removeTag: action,
            yearSave: action,
            codeChange: action
        });
        this.locationInit(this.address.value);
        this.tagSort(this.tag.value);
    }

    tagSort(tag){
        return tag.sort((a, b) => {
            let x = Number(a.year.replace(',', '.'));
            let z = Number(b.year.replace(',', '.'));
            return x > z ? -1 : 1;
        })
    }

    locationInit(string){
        this.location.active = 0;
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+string+'&key='+this.apiKey)
            .then(response => response.json())
            .then(result => {
                const geometry = result.results[0];
                this.location = {
                    zoom: geometry.address_components.length * 2 + 3,
                    geo: geometry.geometry.location,
                    active: 1
                }
            }).catch(e => {
                
            });
    }

    codeChange = () => (value) =>{
        this.code = value;
    }

    active(n, name){
        this[name].active = n;
    }

    saveInput(name, string){
        if(string !== ''){
            if(name === 'tag'){
                this.tag.value.push({name: string, year: '0'})
            }
            if(name === 'name'){
                this.name.value = string;
            }
            if(name === 'address'){
                this.address.value = string;
                this.locationInit(string);
            }
        }
        this.active(0, name);
    }
    
    removeTag(id){
        this.tag.value.splice(id, 1)
    }

    yearSave = (id, value) => {
        this.tag.value[id].year = value;
        this.tagSort(this.tag.value);
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