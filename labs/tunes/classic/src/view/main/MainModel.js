Ext.define('Tunes.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main-main',
    requires: ['Tunes.model.Tune'],
    stores: {
        tunes: {
            model: 'Tunes.model.Tune',
            autoLoad: true,
            sorters: ['artist', 'title']
        }
    }
});