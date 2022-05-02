/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('Task.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Task.view.main.MainController',
        'Task.view.main.MainModel',
        'Task.view.main.List',
        'Task.view.main.Contentform',
        'Task.view.main.Concat'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    // tabBarHeaderPosition: 1,
    // titleRotation: 0,
    // tabRotation: 0,
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: '  7 Top Trending',
        iconCls: 'fa-film',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'concat'
        }]
    }]
});