Ext.define('Task.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'Task.model.Personnel',

    data: { items: [
        { director: 'Peter Docter', title: "Inside out", producer: "Pixar" ,genre:"Animation"},
        { director: 'Prashanth neel', title: "KGF chapter 1", producer: "Hombale films" ,genre:"Action"},
        { director: 'Rajkumar Hirani', title: "3 Idiots", producer: "Reliance Big pictures" ,genre:"Comedy"},
        { director: 'Prashanth neel', title: "KGF chapter 2", producer: "Hombale films" ,genre:"Action"},
        { director: 'Ariel Winograd', title: "Heist of the century", producer: "AZ film" ,genre:"Crime"},
        { director: 'Rahul Sankrityan', title: "Sham Singha Roy", producer: "Warner Book" ,genre:"Drama"},
        { director: 'chole zaho', title: "Eternals", producer: "Kevin Fieg" ,genre:"Sci-fi"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
