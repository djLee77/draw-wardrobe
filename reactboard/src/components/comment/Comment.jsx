import PropTypes from 'prop-types';

const Comment = ({ comment, onDeleteComment }) => {
  const onClickDelBtn = () => {
    onDeleteComment(comment.id);
  };
  return (
    <div>
      <h4>{comment.nickname}</h4>
      <span>{comment.comment}</span>
      <p>{comment.date}</p>
      <button type="button" onClick={onClickDelBtn}>
        🚮
      </button>
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
