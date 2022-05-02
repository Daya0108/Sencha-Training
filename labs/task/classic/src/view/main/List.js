/**
 * This view is an example list of people.
 */
Ext.define('Task.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Task.store.Personnel'
    ],
    bind: {
        selection: '{Movie}'
    },
    title: 'Top 7 Tending Movies according to genre',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Director', dataIndex: 'director',flex:1 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Producer', dataIndex: 'producer', flex: 1 },
        { text: 'Genre', dataIndex: 'genre', flex: 1 }

    ]

    // listeners: {
    //     select: 'onItemSelected'
    // }
});