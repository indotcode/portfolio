import './App.scss';
import Logo from './components/Logo';
import Info from './components/Info';
import Print from './components/Print';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience/Experience';
import Code from './components/Code';
import Availability from './components/Availability';
import Feedback from './components/Feedback';
import Map from './components/Map';
import store from './store';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <div className="wrapper App-wrapper App-wrapper_spaceBetween">
                    <div className="wrap App-wrap mt10 mb10">
                        <div className="wrapCel App-header__logo">
                            <Logo/>
                        </div>
                        <div className="wrapCel App-header__info">
                            <Info/>
                        </div>
                    </div>
                    <div className="wrap App-wrap mt10 mb10">
                        <div className="wrapCel">
                            <Print/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="App-main">
                <div className="wrapper">
                    <div className="wrap mt10 mb10">
                        <div className="wrapCel wrapCel_3">
                            <Portfolio/>
                        </div>
                        <div className="wrapCel wrapCel_3">
                            <Experience/>
                        </div>
                        <div className="wrapCel wrapCel_3">
                            <Code/>
                        </div>
                        <div className="wrapCel wrapCel_3">
                            <Availability/>
                        </div>
                        {store.feedback.map((item, i) => (
                            <div key={i} className="wrapCel wrapCel_3">
                                <Feedback name={item.name} text={item.text}/>
                            </div>
                        ))}
                        <div className="wrapCel wrapCel_6">
                            <Map/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
