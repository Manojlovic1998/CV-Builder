import './App.css';
import InfoContextProvider from "./store/InfoContextProvider";
import Header from "./components/UI/Header";
import CvContent from "./components/section-containers/CvContent";
import Main from "./components/UI/Main";

function App() {
    return (
        <InfoContextProvider>
            <Header>

            </Header>
            <Main>
                <CvContent/>
            </Main>
        </InfoContextProvider>
    );
}

export default App;
