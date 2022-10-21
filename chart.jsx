const Chart = (props) => {
    return <div className="row evenly">
        {props.entries.map(entry => <Entry day={entry.day} amount={entry.amount}/>)}
    </div>
}

const Entry = (props) => {
    return <div className="chart-entry column content-end txt-center">
        <span className="hoverAmount">{"$" + props.amount}</span>
        <div className="bg-red" style={{height: props.amount * 3 + "px", "--variable": "123"}}></div>
        <span className="day">{props.day}</span>
    </div>
}


fetch("./data.json")
    .then(response => response.json())
    .then(json => {
        ReactDOM.render(<Chart entries={json}/>, document.getElementById("chart"))
    });