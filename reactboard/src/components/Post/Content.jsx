import PropTypes from 'prop-types'; // prop-types 불러오기

const Content = ({ content, img }) => {
  return (
    <div>
      <img src={img} alt="이미지" />
      <p>{content}</p>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Content;
