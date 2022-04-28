Ext.define('Earthquakes.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {},
    formulas: {},
    stores: {
        earthquakes: {
            type: 'store',
            model: 'Ext.data.Model',
            fields: [{
                type: 'date',
                name: 'timestamp',
                dateFormat: 'c'
            }],
            sorters: ['timestamp'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'https://apis.is/earthquake/is',
                reader: {
                    rootProperty: 'results'
                }
            }
        }
    }
});
