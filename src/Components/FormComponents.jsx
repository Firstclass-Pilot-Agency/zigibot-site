import './style/FromComponents.css'
import arrowIcon from  './../Assets/icons/Arrow.svg'
export function ButtonMain(props) {
    const style = {
        main: {
            background: props.color || 'none',
            cursor: 'pointer',
        },
        text: {
            color: props.textColor || 'black'
        }
    }
    return (
        <button className="ButtonMain" style={style.main} onClick={props.action || null}>
            <div className="wrapButton">
                <p style={style.text}>{props.text}</p>
                <div className="sideBox">
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
        </button>
    )
}