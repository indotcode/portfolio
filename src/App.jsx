import './App.scss';
import Logo from './components/Logo';
import Info from './components/Info';
import Print from './components/Print';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
