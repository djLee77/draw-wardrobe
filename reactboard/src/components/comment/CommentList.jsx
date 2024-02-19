import { useEffect, useState } from 'react';
import Comment from './Comment';
import WriteComment from './WriteComment';

const testComments = [
  {
    id: 1,
    nickname: 'dd',
    comment: '와우~',
    date: '2024.1.20 15:30',
  },
];

// 댓글 목록 불러오기 api 작성

const CommentList = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setComments(testComments);
  }, []);
  return (
    <div>
      <h4>댓글 목록</h4>
      <WriteComment comments={comments} setComments={setComments} />
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
