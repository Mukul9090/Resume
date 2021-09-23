import "./App.css";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import Menuheading from "./Component/Menuheading";

let p1 = [<>Deep Learning</>, <>Web Development</>, <>Education Details</>];

let first1 = [
  <>
    Netflix Clone{" "}
    <a href="https://netflix-clone-2414b.web.app/" target="_blank">
      <right>Live</right>
    </a>
  </>,
  <>
    Developed and <b>deployed</b> a Netflix clone application which fetches API
    results and renders using<b> React Js.</b>
    <br />
    <br />
    The app replicates Netflix front end features of Netflix and shows trailers
    of movies selected using<b> react-youtube type-script.</b> <br />
    <br />
  </>,
  <>
    All the features of the application are deployed using{" "}
    <b>Google Firebase.</b>
  </>,
];

let first2 = [
  <>Text Utils</>,
  <>
    This is a text in the first line;
    <br />
    this is a text in a second line <br />
  </>,
  <>
    This is a text in the first line;
    <br />
    this is a text in a second line
  </>,
];

let first = [
  <>Covid Cases Detection From CT Scan Using CNN </>,
  <>
    This is a text in the first line;
    <br />
    this is a text in a second line <br />
  </>,
  <>
    This is a text in the first line;
    <br />
    this is a text in a second line
  </>,
];

let second = [
  <>
    Stock Price Pridiction using LSTM{" "}
    <a
      href="https://github.com/Mukul9090/Skin_Cancer_detection_CNN"
      target="_blank"
    >
      <right>Project Link</right>
    </a>
  </>,
  <>
    Trained a model on the sequence of Apple stock prices of 300 days which
    predicts the stock price for the next 15 days. The model is trained using
    the Long Short-Term Memory [LSTM] set of neural networks. <br />
    <br />
    The model predicts the results based on previous time-series data points, it
    is impossible to predict the correct exact price of a stock as it depends on
    the volume, perhaps it represents the<b> future trend direction</b> of the
    stock price.
    <br /> <br />
  </>,
  <>
    Used <b>Numpy,Pandas</b> for Data Pre-processing ,<b>Matplotlib </b> for
    graph representation ,<b>Keras</b> for implementation of Neural Networks.
  </>,
];

let third = [
  <>
    Skin Cancer Detection using CNN{" "}
    <a
      href="https://github.com/Mukul9090/LSTM-Stock-price-pridiction"
      arget="_blank"
    >
      <right>Project Link</right>
    </a>{" "}
  </>,
  <>
    Trained a model with more than <b>7500 samples </b> of 6 different types of
    skin cancer dataset images. The model has been trained using Auto-Keras
    which trains and tests using different predesigned C-NN models which has
    increased the model accuracy significantly to <b>93%.</b> <br />
    <br />
    The model takes a picture of a skin affected with cancer as an input and
    passes it with a pre pre-trained set of neural network architecture which
    results in the identifying of the type of cancer.
    <br />
    <br />
  </>,
  <>
    I am in the process of <b>deploying</b> this model and I firmly believe that
    deep learning has a lot of potential to automate{" "}
    <b>image classification and object detection</b> tasks. I believe this
    project improves the accuracy and efficiency in the diagnosis of skin
    cancers.
    <br />
    <br />
  </>,
  <>
    Used <b> Numpy,Pandas</b> for Data Pre-processing , <b>Keras</b> for
    implementation of Neural Networks.
  </>,
];

let sk = [
  <>Details</>,
  <>
    <b>Python, C++, Javascript, Deep Learning, React.Js, HTML, Deployment. </b>
  </>,
];

let ed = [
  <>NA</>,
  <>
    <b>York University</b> B.S Computer Science
  </>,
];

let co = [
  <></>,
  <>
    <b>Data Structures and Algorithms : (98% overall score)</b> 
  </>,
];

function App() {
  return (
    <>
      <Navbar> </Navbar>

      <div className="container my-3">
        <button type="button" class="btn btn-success">
          <h3>Projects</h3>
        </button>

        <Menuheading p1={p1[0]}></Menuheading>

        <Menu
          state={"1"}
          first={third}
          second={second}
          third={third}
          fourth={third[0]}
        >
          {" "}
        </Menu>

        <Menu
          state={"2"}
          first={second}
          second={second}
          third={third}
          fourth={second[0]}
        >
          {" "}
        </Menu>

        <Menuheading p1={p1[1]}></Menuheading>

        <Menu state={"4"} first={first1} fourth={first1[0]}>
          {" "}
        </Menu>

        <br></br>
        <button type="button" class="btn btn-success">
          <h5>Skills</h5>
        </button>

        <Menu state={"6"} first={sk} fourth={sk[0]}>
          {" "}
        </Menu>

        <br></br>
        <button type="button" class="btn btn-success">
          <h5>Education</h5>
        </button>

        <Menu state={"71"} first={ed} fourth={sk[0]}>
          {" "}
        </Menu>


        <br></br>
        <button type="button" class="btn btn-success">
          <h5>Courses</h5>
        </button>

        <Menu state={"74"} first={co} fourth={sk[0]}>
          {" "}
        </Menu>
      </div>
    </>
  );
}

export default App;
