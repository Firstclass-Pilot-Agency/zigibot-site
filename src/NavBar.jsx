import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { BigHeader, MedHeader } from './Components/TextComponents'
import { usePage } from './Contexts/PageContext'

function NavBar(props) {
    const style = {
        main: {
            position: 'fixed',
            width: '100%',
            height: '60px',
            padding: '0px 60px',
            zIndex: '5'
        },
        top: {
            height: '100%',
            borderBottom: `3px solid ${props.doneLoading ? '#FFF500' : 'black'}`,
        }
    }
    return (
        <div style={style.main}>
            <div style={style.top}></div>
            {props.doneLoading ? <></> : <ButttomLoadCount />}
        </div>
    )
}

export default NavBar
function ButttomLoadCount() {
    const { setPage } =  usePage()
    const [countNumber, setCountNumber] = useState(0)
    let n = 0
    useEffect(() => {
        const T1 = gsap.timeline()

        const countInterval = setInterval(() => {
            T1.fromTo('#LoadingNumber', {
                delay: 0,
                duration: 1,
                y: 0,
                opacity: 1,
            }, {
                delay: 0.3,
                opacity: 0.8,
                // y: -120,
                onComplete: () => {
                    if (parseInt(document.getElementById('LoadingNumber').innerText) >= 99) {
                        clearInterval(countInterval)
                        setCountNumber(100)
                        T1.kill()
                        return
                    }
                    setCountNumber(prevCount => prevCount + Math.floor(1 + Math.random() * 10) > 100 ? 100 : prevCount + Math.floor(1 + Math.random() * 10))
                }
            })
        },500)

    }, [])
    return (
        <>
            <div className="BLC_wrap">
                <div className="number">
                    <BigHeader id={'LoadingNumber'}>{countNumber}</BigHeader>
                </div>
            </div>
        </>
    )
}