import PropTypes from 'prop-types'; // prop-types 불러오기

const Content = ({ content }) => {
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
