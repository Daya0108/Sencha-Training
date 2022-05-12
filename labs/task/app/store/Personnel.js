Ext.define('Task.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'Task.model.Personnel',

    data: { items: [
        { director: 'Peter Docter', title: "Inside out", producer: "Pixar" ,genre:"Animation",available:'Hotstar',imdb:'9 & above',comment:"Awesome Movie "},
        { director: 'Prashanth neel', title: "KGF chapter 1", producer: "Hombale films" ,genre:"Action",available:'Amazon Prime',imdb:'9 & above',comment:"Kannada Movie "},
        { director: 'Rajkumar Hirani', title: "3 Idiots", producer: "Reliance Big pictures" ,genre:"Comedy",available:'Amazon Prime',imdb:'7 & above',comment:"Good for students"},
        { director: 'Prashanth neel', title: "KGF chapter 2", producer: "Hombale films" ,genre:"Action",available:'Amazon Prime',imdb:'7 & above',comment:"just wow"},
        { director: 'Ariel Winograd', title: "Heist of the century", producer: "AZ film" ,genre:"Crime",available:'Amazon Prime',imdb:'9 & above',comment:"Super Hiest "},
        { director: 'Rahul Sankrityan', title: "Sham Singha Roy", producer: "Warner Book" ,genre:"Drama",available:'Netflix',imdb:'7 & above',comment:"nice drama "},
        { director: 'chole zaho', title: "Eternals", producer: "Kevin Fieg" ,genre:"Sci-fi",available:'Hotstar',imdb:'7 & above',comment:"english movie "}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
