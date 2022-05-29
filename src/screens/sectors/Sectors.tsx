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
                    <ListItem imgsrc="\Assets\financial service.jpeg" text="Financial Services 🏦" />
                    <ListItem imgsrc="\Assets\alternative energy.jpeg" text="Alternative Energy☀️" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\general retailers.jpeg" text="General Retailers 🏪" />
                    <ListItem imgsrc="\Assets\forestry paper.jpeg" text="Forestry & Paper 🍁" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\drugs _ retailers.jpeg" text="Food & Drug Retailers 💊" />
                    <ListItem imgsrc="\Assets\support services.jpeg" text="Support Services 👩‍💻" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\personal goods.jpeg" text="Personal Goods 🛍️" />
                    <ListItem imgsrc="\Assets\aerospace _ defense.jpeg" text="Aerospace & Defense ✈️" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\general retailers.jpeg" text="General Retailers 🏪" />
                    <ListItem imgsrc="\Assets\forestry paper.jpeg" text="Forestry & Paper 🍁" />
                </div>
            </div>
            <BackNavigation />
        </div>
    )
}