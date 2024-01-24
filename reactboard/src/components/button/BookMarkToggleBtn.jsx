import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PropTypes from 'prop-types';
import useToggle from '../../hooks/useToggle';

const iconStyle = {
  ':hover': {
    cursor: 'pointer',
  },
};

const BookMarkToggleBtn = ({ isBookMark }) => {
  const [toggled, setToggled] = useToggle(isBookMark);
  return (
    <div>
      {toggled ? (
        <BookmarkIcon onClick={setToggled} sx={iconStyle} />
      ) : (
        <BookmarkBorderIcon onClick={setToggled} sx={iconStyle} />
      )}
    </div>
  );
};

BookMarkToggleBtn.propTypes = {
  isBookMark: PropTypes.bool.isRequired,
};

export default BookMarkToggleBtn;
