"use strict";

// BEFORE: WHAT IT USE TO LOOK LIKE
// var females = BABYNAMES.filter(function(record) {
//     return "F" == record.sex;
// });

// AFTER: USING BIG ARROW
// Big arrow basically replaces "function"
var females = BABYNAMES.filter(record => "F" == record.sex);
// rec2.count - rec1.count gives us a descending sort
var topFemNames = females.sort((rec1, rec2) => rec2.count - rec1.count).slice(0,100);

//main application React component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var colMeta = {
            count: {
                type: columnTypes.numeric,
                caption: "Number of Babies"
            }
        }
        return (
            <div className="container">
                <h1>Most Popular Female Baby Names from 1996</h1>
                <DataTable records={this.props.records} 
                    columnMeta={colMeta}/>
            </div>
        );
    }
}

//render the App component to the element with id="app"
ReactDOM.render(<App records={topFemNames}/>, 
document.getElementById("app"));
