import './InfoTooltip.css'
import success from '../../images/success.png';
import error from '../../images/error.png';

function InfoTooltip({ isOpen, onClose, text }) {
    return (
        <div className={`popup popup_type_info ${isOpen ? 'popup_opened' : ''}`} >
        <div className="popup__container">
            <img className="popup__sign" src={text ? success : error} alt={text ? "Успешно" : "Возникли неполадки"}/>
            <h3 className='popup__alert'>{text ? "Успешно!" : "Что-то пошло не так!"}</h3>
            <button className='popup__close-icon' type="button" onClick={onClose}></button>
        </div>
    </div>
    );
}
export default InfoTooltip;
