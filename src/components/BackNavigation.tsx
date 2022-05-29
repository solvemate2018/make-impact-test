import "./BackNavigation.css"

export default function BackNavigation() {
    return (
        <div>
            <div className="clear"></div>
            <div className="back-navigation">
                <div className="back-navigation-shadow">
                    <div className="back-button">
                        <img className="back-icon" src="Assets\Copie de Tracé 61.svg" alt="" />
                        <span className="back-text">Back</span>
                    </div>
                </div>
            </div>
        </div>
    )
}