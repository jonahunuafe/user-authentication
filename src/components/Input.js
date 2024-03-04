export default function Input({ label, id, error, ...props }) {
    return (
        <div className="">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} required/>
            {error}
        </div> 
    );
}