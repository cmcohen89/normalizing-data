import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import { fetchArticles } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();

  const articlesObj = useSelector(state => state.articleState.entries);
  console.log('articlesObj: ', articlesObj[1])
  const articles = Object.values(articlesObj);
  console.log('************', articles)

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  // if (!articles.length) return null;

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {Object.values(articlesObj).map((article) => (
          <li key={article.id}><NavLink to={`/article/${article.id}`}>{article.title}</NavLink></li>
        ))}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle articles={articlesObj} />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
