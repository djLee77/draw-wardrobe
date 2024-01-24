import PropTypes from 'prop-types'; // prop-types 불러오기
import LikeToggleBtn from '../button/LikeToggleBtn';
import BookMarkToggleBtn from '../button/BookMarkToggleBtn';

const footerStyle = {
  display: 'flex',
  width: '240px',
  justifyContent: 'space-between',
};

const Footer = ({ likeCount, commentCount }) => {
  return (
    <div style={footerStyle}>
      <LikeToggleBtn likeCount={likeCount} />
      <div>댓글 : {commentCount}</div>
      <BookMarkToggleBtn isBookMark={false} />
    </div>
  );
};

Footer.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default Footer;
