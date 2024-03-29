
import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img1 from '../img/imgs/image1.jpg';
import img2 from '../img/imgs/image2.jpg';
import img3 from '../img/imgs/image3.jpg';
import img4 from '../img/imgs/image4.jpg';
function Gallery() {

  const rightClick = () => {
    const ims=document.querySelector(".imge:not(.invisible)");
    var imnext=ims.nextSibling;
    if(!imnext){
      imnext=document.querySelector('.imge:first-of-type');
    }
  ims.style.animation = 'rightout 0.5s';
  imnext.classList.remove('invisible');
  
  ims.classList.add("invisible");
  imnext.style.animation = 'rightin 0.5s';
  }
  const leftClick = () => {
    const ims=document.querySelector(".imge:not(.invisible)");
    var imprev=ims.previousSibling;
    if(!imprev){
      imprev=document.querySelector('.imge:last-of-type');
    }
    ims.style.animation = 'leftout 0.5s';
  imprev.classList.remove('invisible');
  ims.classList.add("invisible");
  imprev.style.animation = 'leftin 0.5s';

  }
  const handleKeyDown = (event) => {

    if (event.keyCode === 39) {
      rightClick();
    }
  };


  return (
    <div className="Gallery">
<h1 className='Titre'>Gallery</h1>
<div className='imgs-container'>
<div className='left' onClick={leftClick} ><i class="fa-solid fa-chevron-left"></i></div>
<div className='right'onClick={rightClick}><i class="fa-solid fa-chevron-right"></i></div>
<div className='cntr'>
<div className='imge'><img src={img1} alt='' /><h1 className='tite'>Réparation des fissures et changement d'un tronçon de virole</h1></div>
<div className='imge invisible'><img src={img2} alt='' /><h1 className='tite'>Entretien broyer ciment vertical</h1> </div>
<div className='imge invisible'><img src={img3} alt='' /><h1 className='tite'>Changement gain hgzor </h1></div>
<div className='imge invisible'><img src={img4} alt='' /><h1 className='tite'>Changement de gaine de gaze et calarofigage</h1></div>
</div>
</div>
    </div>
  );
}

export default Gallery;

