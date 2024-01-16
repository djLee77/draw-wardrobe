import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/board');
  };

  return (
    <div className="container">
      {/* type="button"을 추가하여 명시적으로 버튼 타입 지정 */}
      <button
        type="button"
        onClick={handleImageClick}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <img
          className="button2"
          alt="button2"
          src="img/button1.svg"
          height={100}
        />
      </button>
    </div>
  );
};

export default MainPage;
