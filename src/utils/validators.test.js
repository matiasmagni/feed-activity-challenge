import { expect } from "@jest/globals";
import { cleanup } from "@testing-library/react";
import { isEmailValid } from "./validators";

const validValues = {
  email: [
    'matias.magni@gmail.com',
    'test@hotmail.com',
    'test2@yahoo.com.ar',
    'test-3@ohana.digital',
    'test+4@test.com',
  ]
};

const invalidValues = {
  email: [
    'matias.magni@gmail',
    'test 2@hotmail.com',
    'test2@yahoo ar',
    'test3@ohana-digital',
  ]
};

afterEach(cleanup);

describe('Validators tests.', () => {
  it('Email validator returns true on valid values.', () => {
    validValues.email.forEach(email => {
      expect(isEmailValid(email)).toBe(true);
    });
  });

  it('Email validator returns false on invalid.', () => {
    invalidValues.email.forEach(email => {
      expect(isEmailValid(email)).toBe(false);
    });
  });
});
