import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Isma'},
        {id: 2, name: 'Merdan'},
        {id: 3, name: 'Dowlet'},
        {id: 4, name: 'Farhod'}
    ];

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Privet'},
        {id: 3, message: 'kak dela'},
        {id: 4, message: 'Congratulations'}
    ];

    let messageElements = messageData
        .map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;