import React from 'react'

const About = () => {
  return (
    
          <div className=" col-md-10 text-center text-dark  mx-auto">
      
       <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 ">
       
            <h2 className="title-section">Projet de Mise en place d'une plateforme
pour le <span className="fg-success">Financement de projets </span> .</h2>

            <p>La ville de Dakar est une collectivité locale, chef lieu de la capitale Sénégalaise. 
              Elle épouse les contours du département de Dakar, elle est dotée d’une personnalité morale et d’une autonomie financière.
               La ville de Dakar a un budget annuel qui dépasse les 60 millions d’euros, soit 40 milliards de Francs CFA.
               Il s’agit ainsi de faciliter l’accès au financement pour les entrepreneurs généralement exclus du système financier classique, 
               afin de leur permettre de démarrer une activité génératrice de revenus ou d’en consolider une existante.</p>
          </div>
          <div className="col-lg-7 ">
            <div className="about-img">
            <img src={"/images/barth.jpg"}  alt="barth" />
            </div>
          </div>
        </div>
      </div> 
    </div> 
      {/* <div>
      <iframe width="700px" height="100%" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Dakar%2CSenegal+(Maire%20Dakar)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
      
      </div> */}
    </div>
  )
}

export default About