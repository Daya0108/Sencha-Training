
Ext.define('YelpExtplorer.view.main.Main',{
    extend: 'Ext.panel.Panel',

    xtype:'main',
    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },
    
});
