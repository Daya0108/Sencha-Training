Ext.define('Demo.view.main.plugin.PluginCon', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.actioncolumnheaderbuttonplugin',
    actionColumnHeaderId: null,
    config: {
        buttonConfig: null
    },
    init: function (cmp) {
        this.setCmp(cmp);
        var ownerGrid = cmp.getView().ownerGrid;
        ownerGrid.on('viewready', this.onViewReady, this);
        this.actionColumnHeaderId = cmp.getId() + '-actioncolumnheaderCt';
        cmp.setText('<div id="' + this.actionColumnHeaderId + '"></div>');
    },
    onViewReady: function (view) {
        var me = this;
        var button = Ext.create('Ext.button.Button', me.getButtonConfig());
        button.render(view.el.down('#' + this.actionColumnHeaderId));
    }

});