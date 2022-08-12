export function BigHeader(props) {
    const style = {
        text: {
            fontSize: '100px',
            fontWeight: '800',
            color: props.color,
        }
    }
    return (
        <p id={props.id} className={props.class} style={style.text}>{props.children}</p>
    )
}

export function MedHeader(props) {
    const style = {
        text: {
            fontSize: '60px',
            fontWeight: '600',
            color: props.color,
            
        }
    }
    return (
        <p style={style.text}>{props.children}</p>
    )
}


export function SmallText(props) {
    const style = {
        text: {
            fontSize: '20px',
            fontWeight: '500',
            color: props.color,
        }
    }
    return (
        <p style={style.text}>{props.children}</p>
    )
}
