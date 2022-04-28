Ext.define("Tunes.view.main.Main", {
    extend: "Ext.Container",
    xtype: 'main',
    requires: [
        "Tunes.view.main.MainController",
        "Tunes.view.main.MainModel",
        'Tunes.view.View'
    ],
    controller: "main-main",
    viewModel: {
        type: "main-main"
    },
    layout: 'fit',
    items: [{
        xtype: 'tunesview',
        bind: {
            store: '{tunes}'
        }
    }]
});
