
import './App.css';
import Navbar from './Component/Navbar';
import Menu from './Component/Menu';
import Menuheading from './Component/Menuheading';


let p1=[<>Deep Learning</>,<>Web Development</>,<>Education</>];



let first = [<>Covid Cases Detection From CT Scan Using CNN </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let second = [<>Stock Price Pridiction using LSTM </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let third = [<>Skin Cancer Detection using CNN  </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let fourth = [<>Image-colorization using Auto Encoders </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

function App() {
  return (
  <>
    <Navbar> </Navbar>

    <div className="container my-2">
    <h2>Projects</h2>
    <Menuheading p1={p1[0]}></Menuheading>

    <Menu  state={"1"}  first={first} second={second} third={third} fourth= {fourth}> </Menu>
    <Menu  state={"2"}  first={first} second={second} third={third} fourth= {fourth}> </Menu>
    <Menu  state={"3"}  first={first} second={second} third={third} fourth= {fourth}> </Menu>
   
    <Menuheading p1={p1[1]}></Menuheading>

    <Menu  state={"4"}  first={first} second={second} third={third} fourth= {fourth}> </Menu>
    <Menu  state={"5"}  first={first} second={second} third={third} fourth= {fourth}> </Menu>
    <br></br>
    <Menuheading p1={p1[2]}></Menuheading>
    <Menu  state={"5"}  first={first} second={second} third={third} fourth= {fourth}> </Menu>

     </div>   
  </>
  );
}

export default App;
