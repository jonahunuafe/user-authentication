import classes from "./Input.module.css";

export default function Input({ label, id, error, ...props }) {
    return (
        <div className={classes.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} required/>
            {error}
        </div> 
    );
}