Ext.define('YelpExtplorer.view.main.BaseModel', {
    extend: 'Ext.app.ViewModel',
    requires:['YelpExtplorer.model.Business'],
    data: {
        city: 'Manhattan',
        category: 'coffee'
    },
    stores: {
        businesses: {
            model: 'YelpExtplorer.model.Business',
            pageSize: 20, // Yelp limits results to 20 at a time
            sorters: ['name']
        }
    }
});
