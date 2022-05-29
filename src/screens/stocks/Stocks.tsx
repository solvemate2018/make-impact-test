import "./Stocks.css"
import BackNavigation from "../../components/BackNavigation.tsx"
import ListItem from "../../components/ListItem.tsx"
import Stock from "../../components/Stock.tsx"

export default function Stocks() {
    return (
        <div className="container">
            <img className="header" src="\Assets\alternative energy.jpeg" alt=""></img>
            <div className="title-container">
                <span className="stock-title">☀ Alternative Energy</span>
                <img className="question-icon" src="\Assets\Tracé 998.svg" alt="" />
            </div>
            <div className="stocks">
                <Stock name="Atlantica Yield" price={82.69} logoPath="\Assets\atlantica yield.png"></Stock>
                <Stock name="Scatec Solar" price={134.69} logoPath="\Assets\scatec solar.png"></Stock>
                <Stock name="Siemens Gamesa" price={26.53} logoPath="\Assets\siemens gameza.png"></Stock>
                <Stock name="Vestas" price={24.26} logoPath="\Assets\unilever.png"></Stock>
            </div>
            <BackNavigation />
        </div>
    )
}