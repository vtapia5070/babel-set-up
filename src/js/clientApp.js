var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
    render: function () {
        return (
            div(null, // attributes such as classnames.
                h1(null, 'This is my first component')
            )
        )
    }
});

var MyFirstComponent = React.createClass({
    render: function () {
        return (
            div(null, // attributes such as classnames.
                h1(null, 'This is my first component')
            )
        )
    }
});

ReactDOM.render(React.createElement(MyFirstComponent),
    document.getElementById('app')
);
