import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
window.Swal = Swal
const toast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton: false,
    timer:3000,
    timerProgresBar: true,
})
window.toast = toast

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <App />
    </BrowserRouter>

   

  
);


