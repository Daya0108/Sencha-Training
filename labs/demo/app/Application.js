Ext.define('Demo.Application', {
    extend: 'Ext.app.Application',
    name: 'Demo',
    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});