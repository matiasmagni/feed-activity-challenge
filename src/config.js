const prod = {
  API_URL: {
    POSTS: 'https://jsonplaceholder.typicode.com/posts',
    COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
  }
}

const dev = {
  API_URL: {
    POSTS: 'https://jsonplaceholder.typicode.com/posts',
    COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
  }
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;
export default config;
