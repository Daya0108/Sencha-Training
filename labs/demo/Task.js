Ext.define('Task', {
    extend: 'Ext.data.TreeModel',
    fields: [
        { name: 'task', type: 'string' },
        { name: 'Assignee(chef)', type: 'string' },
        { name: 'Time taken', type: 'string' },
        { name: 'done', type: 'boolean' }
    ]
});