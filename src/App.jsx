import './App.css';
import Logo from './components/Logo';
import Info from './components/Info';

function App() {
    return (
    <div className="App">
        <div className="App-header">
            <div className="conteiner">
                <div className="wrap">
                    <div className="wrap-cel App-header__logo">
                        <Logo/>
                    </div>
                    <div className="wrap-cel App-header__info">
                        <Info/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;
