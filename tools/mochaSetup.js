// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/register';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Tests are placed alongside files under spec.
// This file does the following:
// 1. Sets the environment to 'production' so that
//    dev-specific babel config in .babelrc doesn't run.
// 2. Registers babel for transpiling our code for testing.

// This assures the .babelrc dev config (which includes
// hot module reloading code) doesn't apply for tests.
// Register babel so that it will transpile ES6 to ES5
// before our tests run.

process.env.NODE_ENV = 'test';
configure({ adapter: new Adapter() });


// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {
  return null;
};
require.extensions['.png'] = function () {
  return null;
};
require.extensions['.jpg'] = function () {
  return null;
};
const matchMediaFn = () => ({
  matches: false,
  writable: true,
  readOnly: false,
  addListener: () => {},
  removeListener: () => {},
});

const win = global.window;
win.matchMedia = matchMediaFn;
global.window = win;
