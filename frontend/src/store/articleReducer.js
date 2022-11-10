const LOAD_ARTICLES = 'articles/loadArticles';
const ADD_ARTICLE = 'articles/addArticle';

export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

export const fetchArticles = () => async (dispatch) => {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  dispatch(loadArticles(articles));
};

export const writeArticle = (payload) => async (dispatch) => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const article = await response.json();
    dispatch(addArticle(article));
    return article;
  }
};

const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      // return { ...state, [state.entries]: action.articles.forEach((article) => (state.entries[article.id] = article)) };
      const newState = { ...state };
      action.articles.forEach((article) => (newState.entries[article.id] = article));
      return newState;
    case ADD_ARTICLE:
      const newState2 = { ...state };
      newState2.entries[action.article.id] = action.article;
      return newState2;
    default:
      return state;
  }
};

export default articleReducer;
