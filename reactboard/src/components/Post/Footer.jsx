import PropTypes from 'prop-types'; // prop-types 불러오기
import LikeToggleBtn from '../button/LikeToggleBtn';
import BookMarkToggleBtn from '../button/BookMarkToggleBtn';

const footerStyle = {
  display: 'flex',
  width: '240px',
  justifyContent: 'space-between',
};

const Footer = ({ likeCount, commentCount, postId }) => {
  return (
    <div style={footerStyle}>
      <LikeToggleBtn likeCount={likeCount} postId={postId} />
      <div>댓글 : {commentCount}</div>
      <BookMarkToggleBtn isBookMark={false} postId={postId} />
    </div>
  );
};

Footer.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
};

export default Footer;
