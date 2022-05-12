Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',

        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.businesses.Filter',
        'YelpExtplorer.model.Business',
        'YelpExtplorer.view.business.Detail'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },
    // tbar: [{
    //     text: 'Button'
    // }],
    dockedItems: [{
        dock: 'top',
        xtype: 'banner'
    },{
        dock: 'top',
        xtype: 'businessesfilter',
        bind: {
            city: '{city}',
            category: '{category}'
        }
    }],
    layout: 'border',
    items: [{
        region: 'center',
        xtype:'businessestabpanel'
    },{
        region: 'east',
        xtype: 'businessdetail',
        bind: {
            data: '{business}'
        },
        width: 130
    }]
});