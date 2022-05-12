Ext.define('Demo.view.main.Mainmodel', {
    extend: 'Ext.data.TreeModel',
    alias:'viewmodel.main',
    fields: [
        { name: 'task', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'duration', type: 'string' },
        { name: 'assignee', type: 'string' },
        { name: 'status', type: 'string' }
    ],
    store: {
        type: 'tree',
        folderSort: true,
        pageSize: 10,
        remoteSort: true,
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/treegrid.json'
        }
    },
});