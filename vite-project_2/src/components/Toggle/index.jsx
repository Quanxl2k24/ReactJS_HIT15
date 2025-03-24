import "./Toggle.css";
const ToggleButton = ({ active = false}) => {


    return(
        <div className={`toggle-button-container ${active ? "active" : ""}`}>
            <div className="toggle-button"></div>
        </div>
    )
};

export default ToggleButton;
