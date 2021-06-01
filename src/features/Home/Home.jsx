import React from 'react';
import PostFeeds from '../PostFeeds/PostFeeds';

const Home = () => (
  <>
    <PostFeeds />

    <footer className="container-fluid pt-5">
      <div className="container">
        <h2 className="logo text-center">Shahala</h2>
        <nav className="nav nav-fill mx-auto mt-5">
          <li className="nav-item">
            <a className="nav-link" href="https://facebook.com/fh5co" target="_blank" rel="noreferrer">
              <i
                className="fab fa-facebook-f"
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://facebook.com/fh5co" target="_blank" rel="noreferrer">
              <i
                className="fab fa-twitter"
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#"><i className="fab fa-instagram" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#"><i className="fab fa-google-plus-g" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#"><i className="fas fa-rss" /></a>
          </li>
        </nav>
      </div>
      <div className="copyright mt-4">
        <p className="text-center">
          &copy; 2019
          <a href="/#" className="text-white">Shahala</a>
          . All Rights Reserved. Design
          by
          <a href="https://freehtml5.co/shahala" target="_blank" rel="noreferrer" className="text-white">FreeHTML5.co</a>
          .
        </p>
      </div>
    </footer>
  </>
);

export default Home;
