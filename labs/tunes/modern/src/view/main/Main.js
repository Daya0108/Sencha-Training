Ext.define("Tunes.view.main.Main", {
    extend: "Ext.Container",
    xtype: 'main',
    requires: [
        "Tunes.view.main.MainController",
        "Tunes.view.main.MainModel"
    ],
    controller: "main-main",
    viewModel: {
        type: "main-main"
    },
    html: "Modern main view"
});