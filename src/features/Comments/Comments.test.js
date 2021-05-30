import React from 'react';
import { act as domAct } from "react-dom/test-utils";
import { act as testAct } from "react-test-renderer";
import renderWithRouter from '../../__mocks__/renderWithRouter';
import Comments from './Comments';

describe('Comments component tests.', () => {
  test('Comments component renders correctly.', () => {
    let tree;
  
    domAct(() => {
      testAct(() => {
        tree = renderWithRouter(<Comments />, '/comments/1');
      });
  
      expect(tree).toMatchSnapshot();
    });
  });
});
