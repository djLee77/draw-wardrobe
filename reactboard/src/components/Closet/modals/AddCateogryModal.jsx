import { useState } from 'react';
import PropTypes from 'prop-types'; // prop-types 불러오기
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useInput from '../../../hooks/useInput';
import addCategory from '../../../utils/addCategory';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 120,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddCategoryModal = ({ setList }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue, handleChange] = useInput('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 카테고리 추가 함수
  const handleAddCategory = () => {
    if (value === '') return;

    addCategory(setList, value);
    setValue('');
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        카테고리 추가
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            카테고리 추가
          </Typography>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="카테고리 이름 입력"
          />
          <div>
            <Button onClick={handleAddCategory}>추가</Button>
            <Button onClick={handleClose}>취소</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

AddCategoryModal.propTypes = {
  setList: PropTypes.func.isRequired, // setList prop의 타입을 함수로 지정하고 필수 여부를 설정
};

export default AddCategoryModal;
