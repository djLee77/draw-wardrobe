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

  // 댓글 삭제 함수 (댓글 삭제 api로 수정해야함)
  const onDeleteComment = commentId => {
    // filter 함수를 사용하여 해당 ID를 가진 댓글을 제외한 새로운 배열 생성
    const updatedComments = comments.filter(
      comment => comment.id !== commentId,
    );
    // 새로운 배열로 댓글 목록 상태 업데이트
    setComments(updatedComments);
  };

  return (
    <div>
      <h4>댓글 목록</h4>
      <WriteComment comments={comments} setComments={setComments} />
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
