import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Router } from 'react-router';
import { createMemoryHistory } from "history";
import { cleanup } from '@testing-library/react';
import { act as domAct } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { act as testAct, create } from "react-test-renderer";
import { store } from '../../redux/store';
import PostFeeds from './PostFeeds';
import config from '../../config';
import renderWithRouter from '../../__mocks__/renderWithRouter';

const mockGetPosts = new MockAdapter(axios);
const history = createMemoryHistory();

const postApiData = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  }
];

afterEach(cleanup);

describe('PostFeeds component tests.', () => {
  it('PostFeeds component renders correctly.', () => {
    let tree;
    mockGetPosts.onGet(config.API_URL.POSTS).reply(200, postApiData);

    domAct(() => {
      testAct(() => {
        tree = create(<Provider store={store}><Router history={history}><PostFeeds /></Router></Provider>);
      });
    });

    expect(tree).toMatchSnapshot();
  });

  it('PostFeeds render all post from API correctly.', async () => {
    const { findByText } = renderWithRouter(<Provider store={store}><PostFeeds /></Provider>);
    mockGetPosts.onGet(config.API_URL.POSTS).reply(200, postApiData);

    for (let data of postApiData) {
      for (let field of ['title', 'body']) {
        expect(await findByText((content) => content.includes(data[field].substring(0, 15)))).toBeInTheDocument();
      }
    }
  });
});
