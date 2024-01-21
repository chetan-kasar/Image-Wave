import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import AsianGirl from '../images/Asian girl.png';
import penguin from '../images/penguin.png';
import robot from '../images/robot.png';
import owl from '../images/owl.png';
import girl from '../images/girl.png';
import tree from '../images/tree.png';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/access-token')
      //navigate('/generatePage');
    };

  return (
    <div>
        <div className='top-window'>
          
            <div className='container-1'>
              <div className='logo-container'>
                <img src={logo} className='logo'/>
                <h1 className='title-name'>Image Wave</h1>
              </div>
              
                <h1 className='heading'>Create pictures from descriptions with Text to Image.</h1>
                <p className='para'>Do you dream of seeing a long-haired dachshund with flowing rainbow hair? Or flowers growing out of concrete in a lost city? Whatever you imagine, if you can describe it, you can create it fast using Text to Image in Image Wave.</p>
                <button className='btn try-btn' onClick={handleClick}>Try Text to Image</button>
            </div>

            <div className='container-2'>
            
                <div id="carouselExampleIndicators" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>

                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <input type='text' value='Cute little robot artist painting on an easel 3d' className='demo-input'></input>
                      <img src={robot} class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                      <input type='text' value='Cute baby penguin wearing a red hat and scarf' className='demo-input'></input>
                      <img src={penguin} class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                      <input type='text' value='Asian girl wearing a kimono holding a Japanese umbrella in the snow with a Japanese pagoda in the background, anime' className='demo-input'></input>
                      <img src={AsianGirl} class="d-block w-100" alt="..."/>
                    </div> 
                  </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </div>
        </div>

        <div className='middle-window-1'>
          <h4 className='middle-heading'>Explore the Text to Image possibilities.</h4>
          <p className='middle-para'>Check out these stunning Wave images and the text prompts that generated them. Then start dreaming up your own prompts.</p>
        
          <div className='demo-imgs'> 
            <div>
              <img src={owl}/>
              <p>Generate an illustration of a baby owl with big eyes made of pretty feathers, clouds</p>
            </div>

            <div>
              <img src={tree}/>
              <p>Full leafed oak tree of life in spring with exposed roots floating above water</p>
            </div>

            <div>
              <img src={girl}/>
              <p>Young woman on a bench in a park reading a book</p>
            </div>
          </div>

          <div className='desc'>
            <h3>Discover the magic of Image Wave Text to Image</h3>
            <p>When used as an AI art generator, Image Wave makes creative exploration easier and faster for everyone. Use Text to Image to experiment with your wildest ideas, find new sources of inspiration, or create eye-catching content in just a few words.</p>
          </div>
        </div>

        <div className='middle-window-2'>
          <h3>Dream Bigger with Image Wave.</h3>
          <p>Imagine, experiment, and create with generative AI in the Image Wave web app. New to Creative Cloud, now available for commercial use.</p>
          <button className='learn-more'>Learn More</button>
        </div>

        <div className='copy-right'>
          <p>&copy; Chetan Kasar</p>
        </div>

    </div>
  )
}

export default Home
