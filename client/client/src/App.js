import React, { useState } from 'react'
import dog from './images/dog.avif'
import Home from './Components/Home';
import Test from './Components/Test';
import TryImageWave from './Components/TryImageWave';
import GeneratedImages from './Components/GeneratedImages';
import OuterTry from './Components/OuterTry';
import AccessToken from './Components/AccessToken';
import { BrowserRouter, Routes, Route, useParams, useNavigate} from "react-router-dom";


const App = () => {

  const[image, setImage] = useState(dog);
  const[prompList, setPromptList] = useState([]);
  const[prompt, setPrompt] = useState("");
  const[auth, setAuth] = useState(false);

  const imageClicked = (image, prompList)=>{
    setImage(image);
    setPromptList(prompList)
  }

  const sendClicked = (p)=>{
    setPrompt(p);
  }

  const authUser = (p)=>{
    setAuth(true);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/access-token" element={<AccessToken authUser={authUser}/>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/tryImageWave" element={!auth? <AccessToken authUser={authUser} />:<TryImageWave image={image} prompList={prompList}/>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/outerTry" element={!auth? <AccessToken authUser={authUser} />:<OuterTry prompt={prompt}/>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/generatePage" element={!auth? <AccessToken authUser={authUser} />:<GeneratedImages imageClicked={imageClicked} sendClicked={sendClicked}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
