import CommentList from '../components/comment/CommentList';
import Content from '../components/post/Content';
import Footer from '../components/post/Footer';
import Header from '../components/post/Header';

const testData = {
  id: 1,
  title: '제목1',
  writer: '김동건',
  date: '2024-01-20',
  img: '',
  content: '내용입니다',
  likeCount: 3,
  commentCount: 1,
};

const PostPage = () => {
  return (
    <div>
      <Header
        title={testData.title}
        writer={testData.writer}
        date={testData.date}
      />
      <hr />
      <Content content={testData.content} img={testData.img} />
      <Footer
        likeCount={testData.likeCount}
        commentCount={testData.commentCount}
      />
      <CommentList />
    </div>
  );
};

export default PostPage;
