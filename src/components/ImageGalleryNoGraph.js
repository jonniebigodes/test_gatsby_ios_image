import React from 'react'
import './ImageGallery.css'
import birdcage from '../images/birdcage.jpg'
import boat from '../images/boat.jpg'
import bikes from '../images/cyclists.jpg'
import dogs from '../images/great_dane.jpg'
import gg from '../images/great_gatsby.jpg'
import greedo from '../images/greedo.jpg'
import choppa from '../images/kcgc.jpg'
import boots from '../images/sandy-boots.jpg'
import cat from '../images/tesla-cat.jpg'
import tree from '../images/tree.jpg'
const ImageGalleryNoGraph = () => (
  <div className="container">
    <img src={birdcage} className="item" alt="bird" />
    <img src={boat} className="item" alt="boat" />
    <img src={bikes} className="item" alt="bikers" />
    <img src={dogs} className="item" alt="dog dane" />
    <img src={gg} className="item" alt="great gatsby" />
    <img src={greedo} className="item" alt="greedo" />
    <img src={choppa} className="item" alt="get to the choppa" />
    <img src={boots} className="item" alt="boots" />
    <img src={cat} className="item" alt="cat" />
    <img src={tree} className="item" alt="tree" />
  </div>
)
export default ImageGalleryNoGraph
