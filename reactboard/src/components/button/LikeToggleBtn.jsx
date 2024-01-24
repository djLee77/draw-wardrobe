import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
import useToggle from '../../hooks/useToggle';

const style = {
  display: 'flex',
};

const iconStyle = {
  ':hover': {
    cursor: 'pointer',
  },
};

const LikeToggleBtn = ({ likeCount }) => {
  const [toggled, setToggled] = useToggle(false);
  return (
    <div style={style}>
      {toggled ? (
        <FavoriteIcon
          onClick={setToggled}
          style={{ color: 'red' }}
          sx={iconStyle}
        />
      ) : (
        <FavoriteBorderIcon onClick={setToggled} sx={iconStyle} />
      )}
      <span>{likeCount}</span>
    </div>
  );
};

LikeToggleBtn.propTypes = {
  likeCount: PropTypes.number.isRequired,
};

export default LikeToggleBtn;
