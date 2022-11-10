import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  console.log('id: ', id)
  console.log('articles: ', articles)
  const singleArticle = articles[id];
  console.log('singleArticle: ', singleArticle)

  return (
    <div className='singleArticle'>
      <h1>{singleArticle?.title}</h1>
      <img
        src={singleArticle?.imageUrl}
        alt={singleArticle?.title}
      />
      <p>
        {singleArticle?.body}
      </p>
    </div>
  );
};

export default SingleArticle;
