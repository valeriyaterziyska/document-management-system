import styles from "./CreateFile.module.css";

import { useState } from "react";

export const CreateFile = ({

}) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        file: '',
    });


    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log('on Submit');
        console.log(task);
    }

    const onChangeHandler = (e) => {
        setTask((state) => ({...state, [e.target.name]: e.target.value}));
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={onChangeHandler} name="title" value={task.title}/>

            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={onChangeHandler} name="description" value={task.description} />

            <label htmlFor="file">Select a file:</label>
            <input type="file" id="file" onChange={onChangeHandler} name="file" value={task.file}></input>

            <button type="submit">Send</button>
        </form>
    )
}