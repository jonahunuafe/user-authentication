import classes from "../styles/globalstyle.css";

export default function Input({ label, id, onChange, className, ...props }) {
    return (
        <div>
            <label htmlFor={id} id={classes.label} className="label">{label}</label>
            <input id={id} onChange={onChange} {...props} className={className} />
        </div> 
    );
}