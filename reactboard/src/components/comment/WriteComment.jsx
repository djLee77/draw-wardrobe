import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const WriteComment = () => {
  return (
    <div>
      <TextField id="input-with-icon-textfield" variant="standard" />
      <Button variant="outlined">댓글 작성</Button>
    </div>
  );
};

export default WriteComment;
