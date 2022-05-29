import "./TrendingCompany.css"

export default function TrendingCompany(props) {

    return (
        <div className="trending-company">
            <img className="company-image" alt="" src={props.imgSrc} />
            <div className="gradient"></div>
            <div className="company-description">
                <div className="company-logo-container">
                    <img className="company-logo" src={props.logoSrc} alt=""></img>
                </div>
                <div className="company-title-container">
                    <span className="company-title">
                        <span className="company-header">{props.name}</span>
                    </span>
                    <span className="company-title">{props.info}</span>
                </div>
                <div className="price-container">
                    <span className="price">{props.currentPrice.toFixed(2)} €</span>
                </div>
            </div>
        </div >
    )
}