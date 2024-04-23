import classes from "./Input.module.css";

export default function Input({ label, id, onChange, ...props }) {
    return (
        <div className={classes.inputContainer}>
            <label htmlFor={id} id={classes.label}>{label}</label>
            <input id={id} onChange={onChange} {...props} />
        </div> 
    );
}