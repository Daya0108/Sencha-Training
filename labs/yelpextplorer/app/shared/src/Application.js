Ext.define('YelpExtplorer.Application', {
    extend: 'Ext.app.Application',
    name: 'YelpExtplorer',
    onAppUpdate: function () {
        // onAppUpdate is run by the microloader if the browser cached version
        // of the app doesn't match the version on the server.
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});