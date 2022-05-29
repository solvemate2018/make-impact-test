import "./TabBar.css"

export default function TabBar(props) {

    return (
        <div className="tab-navigation">
            <div className="navigation">
                <img className="navigation-icon active" src="\Assets\match-svgrepo-com.svg" alt="" />
                <span className="navigation-text active" >Matches</span>
            </div>
            <div className="navigation">
                <img className="navigation-icon" src="Assets\Tracé 173.svg" alt="" />
                <span className="navigation-text">News</span>
            </div>
            <div className="navigation">
                <img className="navigation-icon" src="Assets\Tracé 193.svg" alt="" />
                <span className="navigation-text">Invest</span>
            </div>
            <div className="navigation">
                <img className="navigation-icon" src="Assets\Tracé 522.svg" alt="" />
                <span className="navigation-text">Academy</span>
            </div>
            <div className="navigation">
                <img className="navigation-icon" src="Assets\Tracé 235.svg" alt="" />
                <span className="navigation-text">M!Club</span>
            </div>
        </div>
    )
}