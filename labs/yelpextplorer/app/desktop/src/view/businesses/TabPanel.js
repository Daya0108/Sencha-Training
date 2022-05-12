Ext.define('YelpExtplorer.view.businesses.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'businessestabpanel',
    requires:['YelpExtplorer.view.businesses.Map',
              'YelpExtplorer.view.businesses.View'],

    items: [{
        title: 'Map',
        xtype: 'businessesmap',
        bind: {
            location: '{location}',
            store: '{businesses}',
            selection: '{business}'
        }
    }, {
        title: 'View',
        xtype: 'businessesview',
        bind: {
            store: '{businesses}',
            selection: '{business}'
        }
    }, {
        title: 'Grid',
        html: 'businessesgrid'
    }]

});
