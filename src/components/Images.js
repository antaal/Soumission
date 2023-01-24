// import React, { Component } from "react";
// import axios from "axios";
 
// export default class Images extends Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       images: [],
//     };
//   }
 
//   componentDidMount() {
//     this.getImages();
//   }
 
//   getImages = () => {
//     axios
//       .get("http://localhost:8000/api/images")
//       .then((response) => {
//         if (response.status === 200) {
//           this.setState({
//             images: response.data.data,
//           });
//           console.log(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
 
//   render() {
//     return (
//       <div className="container pt-4">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="card shadow">
//               <div className="card-header">
//                 <h4 className="card-title fw-bold"> Images List </h4>
//               </div>
//               <div className="card-body">
//                 <div className="row">
 
//                   {
//                     this.state.images.length > 0 ? (
//                         this.state.images.map((image) => (
//                         <div className="col-xl-6 col-lg-8 col-sm-12 col-12 mt-3" key={image.id}>
//                             <img src={ "http://localhost:8000/uploads/" + image.image_name } className="img-fluid img-bordered" width="200px"
//                             />
//                         </div>
//                         ))
//                     ) : (
//                         <h6 className="text-danger text-center">No Image Found </h6>
//                     )
//                   }
 
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row mb-2" onClick={handleClick}>
//       <div className="col-md-6">
//         <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
//           <div className="col p-4 d-flex flex-column position-static">
//             <strong className="d-inline-block mb-2 text-primary">World</strong>
//             <h3 className="mb-0">{offre.titre}</h3>
//             <div className="mb-1 text-muted">{offre.date_Lancement} |{offre.fin_Depot} </div>
//             <p className="card-text mb-auto">{offre.description}</p>
//             <h5 className="mb-0">{offre.secteur}</h5>
//             <a href="#" className="stretched-link">Continue reading</a>
//           </div>
//           <div className="col-auto d-none d-lg-block">
//             <img className="bd-placeholder-img" width="200" height="250" src={`http://localhost:8000/storage/${offre.image}`} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
//               <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></img>
      
//           </div>
//         </div>
//       </div>
      
//       </div>
//     );
//   }
// }