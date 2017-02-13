/* Example of basic React component. */
var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
    render: function () {
        return (
            h1(null, 'This is my first component')
        )
    }
});

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            div(null, // attributes such as classnames.
                <MyTitle />
            )
        )
    }
});

ReactDOM.render(React.createElement(MyFirstComponent),
    document.getElementById('app')
);
