import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import { fireEvent, waitFor, screen } from '@testing-library/dom'
import { act as domAct } from "react-dom/test-utils";
import { act as testAct } from "react-test-renderer";
import renderWithRouter from '../../__mocks__/renderWithRouter';
import { store } from '../../redux/store';
import Comments from './Comments';
import { cleanup } from '@testing-library/react';
import config from '../../config';

const validValues = {
  name: 'Matias Magni',
  email: 'matias.magni@gmail.com',
  comments: 'This is a test comment.'
};

const postApiData = {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const commentsApiData = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body: "est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body: "quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione"
  },
];

const mockGetPost = new MockAdapter(axios);

jest.useFakeTimers();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    postId: 1,
  }),
  useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
}));

beforeEach(() => {
  jest.clearAllMocks();
  mockGetPost.reset();
});

afterEach(cleanup);

describe('Comments component tests.', () => {
  it('Comments component renders correctly.', async () => {
    let tree;

    domAct(() => {
      testAct(() => {
        tree = renderWithRouter(<Provider store={store}><Comments /></Provider>, '/comments/1');
        mockGetPost.onGet(`${config.API_URL.POSTS}/1`).reply(200, postApiData);
        mockGetPost.onGet(`${config.API_URL.COMMENTS}?postId=1`).reply(200, commentsApiData);
      });
    });

    await expect(tree).toMatchSnapshot();
  });

  it('User adds a comment after filling all fields.', async () => {
    const { getByTestId, findByText } = renderWithRouter(<Provider store={store}><Comments /></Provider>, '/comments/1');
    mockGetPost.onGet(`${config.API_URL.POSTS}/1`).reply(200, postApiData);
    mockGetPost.onGet(`${config.API_URL.COMMENTS}?postId=1`).reply(200, commentsApiData);

    for (let elementName of ['Name', 'Email', 'Comments']) {
      fireEvent.change(getByTestId(`input${elementName}`), {
        target: {
          value: validValues[elementName.toLowerCase]
        }
      });
    }
    
    fireEvent.click(getByTestId('buttonPublish'));
    
    setTimeout(() => {
      for (let i in validValues) {
        expect(findByText(validValues[i])).toBeInTheDocument();
      }
    }, 1000);

    jest.runAllTimers();
  });
});
