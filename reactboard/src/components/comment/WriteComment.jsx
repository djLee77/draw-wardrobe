import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useInput from '../../hooks/useInput';

const WriteComment = () => {
  const [value, setValue, handleChange] = useInput('');

  const handleWriteCommentButton = () => {
    setValue('');
    // 댓글 api 구현하기
  };

  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
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
