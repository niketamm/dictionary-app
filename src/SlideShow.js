import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function SlideShow(props){
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

if (props.imageData){
    return (
        <div className="SlideShow">
            <Carousel activeIndex={index} onSelect={handleSelect}  interval={null}>
            <Carousel.Item>
                <img
                 className="d-block w-100 SlideShow"
                 src={props.imageData.photos[0].src.landscape}
                 alt="First"/>
                <Carousel.Caption>
                This {" "}
                <a href={props.imageData.photos[0].url}>
                    Photo</a> was taken by {" "}
                <a href={props.imageData.photos[0].photographer_url}>
                    {props.imageData.photos[0].photographer}</a> on Pexels.
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                 className="d-block w-100 SlideShow"
                 src={props.imageData.photos[1].src.landscape}
                 alt="First"/>
                <Carousel.Caption>
                This {" "}
                <a href={props.imageData.photos[1].url}>
                    Photo</a> was taken by {" "}
                <a href={props.imageData.photos[1].photographer_url}>
                    {props.imageData.photos[1].photographer}</a> on Pexels.
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                 className="d-block w-100 SlideShow"
                 src={props.imageData.photos[2].src.landscape}
                 alt="First"/>
                <Carousel.Caption>
                This {" "}
                <a href={props.imageData.photos[2].url}>
                    Photo</a> was taken by {" "}
                <a href={props.imageData.photos[2].photographer_url}>
                    {props.imageData.photos[2].photographer}</a> on Pexels.
                </Carousel.Caption>
            </Carousel.Item>

            
            </Carousel>
    </div>
  );
    }
    else {return null}
}