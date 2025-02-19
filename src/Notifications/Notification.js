import React, {useState} from "react";

const Notification = (props) => {
    const [width, setWidth] = useState(0);
    const [exit, setExit] = useState(false);
    const [intervalID, setIntervalID] = useState(0);
    const setID = (() => {
        const id = setInterval(() => {
            setWidth((width) => {
                if (width < 100){
                    return width + 0.5;
                }
                return width;
            });
        }, 50);
        setIntervalID(id);
        return id;
    });
    React.useEffect(() => {
       if ((width === 100)) {
            clearInterval(intervalID);
            setExit(true);
            setTimeout(() => {
                props.dispatch({
                    type: "REMOVE_NOTIFICATION",
                    id: props.id,
                })
            }, 400);
        }
    }, [width]);
    return (
        <div 
            className={`notification-item ${props.type}${exit ? " exit" : ""}`}
            onMouseEnter={() => {if (!(intervalID)){setID();}}}
            onClick={() => {setTimeout(() => {
                clearInterval(intervalID);
                setIntervalID(null);
                setWidth(0);
            }, 10)}}>
            <p>${props.message}</p>
            <div className="bar" style={{width: `${width}%`}} />
        </div>
    );
};

export default Notification;