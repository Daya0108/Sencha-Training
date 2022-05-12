/**
 * This view is an example list of people.
 */
 Ext.define('Task.view.main.List1', {
    extend: 'Ext.grid.Panel',
    xtype: 'sublist',

    requires: [
        'Task.store.Personnel'
    ],
    bind: {
        selection: '{Movie}'
    },
    // bind:{title: '{Movie.title}'},
    columns: [
        { text: 'Director', dataIndex: 'director',flex:1,},
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Producer', dataIndex: 'producer', flex: 1 },
        { text: 'Genre', dataIndex: 'genre', flex: 1 }

    ],
    listeners: {
        itemdblclick: 'onRowclick',
        // Selection: '{Movie}',
        // itemdblclick: function(dv, record, item, index, e) {
        //     var frm = Ext.create('Task.view.main.Layouts');
        //     frm.show();
            // }
    }
});