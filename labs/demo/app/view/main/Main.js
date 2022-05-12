Ext.define('Demo.view.main.Main',{
    extend:'Ext.panel.Panel',
    require:[
        'Demo.view.main.List',
        'Demo.view.main.Maincontroller',
        'Demo.view.main.Mainmodel',
        'Demo.view.main.store'
    ],

    // viewModel:'main',
    controller:'main',
    

    title: 'Restaurants nearby',

    items:{
        xtype:'mainlist',
    },
})