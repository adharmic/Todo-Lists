import React, {useState} from "react";

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={e => setAssigned(e.target.value)} value={assigned}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea rows="3" className="form-control" required onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add New To-Do</button>
            </form>
        </div>
    )
}
//onClick={props.addTodo(description, assigned)}
export default NewTodoForm;