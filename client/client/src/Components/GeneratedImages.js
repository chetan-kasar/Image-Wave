import React, { useEffect, useState } from 'react'
import send from '../images/send.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const GeneratedImages = (props) => {
    const[prompt, setPrompt] = useState("");
    const[promptList, setPromptList] = useState([]);
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('./generatedImages', false, /\.(png)$/));

    const navigate = useNavigate();

    useEffect(() => {
      console.log("findPrompts");
      axios.post("https://image-wave-server.vercel.app/findPrompts").then(
          response=>{
              setPromptList(response.data);
          }
      ).catch((errpr)=>{
        
      })
    }, []);

  return (
    <div className='genrated-img-window'>

        <div className='genrated-img-top'>
            {
                images.map((image, i)=>{
                    return (
                        <img src={image} className='genrated-img' onClick={()=>{props.imageClicked(image, promptList); navigate('/tryImageWave');}}/>
                    )
                })
            }
        </div>

        <div className='prompt-div'>
          <input text="text" placeholder='Describe image you want to generate...' onChange={(e)=>{setPrompt(e.target.value)}} className='prompt'/>
          <img src={send}  onClick={()=>{props.sendClicked(prompt); navigate('/outerTry');}} className='send-btn'/>
        </div>
    </div>
  )
}

export default GeneratedImages
