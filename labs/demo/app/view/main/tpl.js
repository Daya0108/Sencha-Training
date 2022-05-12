Ext.create('Ext.XTemplate', '{duration:this.formatHours}', {
    xtype:'tpl',
    formatHours: function(v) {
        var min;
        console.log(v);
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