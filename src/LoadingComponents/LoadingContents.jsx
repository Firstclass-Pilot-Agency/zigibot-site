import { BigHeader, SmallText } from "../Components/TextComponents";
import JustZigi from '../Assets/logoAssets/ZigiBotOnly.svg'
import MainLogo from '../Assets/logoAssets/MainLogo.svg'
import '../Styles/LoadingContents.css'
import { useEffect } from "react";
import gsap from "gsap";
import NavBar from "../NavBar";
import { usePage } from "../Contexts/PageContext";

export function RandomTextSection() {
    const { setPage } = usePage()
    useEffect(() => {
        const T2 = gsap.timeline({ defaults: { duration: 0.7, ease: "elastic" } })
        T2.fromTo(".RandBox", {
            y: 120,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 3,
        })
        T2.fromTo(".RandBox1", {
            y: 120,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 1,
        }, "<")
        T2.fromTo(".closeRand", {
            height: 0,
            opacity: 0
        }, {
            delay: 5,
            height: '100vh',
            duration: 0.7,
            ease: 'none',
            opacity: 1,
        })
        T2.fromTo(".closeRandYellow", {
            height: 0,
            opacity: 0
        }, {
            delay: .3,
            height: '100vh',
            duration: 0.5,
            ease: 'none',
            opacity: 1,
            onComplete: () => {
                setPage(1)
                return
            }
        }, "<25%")
    }, [])
    return (
        <>
            <NavBar />
            <div className="closeRand"></div>
            <div className="closeRandYellow"></div>
            <div className="RandomTextLoading">
                <div className="RandBox"><BigHeader class={'rands'}>At Zigi </BigHeader></div>
                <div className="RandBox1"><SmallText class={'rands'}>you get it first n' you get it faster</SmallText></div>
            </div></>
    )
}

export function JustMainLogo() {
    const { setPage } = usePage()
    useEffect(() => {
        const T3 = gsap.timeline()
        T3.fromTo(".JustMainLogoImg", {
            opacity: 0,
            y: -90
        }, {
            duration:1.2,
            opacity: 1,
            y: 0
        })
        T3.fromTo(".JustMainLogoImg", {
            opacity: 1,
            y: 0
        }, {
            delay: 0.9,
            duration: .2,
            opacity: 0,
            y: 90,
            onComplete: () => {
                setPage(2)
            }
        })
    })
    return (
        <div className="JustMainLogo">
            <img className="JustMainLogoImg" src={JustZigi} alt="" />
        </div>
    )
}

export function ShowLogoMain() {
    const { setPage } = usePage()

    useEffect(() => {
        const T3 = gsap.timeline()
        T3.fromTo(".ShowLogoMainImg", {
            opacity: 0,
            y: 50
        }, {
            delay: 1,
            duration: 1,
            opacity: 1,
            y: 0
        })
        T3.fromTo(".ShowLogoMainImg", {
            delay: 1,
        }, {
            delay: 2,
            onComplete: () => {
                setPage(2)
            }
        })
    })
    return (
        <div className="ShowLogoMain">
            <img className="ShowLogoMainImg" src={MainLogo} alt="" />
        </div>
    )
}