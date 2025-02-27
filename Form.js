import { useState} from 'react';

const Form = (props) => {

    const [name, setName] = useState('');

    //event handling
    function handleSubmit(e) {

        e.preventDefault();

       props.addTask(name);

       setName('');
    }

    //event for input change (textbox)
    function handleChange(e){
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="container">
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg fs-3">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg fs-3"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg" id='submitButton' >
                Add
            </button>
        </form>
    );
}

export default Form;