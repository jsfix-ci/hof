/* eslint-disable */
'use strict';

module.exports = {
  name: 'test-journey',
  baseUrl: '/test',
  steps: {
    '/first': {
      'fields': ['email'],
      'next': '/second'
    },
    '/second': {

    }
  }
};
