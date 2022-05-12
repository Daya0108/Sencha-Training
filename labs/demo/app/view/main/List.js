Ext.define('Demo.view.main.List',{
    extend:'Ext.tree.Panel',
    xtype:'mainlist',

    requires:['Demo.view.main.Maincontroller'],

    controller:'main',

    store: {
        xtype:'personnel',
        type: 'tree',
        model: 'Demo.view.main.Mainmodel',
        folderSort: true,
        filterer:'bottomup',
        gridfilters:true,
        pageSize:10,
        proxy: {
            type: 'ajax',
            enablePaging: true,
            url: 'app/view/main/resources/treegrid.json',
            reader: {
                type: 'json',
                rootProperty: 'children'
            }
        }
    },
    tbar: [{
        text: 'Add',
        iconCls: 'x-fa fa-plus',
        handler: 'onadd'
    },'-',{
        text: 'Delete',
        iconCls: 'x-fa fa-trash',
        handler: 'ondelete'
    }],
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop'
        }
    },
    plugins: {
        gridfilters: true
    },
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    height:500,
    columns: [{
        xtype: 'treecolumn', 
        text: '',
        width: 200,
        sortable: false,
        dataIndex: 'task',
        locked: true,
        flex:true,
        editor: 'textfield'
    },{
        text: 'Type',
        width: 150,
        dataIndex: 'type',
        sortable: false,
        flex:true,
        editor: 'textfield'
    },{
        xtype: 'templatecolumn',
        text: 'Time Taken',
        width: 150,
        sortable: false,
        dataIndex: 'duration',
        align: 'center',
        flex:true,
        editor: 'textfield',
        // add in the custom tpl for the rows
        tpl: Ext.create('Ext.XTemplate', '{duration:this.formatHours}', {
            formatHours: function(v) {
                var min;
                // console.log(v);
                if (v == 0) {
                    return null;
                }else if(v < 1) {
                    return Math.round(v * 60) + ' mins';
                }
                else if (Math.floor(v) !== v) {
                    min = v - Math.floor(v);

                    return Math.floor(v) + 'h ' + Math.round(min * 60) + 'm';
                }
                else {
                    return v + ' hour' + (v === 1 ? '' : 's');
                }
            }
        })
    },{
        text: 'Assignee(Chef)',
        width: 150,
        dataIndex: 'assignee',
        sortable: true,
        flex:true,
        editor: 'textfield',
        filter: {
            type: 'string'
        },
    }, {
        text: 'Status',
        width: 150,
        dataIndex: 'status',
        sortable: false,
        flex:true,
        editor: 'textfield'
    },{
        text: 'Action',
        width: 40,
        menuDisabled: true,
        xtype: 'actioncolumn',
        tooltip: 'Edit task',
        align: 'center',
        iconCls: 'x-fa fa-edit',
        id:'editButton',
        handler:'onedit',
        flex:true,
        // selModel: 'rowmodel',
    }],
    selModel: 'cellmodel',
    // plugins: {
    //     ptype: 'rowediting',
    //     clicksToEdit: 2,
    // },
    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2
    },'gridfilters'],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        
        displayInfo: true
    }],
})