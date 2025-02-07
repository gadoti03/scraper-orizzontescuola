import React, { useRef } from 'react'

import './Testimonials.css'

import next_icon from '../../assets/right_arrow_testimonials.png'
import back_icon from '../../assets/left_arrow_testimonials.png'
import donna from '../../assets/donna.png'
import uomo from '../../assets/uomo.png'

const Testimonials = () => {
    const slider = useRef();

    let tx = 0; /*traslateX*/

    const slideFoward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideFoward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={uomo} alt="" />
                            <div>
                                <h3>Giuseppe Scartone</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>Grandi professionisti. Mi sono trovato bene con le certificazioni e con la laurea. Professionalità e gentilezza le parole chiave! Grazie ragazzi. Continuate così!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={donna} alt="" />
                            <div>
                                <h3>Marianna Riviello</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>Personale qualificato, ottimo servizio!!</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={uomo} alt="" />
                            <div>
                                <h3>Salvatore Iuele</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>5/5.</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={uomo} alt="" />
                            <div>
                                <h3>Michele Cammarota</h3>
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <p>5/5.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials