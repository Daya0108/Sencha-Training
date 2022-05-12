Ext.define('YelpExtplorer.view.businesses.Filter', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'businessesfilter',
    renderConfig: {
        city: '',
        category: ''
    },
    updateCity: function (city) {
        // Or put an itemId on city, and look for that.
        this.down('textfield[fieldLabel="City"]').setValue(city);
    },
    updateCategory: function(category) {
        this.down('textfield[fieldLabel="Category"]').setValue(category);
    },
    twoWayBindable: ['city', 'category'],
    items: [{
        xtype: 'textfield',
        reference: 'city',
        fieldLabel: 'City',
        listeners: {
            change: function (field) {
                var filter = field.up('businessesfilter');
                filter.setCity(field.getValue());
            }
        },
        labelWidth: 26
    }   , '', {
        xtype: 'textfield',
        fieldLabel: 'Category',
        labelWidth: 56,
        listeners: {
            change: function(field, value) {
                field.up('businessesfilter').setCategory(value);
            }
        },
    }],
    padding: 4
});
