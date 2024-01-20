import Comment from './Comment';

const comments = [
  {
    id: 1,
    nickname: 'dd',
    comment: '와우~',
    date: '2024-01-20',
  },
];

const CommentList = () => {
  return (
    <div>
      <h4>댓글 목록</h4>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
