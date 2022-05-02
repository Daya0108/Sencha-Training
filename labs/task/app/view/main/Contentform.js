Ext.define('Task.view.main.Contentform', {
    extend: 'Ext.container.Container',
    xtype: 'contentform',
    border: true,
    width: 100,
    hight:50,
    bodyPadding: 20,
    tpl: [
        '<table>'
        , '<tr><td>Title:</td><td><strong><a href="#" onclick="Ext.toast(&quot clicked on Title {Title} &quot);">{Title}</a></strong></td></tr>',
        , '<tr><td>Director:</td><td><strong>{Director}</strong></td></tr>'
        , '<tr><td>Producer:</td><td><strong>{Producer}</strong></td></tr>',
        , '<tr><td>Genre:</td><td><strong>{Genre}</strong></td></tr>',
        , '</table>'
    ],
    
    bind: {
        data: {
            Director: '{Movie.director}',
            Title: '{Movie.title}',
            Producer: '{Movie.producer}',
            Genre: '{Movie.genre}',
        }
    },
})