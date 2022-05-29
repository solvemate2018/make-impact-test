import "./ListItem.css"


export default function ListItem(props) {
    const imgSource = props.imgsrc;
    const text = props.text
    return (
        <div className="commit-container">
            <div className="img-container">
                <img src={imgSource}
                    className="image" alt=""></img>
            </div>
            <div className="sub-info">
                <div className="text-container">
                    <span className="text">
                        {text}
                    </span>
                </div>
                <div className="icon-container">
                    <img className="icon" src="\Assets\Tracé 998.svg" alt="" />
                </div>
            </div>
        </div>
    )
}