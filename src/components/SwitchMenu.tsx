import "./SwitchMenu.css"

export default function SwitchMenu(props) {
    const active = props.active;
    return (
        <div className={!active ? "menu-container" : "menu-container-active"}>
            <span className={!active ? "menu-text" : "menu-text-active"}>{props.name}</span>
        </div>
    )
}
