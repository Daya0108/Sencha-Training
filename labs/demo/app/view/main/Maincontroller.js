Ext.define('Demo.view.main.Maincontroller',{
    extend: 'Ext.app.ViewController',

    xtype:'maincontroller',

    alias: 'controller.main',

    ondelete:function(grd) {
        var grid = grd.up().up();
        console.log(grid)
        var selectionArray = grid.getSelection();
        var selection;
        if(selectionArray.length ===0){
            // this.disable();
            alert('Select the Item You wish to Delete');
            return;
        }else{
            selection = selectionArray[0];
        }
        selection.drop();
    },
    onadd:function (nde) {
        var grid = nde.up().up();
        var selectionArray = grid.getSelection();
        var selection;
        if (selectionArray.length === 0) {
            Ext.toast('Select any record');
            return;
        } else {
            selection = selectionArray[0];
        }
        selection.appendChild({
            iconCls: "x-fa fa-utensils",
            task: "",
            type:"",
            duration:"",
            assignee: "",
            status: "",
            leaf: true,
        })
    },
    onedit:function(){
        Ext.create('Ext.grid.plugin.RowEditing', {
            // clicksToMoveEditor: 1,
            ptype: 'rowediting',
            clicksToEdit: 1,
            autoCancel: false,
        })
    }
})