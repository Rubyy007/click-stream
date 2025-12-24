// src/utils/eventBatcher.js
let buffer = [];
let timer = null;

const BATCH_INTERVAL = 300; // ms

export const addEventToBatch = (event, flushFn) => {
  buffer.push(event);

  if (!timer) {
    timer = setTimeout(() => {
      flushFn([...buffer]);
      buffer = [];
      timer = null;
    }, BATCH_INTERVAL);
  }
};
