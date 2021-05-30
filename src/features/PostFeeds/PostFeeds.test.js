import React from 'react';
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import PostFeeds from './PostFeeds';

describe('PostFeeds component tests.', () => {
  test('PostFeeds component renders correctly.', () => {
    let tree;
  
    domAct(() => {
      testAct(() => {
        tree = create(<PostFeeds />);
      });
  
      expect(tree).toMatchSnapshot();
    });
  });
});
