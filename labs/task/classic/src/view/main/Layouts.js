Ext.define('Task.view.main.Layouts', {
    extend: 'Ext.window.Window',
    xtype: 'jrec',
    requires:[
        'Task.view.main.List1',
        'Task.view.main.Contentform'   
    ],
    controller: 'main',
    title: 'Top 7 Trending movies',
    bodyPadding: 15,
    resizable:false,
    width: 1550,
    height: 760,
    scrollabe:true,
    closable: true,
    autoShow: true,
    maximized: true,
    floating: true,     
    modal: true,
    layout:{
        xtype:'vbox',
        align:'strech',
    },

    items:[
        {xtype:'sublist',flex:1,bind:{title: '{Movie.title}'},},
        {
        xtype:'sublist',
        flex:1,
        height:100,
        columns: [{
            dataIndex: 'director',
            text: 'Director',
            highlight:true,
            flex:1,
            align:'center',
            bind:{data:'{Movie.director}'}
         }, {
            dataIndex: 'title',
            text: 'Title',
            flex:1,
            align:'center',
            bind:{data:'{Movie.title}'}
         }, {
             text:'Producer',
             flex:1,
             align:'center',
             bind:{data:'{Movie.producer}'}
         }, {
             text:'Genre',
             dataIndex:'genre',
             flex:1,
             align:'center',
             bind:{data:'{Movie.genre}'}
         }]
    },{layout: {
            type: 'hbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [
            {
                title: 'Available in',
                flex: 1,
                margin: '0 2 0 0',
                bodyPadding: 5,
                border:true,
                items: [{
                    xtype: 'radiogroup',
                    fieldLabel: 'Movie Available in',
                    columns: 1,
                    name: 'available',
                    items: [
                        { boxLabel: 'Amazon Prime', inputValue: 'Amazon Prime'},
                        { boxLabel: 'Hotstar', inputValue: 'Hotstar', checked: true },
                        { boxLabel: 'Netflix', inputValue: 'Netflix'},
                        { boxLabel: 'Zee 5', inputValue: 'Zee 5'},
                        { boxLabel: 'Voot', inputValue: 'Voot'}
                    ],
                    bind:{
                        value:'{Movie.available}'
                    }
                },{
                    xtype: 'radiogroup',
                    fieldLabel: 'IMDB Ratings',
                    name:'imdb',
                    items: [
                        { boxLabel: '9 & above', inputValue: '9 & above',},
                        { boxLabel: '7 & above', inputValue: '7 & above', checked: true },
                        { boxLabel: '5 & above', inputValue: '5 & above' },
                        { boxLabel: '3 & above', inputValue: '3 & above'},
                        { boxLabel: 'less than 3', inputValue: 'less than 3', }
                    ],
                    bind:{
                        value:'{Movie.imdb}'
                    }
                }]
            },
            {
                title: 'Comment your Opinion About Movie',
                // width: 100,
                border:true,
                flex:1,
                margin: '0 2 0 0',
                items: [{
                    xtype: 'textarea',
                    fieldLabel: 'Message text',
                    emptyText: 'Type your comments on this movie',
                    hideLabel: true,
                    width:510,
                    height:200,
                    name: 'msg',
                    flex: 1,
                    bind:'{Movie.comment}'
                }]
            },
            {
                title: 'Update Details',
                border:true,
                flex: 1,
                bodyPadding:50,
                
                items:[{
                    xtype:'button',
                    text: 'Save',
                    id:'savebtn',
                    activeCounter:0,
                    scale: 'large',
                    top:10,
                    style: {
                        width: '95%',
                        float: 'left'
                    },
                    handler:function(btn){
                        var Title= btn.up('radiogroup').view.getValues()
                        var tpl= [
                            '<table>'
                            +'<th>Are you sure to save the following changes</th>'
                            +'<tr><td>Title:</td><td><strong>'+{Title}+'</a></strong></td></tr>'
                            +'<tr><td>Director:</td><td><strong>{Director}</strong></td></tr>'
                            +'<tr><td>Producer:</td><td><strong>{Producer}</strong></td></tr>'
                            +'<tr><td>Genre:</td><td><strong>{Genre}</strong></td></tr>'
                            +'</table>'
                        ]

                        // alert('Updated Succesfully')
                        var available =btn.up('jrec').down('radiogroup').name
                        console.log(available);
                        var message = "Are you sure to add these changes :<br><br>"+"Movie Available in- Hotstar<br><br>"+"Rating - 7 & above <br><br>"+"Comment - Awesome Movie\n";
                        Ext.MessageBox.alert('Save',tpl);
                        console.log(this.getActiveCounter());
                        // console.log(this.up('jrec').down('button').activeCounter);
                        this.setActiveCounter(1);
                        console.log(this.getActiveCounter());
                        // console.log(this.up('jrec').down('button').activeCounter);
                        btn.up('window').close();

                    }
                },{
                    xtype:'button',
                    text:'Cancel',
                    scale: 'large',
                    border:true,
                    style: {
                        width: '95%',
                        margin:'0 10 0 0',
                    },
                    handler:function(btn){
                        var dis = this.up('jrec').down('button').activeCounter
                        if(dis>='1'){
                            this.up('window').close();
                        }else{
                            Ext.MessageBox.confirm('Confirm', 'Are you sure to exit without Saving?', 
                            // this.showResult, this),
                            function (choice) {
                                if (choice === 'yes') {
                                    window.location.reload();
                                    // this.up('window').close();
                                }
                            }
                            );
                        }
                    }
                }]
            }]
    }],
});