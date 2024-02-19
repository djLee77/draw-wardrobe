import PropTypes from 'prop-types'; // prop-types 불러오기

const Content = ({ content }) => {
  return (
    <div>
      <p>자유롭게 옷을 움직여보세요!</p>
      <div>{content}</div>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
