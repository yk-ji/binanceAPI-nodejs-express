import logo from './logo.svg';
import './App.css';
import UpdatingChart from "./components/charts/updatingData/UpdatingChartComponent";
// import Menu from "./components/react-mega-menu-main/src/indexTest1.js";
import YK_Menu from "./components/react-mega-menu-main/src/YKNavBar";
import {useEffect, useRef} from "react";
window.addEventListener('DOMContentLoaded', (event) => {
//Your JS code.
});

function App() {

    const webSocketUrl = '/videocall';
    let ws = useRef(null);
    useEffect(() => {
        console.log("2")
        if (!ws.current) {
            console.log("3")
            ws.current = new WebSocket('ws://localhost:8989/videocall')

            // ws.current = new WebSocket(webSocketUrl, null, null, null, {
            //         protocolVersion: 8,
            //         origin: 'https://localhost:8443',
            //         rejectUnauthorized: false
            //     });
            // ws.current = new WebSocket(webSocketUrl)

            console.log(ws.current)
            ws.current.onopen = () => {
                console.log("onopen to " + webSocketUrl);
                // setSocketConnected(true);
            };
            ws.current.onmessage = () => {
                console.log("onmessage to " + webSocketUrl);
                // setSocketConnected(true);
            };
            ws.current.onclose = (error) => {
                console.log("onclose to " + webSocketUrl);
                console.log(error);
            };
            ws.current.onerror = (error) => {
                console.log("onerror to " + webSocketUrl);
                console.log(error);
            };
        }

        return () => {
            console.log("clean up");
            ws.current.close();
        };
    }, []);

  return (
    <div className="App">
      <header className="App-header">

          <UpdatingChart />
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
        {/*  <YK_Menu/>*/}
      </header>

    </div>
  );
}

export default App;
