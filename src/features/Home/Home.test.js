import React from 'react';
import { cleanup } from '@testing-library/react';
import { act as domAct } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { act as testAct, create } from "react-test-renderer";
import { store } from '../../redux/store';
import Home from './Home';

afterEach(cleanup);

describe('Home component tests.', () => {
  it('Home component renders correctly.', () => {
    let tree;
  
    domAct(() => {
      testAct(() => {
        tree = create(<Provider store={store}><Home /></Provider>);
      });
  
      expect(tree).toMatchSnapshot();
    });
  });
});
