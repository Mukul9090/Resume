
import './App.css';
import Navbar from './Component/Navbar';
import Menu from './Component/Menu';
import Menuheading from './Component/Menuheading';


let p1=[<>Deep Learning</>,<>Web Development</>,<>Education Details</>];

let first1 = [<>News Live App</>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let first2 = [<>Text Utils</>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let first = [<>Covid Cases Detection From CT Scan Using CNN </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let second = [<>Stock Price Pridiction using LSTM </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let third = [<>Skin Cancer Detection using CNN  </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

let fourth = [<>Image-colorization using Auto Encoders </>,<>This is a text in the first line;<br />this is a text in a second line <br /></> ,<>This is a text in the first line;<br />this is a text in a second line</> ];

function App() {
  return (
  <>
    <Navbar> </Navbar>

    <div className="container my-3">
    <button type="button" class="btn btn-success" ><h3>Projects</h3></button>
    
    <Menuheading p1={p1[0]}></Menuheading>

    <Menu  state={"1"}  first={first} second={second} third={third} fourth= {first[0]}> </Menu>
    <Menu  state={"2"}  first={first} second={second} third={third} fourth= {second[0]}> </Menu>
    <Menu  state={"3"}  first={first} second={second} third={third} fourth= {third[0]}> </Menu>
   
    <Menuheading p1={p1[1]}></Menuheading>

    <Menu  state={"4"}  first={first} second={second} third={third} fourth= {first1[0]}> </Menu>
    <Menu  state={"5"}  first={first} second={second} third={third} fourth= {first2[0]}> </Menu>
    <br></br>
    <br></br>
    <button type="button" class="btn btn-success" ><h5>Education</h5></button>
    
    <Menu  state={"6"}  first={first} second={second} third={third} fourth= {p1[2]}> </Menu>

    
     </div>   
  </>
  );
}

export default App;
