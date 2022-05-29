import BackNavigation from "../../components/BackNavigation.tsx";
import ListItem from "../../components/ListItem.tsx";
import "./Commitments.css"

export default function Commitments() {
    return (
        <div className="container">
            <div className="header">
                <span className="title">
                    Commitments
                </span>
            </div>
            <div className="commitments">
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\commits\teo-sticea-9h68gHvGVyI-unsplash.png" text="Climate Smart Agric" />
                    <ListItem imgsrc="\Assets\commits\victoria-palacios-dfo06_DqxpA-unsplash.png" text="Remove Deforestation" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\commits\maxim-shklyaev-hvBv9Lc0QAE-unsplash.png" text="Reduce SLCP’s" />
                    <ListItem imgsrc="\Assets\commits\claudel-rheault-ZVbv1akA-l4-unsplash.png" text="Global Top 100" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\commits\pawel-czerwinski-JdtUKqGdqw8-unsplash.png" text="Science Based Target" />
                    <ListItem imgsrc="\Assets\commits\annie-spratt-1rkWwZXMHiI-unsplash.png" text="UN Global Compact" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\commits\nicholas-doherty-1Io-H4Wd--o-unsplash.png" text="RE100" />
                    <ListItem imgsrc="\Assets\commits\ryan-searle-oeSxn9z_15I-unsplash.png" text="Responsible Climate Policy" />
                </div>
                <div className="commit-line">
                    <ListItem imgsrc="\Assets\commits\akira-hojo-ZxGdri2EWzk-unsplash.png" text="Improve Water Security" />
                    <ListItem imgsrc="\Assets\commits\nathan-dumlao-NLrmqje6MpA-unsplash.png" text="Carbon Pricing Leadership coalition" />
                </div>
            </div>
            <BackNavigation />
        </div>
    );
}