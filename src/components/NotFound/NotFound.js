import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  };

  return (
    <main className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>404</h1>
        <h2 className='not-found__subtitle'>Страница не найдена</h2>
      </div>
      <div className='not-found__link' onClick={handleBack}>Назад</div>
    </main>
  );
};

export default NotFound;
