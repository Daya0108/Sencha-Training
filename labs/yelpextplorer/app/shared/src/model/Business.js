Ext.define('YelpExtplorer.model.Business', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.Ajax'],
    fields: [{
        name: 'latitude',
        mapping: 'coordinates.latitude'
    }, {
        name: 'longitude',
        mapping: 'coordinates.longitude'
    }],
        proxy: {
            type: 'ajax',
            url: 'https://nameless-tundra-27404.herokuapp.com/go/?fn=yelp',
            reader: {
                type: 'json',
                rootProperty: 'businesses'
            }
        }
});