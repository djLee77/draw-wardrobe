import PropTypes from 'prop-types'; // prop-types 불러오기

const Footer = ({ likes, comments }) => {
  return (
    <div>
      <div>하트 : {likes}</div>
      <div>댓글 : {comments}</div>
    </div>
  );
};

Footer.propTypes = {
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

export default Footer;
