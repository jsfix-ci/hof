'use strict';
const Prometheus = require('prom-client');

let responseTimeInMs = 0;

const httpRequestDurationMicroseconds = new Prometheus.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]  // buckets for response time from 0.1ms to 500ms
});

module.exports =  function (req, res, status) {
  const startTime = Date.now();
  httpRequestDurationMicroseconds
    .labels(req.method, req.url, status)
    .observe(responseTimeInMs);
  const endTime = Date.now();
  responseTimeInMs = endTime - startTime;
};
