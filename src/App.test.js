import React from 'react';
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import App from './App';

describe('App component tests.', () => {
  test('App component renders correctly.', () => {
    let tree;
  
    domAct(() => {
      testAct(() => {
        tree = create(<App />);
      });
  
      expect(tree).toMatchSnapshot();
    });
  });
});
