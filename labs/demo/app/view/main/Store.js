Ext.define('Demo.view.main.store',{
    extend:'Ext.data.TreeStore', 
    alias: 'store.personnel',
    xtype:'personnel',
        type: 'tree',
        model: 'Demo.view.main.Mainmodel',
        folderSort: true,
        pageSize:10,
    proxy: {
        type: 'ajax',
        enablePaging: true,
        url: 'app/view/main/resources/treegrid.json',
        reader: {
            type: 'json',
            rootProperty: 'children'
        }
    },
    folderSort: true
});