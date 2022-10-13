const container = document.getElementById("root");

const App = ()=>{ 
    return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
)};


const Header = ()=>{ 
    return (
    <div className="Header flex-center">
        <h1>Coupon System</h1>
    </div>
)};

const Main = ()=>{ 
    return (
    <div className="Main flex-center">
        <img src="https://media.giphy.com/media/TAdx21T5Rz3Y2kirUX/giphy.gif" alt="Moshe"></img>
    </div>
)};

const Footer = ()=>{ 
    return (
    <div className="Footer flex-center">
        <p>All right reserved to John Bryce &copy;</p>
    </div>
)};

let root = ReactDOM.createRoot(container);
root.render(<App/>);