import React, { createContext, useContext, useReducer } from "react";
import {v4} from "uuid";
import Notification from "./Notification";

const NotificationContext = createContext();

const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, {...action.payload}];
            case "REMOVE_NOTIFICATION":
                return state.filter(el => el.id !== action.id);
            default:
                return state;
        }
    },[
        {
            id: v4(),
            type: "high",
            message: "Example high error",
        },
        {
            id: v4(),
            type: "low",
            message: "Example low error",
        },
        {
            id: v4(),
            type: "two",
            message: "Standard notification",
        },
        {
            id: v4(),
            type: "one",
            message: "Standard notification 2",
        },
        {
            id: v4(),
            type: "high",
            message: "Example high error",
        },
        {
            id: v4(),
            type: "low",
            message: "Example low error",
        },
        {
            id: v4(),
            type: "two",
            message: "Standard notification",
        },
        {
            id: v4(),
            type: "one",
            message: "Standard notification 2",
        },
        {
            id: v4(),
            type: "high",
            message: "Example high error",
        },
        {
            id: v4(),
            type: "low",
            message: "Example low error",
        },
        {
            id: v4(),
            type: "two",
            message: "Standard notification",
        },
        {
            id: v4(),
            type: "one",
            message: "Standard notification 2",
        }
    ]);
    return (

        <NotificationContext.Provider value={dispatch}>
            <div className='notification-wrapper'>
                {state.map(note => {
                return <Notification dispatch={dispatch} key={note.id} {...note} />
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>
    )
};

export const useCreateNotification = (tp, msg) => {
    const dispatch = useContext(NotificationContext);
    return () => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: v4(),
                type: tp,
                message: msg
            }
        });
    };
};
export default NotificationProvider;