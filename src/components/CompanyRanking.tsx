import "./CompanyRanking.css"
import RankingCompany from "./RankingCompany.tsx"

export default function CompanyRanking(props) {
    return (
        <div className="company-ranking-container">
            <div className="company-ranking-title-container">
                <span className="company-ranking-title">{props.title}</span>
                <span className="view-all-link">View All</span>
            </div>
            <div className="company-ranking-companies">
                {props.companies.map((company) => {
                    return <RankingCompany company={company}></RankingCompany>
                })}
            </div>
        </div>
    )
}