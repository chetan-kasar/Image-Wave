import React, { useEffect, useState } from 'react';
import { saveAs } from 'file-saver'
import axios from 'axios'
import send from '../images/send.png';
import girl from '../images/girl.png'

const TryImageWave = (props) => {

    const[prompt, setPrompt] = useState("");
    const[imageUrl, setImageUrl] = useState(props.image);
    const intervalIdRef = useRef(null);

    const parts = props.image.split('.');
    const extension = parts.shift();
    const uniqueId = extension.split('/').pop();

    const ele = props.prompList.find(item => item._id === uniqueId); // find prompt for imageName === id

    const stopInterval = () => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      };

    const myFunction = () => {
        axios.post("https://iw-server.onrender.com/generated_image").then(
            response=>{
                if(response.data === "not")
                {
                    console.log("Image not generated yet");
                }
                else
                {
                    setImageUrl(`data:image/jpeg;base64,${response.data}`);
                    stopInterval();
                }
            }
        )
      };
    
    const startInterval = () => {
        const id = setInterval(myFunction, 8000);
        intervalIdRef.current = id;
    };
    
    const handleClick = ()=>{
       setImageUrl("");
        axios.post("https://iw-server.onrender.com/home", {prompt}).then(
            response=>{
                // setImageUrl(`data:image/jpeg;base64,${response.data}`);
                console.log(response.data);
            }
        )
        startInterval();
    }

    const downloadImage = () => {
        saveAs(imageUrl, 'image.png') 
      }
    
    const shareImage = async() => {

        const data = {
            imageUrl: imageUrl,
            prompt:prompt,
        }

        axios.post("https://image-wave-server.vercel.app/shareImage", {data}).then(
            response=>{
                console.log(response.data);
            }
        ).catch(error=>{
            console.log(error);
        })
    }

    const rotate = ()=>{

    }

    

  return (
    <div className='try-window'>

        <div className='output-window'>
        {!imageUrl ? 
                <div class="center">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                </div>
                :
                <>
                    <img src={imageUrl} className='output-img'/>
                    <div className='output-btns'>
                        <button className='btn download-btn' onClick={downloadImage}>Download</button>
                        <button className='btn share-btn' onClick={shareImage}>Share</button>
                        <button className='btn share-btn'>Favorite</button>
                        <button className='btn share-btn'>Rotate</button>
                    </div>
                </>
            }
        </div>

        <div className='prompt-div'>
          <input text="text" placeholder="Describe image you want to generate...." onChange={(e)=>{setPrompt(e.target.value)}} className='prompt'/>
          <img onClick={handleClick} src={send} className='send-btn'/>
        </div>

    </div>
  )
}

export default TryImageWave
