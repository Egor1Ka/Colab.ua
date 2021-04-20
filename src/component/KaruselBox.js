import React from 'react';
import Carousel from'react-bootstrap/Carousel';
import img1 from '../img/124529330_985687041938341_999067651817800225_n.jpg';
import img2 from '../img/130819161_878002506362714_710305034601419215_n.jpg';
import img3 from '../img/133657527_2858346537743235_489688249927522856_n.jpg'
let CaruselBox =(props)=>{
    return(
        <div className = 'container' style={{width:'500px',paddingTop:'40px'}}>
        <Carousel>
            <Carousel.Item>
                <img className = 'd-block w-100' style ={{height:'500px'}}
                src={img1}
                ></img>
                <Carousel.Caption>
                    <h3>Colab.UA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className = 'd-block w-100' style ={{height:'500px'}}
                src={img2}
                ></img>
                <Carousel.Caption>
                    <h3>Colab.UA</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className = 'd-block w-100' style ={{height:'500px'}}
                src={img3}
                ></img>
                <Carousel.Caption>
                    <h3>Colab.UA</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        </div>
    )
}

export default CaruselBox;