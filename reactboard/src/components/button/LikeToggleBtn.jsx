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

const likePosts = [
  {
    postId: 1,
  },
  { postId: 2 },
];

// 좋아요한 글 목록 불러와서 현재 포스트 id 있는지 확인
const isLikePost = id => {
  return likePosts.some(post => post.postId === id);
};

// 좋아요 api 버튼 함수 만들기

const LikeToggleBtn = ({ likeCount, postId }) => {
  const [toggled, setToggled] = useToggle(isLikePost(postId));
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
  postId: PropTypes.number.isRequired,
};

export default LikeToggleBtn;
