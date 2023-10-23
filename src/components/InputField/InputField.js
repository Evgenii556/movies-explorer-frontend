import './InputField.css';

function InputField(props) {

  return (
    <div className="auth__form-section">
      <label className='auth__input-title' htmlFor={props.id}>{props.title}</label>
      <input type={props.type}
        className="auth__input auth__input_type_name"
        placeholder=''
        name={props.name}
        id={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
        autoComplete="off"
        onChange={props.onChange} />
      <span className="auth__error" id={`user-${props.id}-error`}></span>
    </div>

  );

}
export default InputField;
