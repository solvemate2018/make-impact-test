import BackNavigation from "../../components/BackNavigation.tsx";
import ListItem from "../../components/ListItem.tsx";
import "./Sectors.css"

export default function Sectors() {
    return (
        <div className="container">
            <div className="header">
                <span className="title">
                    Sectors
                </span>
            </div>
            <div className="commitments">
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\financial service.jpeg" text="Financial Services π¦" />
                    <ListItem imgsrc="\Assets\alternative energy.jpeg" text="Alternative EnergyβοΈ" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\general retailers.jpeg" text="General Retailers πͺ" />
                    <ListItem imgsrc="\Assets\forestry paper.jpeg" text="Forestry & Paper π" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\drugs _ retailers.jpeg" text="Food & Drug Retailers π" />
                    <ListItem imgsrc="\Assets\support services.jpeg" text="Support Services π©βπ»" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\personal goods.jpeg" text="Personal Goods ποΈ" />
                    <ListItem imgsrc="\Assets\aerospace _ defense.jpeg" text="Aerospace & Defense βοΈ" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\general retailers.jpeg" text="General Retailers πͺ" />
                    <ListItem imgsrc="\Assets\forestry paper.jpeg" text="Forestry & Paper π" />
                </div>
            </div>
            <BackNavigation />
        </div>
    )
}