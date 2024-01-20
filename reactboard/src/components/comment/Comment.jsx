import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <div>
      <h4>{comment.nickname}</h4>
      <span>{comment.comment}</span>
      <p>{comment.date}</p>
      <hr />
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
