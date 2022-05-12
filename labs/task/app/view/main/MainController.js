/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Task.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onRowclick:
    function(grd, td, cellIndex, record, tr, rowIndex, e){
        var frm = Ext.create('Task.view.main.Layouts');
        // frm.down('sublist').getSelectionModel().select(record)
        // frm.down('sublist').getSelectionModel().insert[0,grd.selection.data]
        // console.log(grd.selection.data);
        // console.log(frm.down('sublist').getSelectionModel().setSelected(grd.selection.data));

        frm.show();
    }
});
