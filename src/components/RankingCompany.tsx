import "./RankingCompany.css"

export default function RankingCompany(props) {
    const background = props.company.picturePath ? true : false;

    return (
        <div className={background ? "ranking-company" : "ranking-company-simple"}>
            {background &&
                <img className="ranking-company-image" alt="" src={props.company.picturePath} />
            }
            {background &&
                <div className="ranking-gradient"></div>
            }
            <img className="ranking-company-logo" src={props.company.logoPath} alt=""></img>
            <div className="ranking-company-info">
                <span className="ranking-company-title">{props.company.name}</span>
                <span className="ranking-company-price">{props.company.price.toFixed(2)} €</span>
            </div>
        </div >
    )
}