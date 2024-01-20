import Comment from '../components/Post/Comment';
import Content from '../components/Post/Content';
import Footer from '../components/Post/Footer';
import Header from '../components/Post/Header';

const testData = {
  id: 1,
  title: '제목1',
  writer: '김동건',
  date: '2024-01-20',
  img: '',
  content: '내용입니다',
  likes: 3,
  comments: [
    {
      id: 1,
      nickname: 'dd',
      comment: '와우~',
      date: '2024-01-20',
    },
  ],
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
      <Footer likes={testData.likes} comments={testData.comments?.length} />
      <Comment comments={testData.comments} />
    </div>
  );
};

export default PostPage;
