const container3 = document.getElementById("container3");

const react_u = React.createElement("u",null,"Moshe with React")

const react_span = React.createElement("span",null,react_u);

const react_h1 = React.createElement("h1",null,react_span)

// ReactDOM.createRoot(container3,react_h1);

let root = ReactDOM.createRoot(container3);
root.render(react_h1);