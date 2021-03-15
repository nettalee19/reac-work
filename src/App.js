//import logo from './logo.svg';
import './App.css';
// import Basic22 from './Components/Basic2.2/Basic2.2';
// import Basic3 from './Components/Basic3.1/Base';
// import Basic321 from './Components/Basic3.2/Basic3.21';
// import Buttons from './Components/Basic4.1/Buttons';
// import Cards from './Components/Basic4.2/Cards';
import Incr from './Components/Basic7.1/Incr';

function App() {
  return (
    <div className="App">
      {/* <Basic22></Basic22> */}
      {/* <Basic3></Basic3> */}
      {/* <Buttons weight={700} text={'important'}></Buttons>
      <Buttons weight={300} text={'not that important'}></Buttons> */}
      
      {/* <Cards
      source = {'http://picsum.photos/200/300'}
      title = {'Netta'}
      desc = {'Netta Avidan'}
      share = {'www.google.com'}
      explore = {'www.facebook.com'}
      />
      <Cards
      source = {'http://picsum.photos/200/300'}
      title = {'Netta'}
      desc = {'Netta Avidan'}
      share = {'www.google.com'}
      explore = {'www.facebook.com'}
      /> */}

       <Incr/>
       {/* <ClassState/> */}

    </div>
  );
}

export default App;
