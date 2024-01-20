import PropTypes from 'prop-types'; // prop-types 불러오기

const Footer = ({ likeCount, commentCount }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <button type="button">♥</button> : {likeCount}
      </div>
      <div>댓글 : {commentCount}</div>
      <button type="button">북마크</button>
      <hr />
    </div>
  );
};

Footer.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default Footer;
