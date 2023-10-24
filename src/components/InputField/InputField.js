import './InputField.css';
import { PATTERN } from '../../utils/constants';

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
        pattern={PATTERN[props.name]}
        autoComplete="off"
        value={props.values[props.name] || ''}
        onChange={props.onChange} />
      <span className="auth__error" id={`user-${props.id}-error`}>{props.error[props.name]}</span>
    </div>

  );

}
export default InputField;
