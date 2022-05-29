import "./AdditionalInfo.css"

export default function AdditionalInfo() {
    return (
        <div className="notification-container">
            <div className="notification-body">
                <div className="notification-content">
                    <span className="notification-title">☀ Alternative Energy</span>
                    <p className="notification-text">CSA 100 accelerates the adoption of Climate Smart Agriculture (CSA) in the food, beverage and agriculture sector. Showing that business plays a critical role in meeting the Paris Agreement, the initiative brings together 100 influential companies to make science-based and measurable commitments to 2030, across three pillars: Productivity, resilience and mitigation. Making progress on mitigation in the food and agriculture sector is particularly crucial to meet the Paris Agreement, as it represents 25% of all GHG emissions. This sector is also the most vulnerable to climate change, and yet it must grow substantially in order to meet the daily nutritional needs of 10 billion people by 2050.</p>
                </div>
                <img className="notification-close" src="\Assets\Tracé 967.svg" alt=""></img>
                <div className="notification-hidden-field"></div>
            </div>
        </div>
    );
}