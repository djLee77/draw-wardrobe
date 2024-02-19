import { useParams } from 'react-router-dom';
import CommentList from '../components/comment/CommentList';
import Content from '../components/post/Content';
import Footer from '../components/post/Footer';
import Header from '../components/post/Header';

const testData = {
  id: 1,
  title: '제목1',
  writer: '김동건',
  date: '2024-01-20',
  content: [
    {
      imageSrc:
        'https://cdn.discordapp.com/attachments/589130484081098790/1199924538373324800/1.jpg?ex=65c44fcf&is=65b1dacf&hm=fe1326129a808723b57c3f2ee9f866a1e5ab079d29665417839b6af4d05759b0&',
      scaleX: 1,
      scaleY: 1,
      x: 120,
      y: 113,
    },
  ],
  likeCount: 3,
  commentCount: 1,
};

// 글 상세 불러오기 api 작성

const PostPage = () => {
  const params = useParams();
  console.log(params.postId);

  return (
    <div>
      <Header
        title={testData.title}
        writer={testData.writer}
        date={testData.date}
      />
      <hr />
      <Content content={testData.content} />
      <Footer
        likeCount={testData.likeCount}
        commentCount={testData.commentCount}
        postId={testData.id}
      />
      <CommentList />
    </div>
  );
};

export default PostPage;
