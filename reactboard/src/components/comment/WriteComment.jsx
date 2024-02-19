import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useInput from '../../hooks/useInput';

const WriteComment = ({ comments, setComments }) => {
  const [value, setValue, handleChange] = useInput('');

  const handleWriteCommentButton = () => {
    if (value === '') return;
    setValue('');
    // 댓글 api 구현하기
    const newComment = {
      id: comments.length + 1, // 기존 댓글 개수 + 1로 id 생성 (일반적으로 서버에서 관리하는 값이어야 하지만 예시에서는 간단하게 구현)
      nickname: '사용자 닉네임', // 사용자의 닉네임 또는 사용자 정보에서 가져온 값으로 설정
      comment: value, // 입력한 댓글 내용
      date: `${new Date().toISOString().slice(0, 10).replace(/-/g, '.')} 
        ${new Date().toLocaleTimeString()}`, // 현재 날짜와 시간을 이용하여 YYYY.MM.DD HH:mm 형식으로 변환
    };

    // 새로운 댓글을 기존 댓글 목록에 추가하고 상태 업데이트
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <TextField
        id="standard-textarea"
        placeholder="댓글 입력"
        multiline
        variant="standard"
        value={value}
        onChange={handleChange}
      />
      <Button variant="outlined" onClick={handleWriteCommentButton}>
        댓글 작성
      </Button>
    </div>
  );
};

export default WriteComment;
