import PropTypes from 'prop-types'; // prop-types 불러오기

const Header = ({ title, writer, date }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div>
        <span>{writer}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Header;
