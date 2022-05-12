Ext.define('YelpExtplorer.view.business.Detail',{
    extend: 'Ext.panel.Panel',
    xtype: 'businessdetail',
    tpl: [
        '<tpl if="this.isData(values)">',
        '<b>{name}</b><br/>',
        '{[Ext.Array.map(values.categories, function(item){return item[0];}).join("<br/>")]}<br/><br/>',
        '<img src="resources/images/stars_{rating}.png" /><br/>',
        '<img src="{image_url}" style="margin: 8px 4px 0 4px;"width="100" /><br/><br/>',
        'Reviews: {review_count}<br/><br/>',
        '{[values.location.display_address.join("<br/>")]}<br/><br/>',
        '<a href="{url}" target="_blank"><img src="resources/images/Yelp.png" width="100" height="64"/></a>',
        '</tpl>', {
            isData: function(data) {
                return !Ext.Object.isEmpty(data);
            }
        }
    ],
    bodyPadding:6
});