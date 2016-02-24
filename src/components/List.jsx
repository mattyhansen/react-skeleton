var React = require('react');
var ListItem = require('./ListItem.jsx');

var dependencies = [{'id':1, 'text':'browserify'},{'id':2, 'text':'babel-preset-react'},{'id':3, 'text':'babelify'},{'id':4, 'text':'react'},{'id':5, 'text':'react-dom'},{'id':6, 'text':'watchify'}];

var List = React.createClass({
    render: function() {
        var listItems = dependencies.map(function(item) {
            return <ListItem key={item.id} dependency={item.text}/>;
        });
        return (<ul>{listItems}</ul>)
    }
});

module.exports = List;
