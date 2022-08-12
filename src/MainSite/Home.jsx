import React, { useEffect, useRef } from 'react'
import { BigHeader } from '../Components/TextComponents'
import './styles/Home.css'
import twitter from '../Assets/icons/uil_twitter.svg'
import discord from '../Assets/icons/logos_discord-icon.svg'
import inster from '../Assets/icons/simple-icons_instagram.svg'
import { ButtonMain } from '../Components/FormComponents'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  return (
    <div className='Home'>
          <FirstHero />
          <JustShoes/>
      </div>
  )
}

export default Home

function FirstHero() {
    useEffect(() => {
        const T4 = gsap.timeline()
        T4.fromTo(".heroOneIcons", {
            opacity: 0,
            y: -90
        }, {
            duration: 1.2,
            opacity: 1,
            y: 0
        })
        T4.fromTo(".boxes", {
            delay: 0.9,
            duration: .2,
            opacity: 0,
            y: 90,
            
        }, {
            opacity: 1,
            y: 0
        })
    })

    return (
        <div className="heroOne">
            <div className="heroOneWrap">
                <div className="heroOneIcons">
                    <a href="#"><img src={inster} alt="" /></a>
                    <a href="#"><img src={discord} alt="" /></a>
                    <a href="#"><img src={twitter} alt="" /></a>
                </div>
                <div className='boxes'><h1 className="heroOneText"> Our hands-free cloud service        
                helps you buy the hottest items
                from retailers when they restock.</h1></div>
            </div>
        </div>
    )
}

import shoe1 from '../Assets/images/one.png'
import shoe2 from '../Assets/images/secondimg.png'
import shoe3 from '../Assets/images/one.png'
import shoe4 from '../Assets/images/fourthImg.png'

function JustShoes() {
    const wrapper = useRef()
    const planes = useRef([])

    const createPanelsRef = (panel, index) => {
        planes.current[index] = panel
    }
    useEffect(() => {
        const totalPlanes = planes.current.length

        const t1 = gsap.timeline()

        const anim = gsap.to(planes.current, {
            xPercent: -100 * (totalPlanes - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPlanes - 1),
                end: () => '+=' + wrapper.current.offsetWidth
            }
        })


        AnimFirst(anim)
    }, [])
    return (
        <div className="ShoesSection" ref={wrapper} >
            <div className="contentsShoe">
                <div id="SectionZero" className="WrapShoe" ref={(e) => createPanelsRef(e, 0)}>
                    <div className="textBehind">
                        <div className="textBehindWrap">
                            <h1 className='shoeBigText'>COMING</h1>
                            <h1 className='shoeBigText shoeTextBottom'>SOON</h1>
                        </div>
                    </div>
                    <div className="OtherOverlay">
                        <div className="shoeImage">
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="moreInfomation">
                            <div className="moreWrap">
                                <ButtonMain color={'#FFF500'} text={'View More'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="SectionOne" className="WrapShoe" ref={(e) => createPanelsRef(e, 1)}>
                    <div className="textBehind">
                        <div className="textBehindWrap">
                            <h1 className='shoeBigText'>FOOTSITE</h1>
                            <h1 className='shoeBigText shoeTextBottom'>DROP</h1>
                        </div>
                    </div>
                    <div className="OtherOverlay">
                        <div className="shoeImage">
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="moreInfomation">
                            <div className="moreWrap">
                                <ButtonMain color={'#FFF500'} text={'View More'} />

                            </div>
                        </div>
                    </div>
                </div>
                <div id="SectionTwo" className="WrapShoe" ref={(e) => createPanelsRef(e, 2)}>
                    <div className="textBehind">
                        <div className="textBehindWrap">
                            <h1 className='shoeBigText'>SUPREME</h1>
                            <h1 className='shoeBigText shoeTextBottom'>DROP</h1>
                        </div>
                    </div>
                    <div className="OtherOverlay">
                        <div className="shoeImage">
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="moreInfomation">
                            <div className="moreWrap">
                                <ButtonMain color={'#FFF500'} text={'View More'} />

                            </div>
                        </div>
                    </div>
                </div>
                <div id="SectionThree" className="WrapShoe" ref={(e) => createPanelsRef(e, 3)}>
                    <div className="textBehind">
                        <div className="textBehindWrap">
                            <h1 className='shoeBigText'>AMAZON</h1>
                            <h1 className='shoeBigText shoeTextBottom'>DROP</h1>
                        </div>
                    </div>
                    <div className="OtherOverlay">
                        <div className="shoeImage">
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="moreInfomation">
                            <div className="moreWrap">
                                <ButtonMain color={'#FFF500'} text={'Join Waitlist'} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function AnimFirst(anim) {
    const Tline = gsap.timeline()
    Tline.fromTo(".shoeBigText", {
        opacity: 0,
        y: -90
    }, {
        opacity: 1,
        delay: 0.5,
        duration: 0.8,
        y: 0,
        scrollTrigger: {
            containerAnimation: anim,
            toggleActions: 'play none none reverse',
            trigger: ".shoeBigText",
            start: "top center",
        }
    })
}