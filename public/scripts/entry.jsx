/**
 * Created by Tink on 2015/10/31.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    render: function() {
        return <div>Hello World</div>;
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('example'));