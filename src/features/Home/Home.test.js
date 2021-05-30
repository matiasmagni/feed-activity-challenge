import React from 'react';
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";
import Home from './Home';

describe('Home component tests.', () => {
  test('Home component renders correctly.', () => {
    let tree;
  
    domAct(() => {
      testAct(() => {
        tree = create(<Home />);
      });
  
      expect(tree).toMatchSnapshot();
    });
  });
});
