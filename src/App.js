//import logo from './logo.svg';
import './App.css';
// import Basic22 from './Components/Basic2.2/Basic2.2';
// import Basic3 from './Components/Basic3.1/Base';
// import Basic321 from './Components/Basic3.2/Basic3.21';
import Buttons from './Components/Basic4.1/Buttons';

function App() {
  return (
    <div className="App">
      {/* <Basic22></Basic22> */}
      {/* <Basic3></Basic3> */}
      <Buttons weight={700} text={'important'}></Buttons>
      <Buttons weight={300} text={'not that important'}></Buttons>

    </div>
  );
}

export default App;
