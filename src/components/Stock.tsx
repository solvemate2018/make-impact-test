import "./Stock.css"

export default function Stock(props) {
    return (
        <div className="stock-body">
            <div className="right-part">
                <img className="stock-logo" src={props.logoPath} alt=""></img>
                <div className="stock-info">
                    <span className="stock-name">{props.name}</span>
                    <span className="stock-name stock-price">{props.price} €</span>
                </div>
            </div>
            <div className="movingon-button">
                <img className="forward-icon" src="Assets\Copie de Tracé 61.svg" alt="" />
            </div>
        </div>
    )
}