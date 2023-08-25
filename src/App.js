// import logo from "./logo.svg";
import "./App.css";
// import About from "./Components/About";
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React , {useState} from 'react' ;

function App() {
  const [mode, setmode] = useState('light')
  const [btnText, setbtnText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)
  
  
  const showAlert = (message , type) => {
    setAlert({ //Alert is an Object now
      msg: message,
      type: type
    })

    setInterval(() => {
      setAlert();
    }, 2000);

  }

  const toggleTheme = ()=>{
    
    if(mode === 'light' ){
      setmode('dark');
      setbtnText("Disable Dark Mode");
      document.body.style.backgroundColor = 'black' ; 
      document.body.style.color = 'white' ;
      showAlert("Dark Mode Has Been Toggled" , "success");
      document.title =" dark mode enabled";

    }
    else{

      setmode("light");
      setbtnText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white' ; 
      document.body.style.color = 'black' ;
      showAlert("Light Mode Enabled" , "success");
      document.title ="TextUtils";
    }

  }

  // **************************************************************** RETURN STATEMENT***************************************************************
  return (
    <>
      <Navbar title = "Text Utility" aboutText="About TextUtils" togglemode={mode} toggleThemeProp={toggleTheme} btnTheme={btnText}/>

      <Alerts alertProp={alert}/>

      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm alertsProp = {showAlert} heading="Enter The Text To Analyse" togglemode={mode}/>
      </div>

      {/* <div className="container my-3">
        <About togglemode={mode}/>
      </div> */}
      
      
    </>
  )
}

export default App;
