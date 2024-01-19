import { useState } from 'react';
import PropTypes from 'prop-types'; // prop-types 불러오기
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useInput from '../../../hooks/useInput';
import addItem from '../../../utils/addItem';

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

const AddItemModal = ({ categoryID, setList }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue, handleChange] = useInput('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 아이템 추가 함수
  const handleAddItem = () => {
    addItem(setList, categoryID, value);
    setValue('');
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        옷 추가
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            옷 추가
          </Typography>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="옷 정보 입력"
          />
          <div>
            <Button onClick={handleAddItem}>추가</Button>
            <Button onClick={handleClose}>취소</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

AddItemModal.propTypes = {
  categoryID: PropTypes.string.isRequired, // setList prop의 타입을 함수로 지정하고 필수 여부를 설정
  setList: PropTypes.func.isRequired,
};

export default AddItemModal;
