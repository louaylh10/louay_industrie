import React, { useState, useRef, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Contact() {
  
  return (
    <div className="Contact">
<h1 className='Titre'>Contact</h1>
<div className='cnt'>
    <h3 className='contactez'>Contactez-Nous</h3>
<form action='' >
    <div className='item-form'>
<input type='text' className='nom' placeholder='Nom' />
</div>
<div className='item-form'>
<input type='text' className='prenom' placeholder='Prenom' />
</div>
<div className='item-form'>
<input type='email' className='email' placeholder='Email' />
</div>
<div className='item-form'>
<input type='text' className='objet' placeholder='Object' />
</div>
<div className='item-form'>
<textarea className='mail' placeholder='Mail'>

</textarea>
</div>

<button type='submit' className='env'>Envoyer</button>
</form>


</div>
<div className='cnt'>

    <div className='contect'>
    <h3 className='contactez'>Contactez-Nous</h3>
    <div className='cent'>
<h3 className='items'><i class="fa-solid fa-phone"></i><span className='mail'>+216 28 815 988</span> </h3>
<h3 className='items'><i class="fa-solid fa-envelope"></i> <span className='mail'>lim_commercial@outlook.com</span></h3>
</div>
<br/>
<br/>
<h3 className='contactez'>Visitez</h3>
<div className='media'>
<div className='items sm'><div className='it'><a href=''><i class="fa-brands fa-facebook"></i></a></div></div>
<div className='items sm'><div className='it'><a href=''><i class="fa-brands fa-linkedin"></i></a></div></div>
</div>
</div>
</div>

    </div>
  );
}

export default Contact;
