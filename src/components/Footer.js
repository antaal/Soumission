import React from 'react'

const Footer = () => {
  return (
    <div className="col-12 mx-auto  bg-primary">
    <div className="row">
      <div className="col">
      <img src={"images/logo1.png"} alt='rectangle' className='rectangle center'/>
      <a href="Accueil"><h5 className='text-light'>Ville de Dakar.</h5></a>
      </div>
      <div className="col">
        <h1>Coordonnées</h1>
        <p>QG6R+J5P, Boulevard Djily Mbaye 
 Robert Delmas, Dakar</p>
 <p> Email:email@gmail.com</p>
 <p>Télephone:777777700</p>
      </div>
      <div className="col">
        <h1>Newsletter</h1>
        <form>
  <div className="mb-3 col-lg-6">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Entrer Votre Email'/>
  </div>
  <button type="submit" className="btn btn-light text-primary text-bold">Envoyer</button>
</form>
      </div>
    </div>
  </div>
  )
}

export default Footer