const JsWebm = require('../src/JsWebm.js');
const fs = require('fs');
const path = require('path');

const runTestFile = i => {
  const demuxer = new JsWebm();
  const file = fs.readFileSync(path.join(__dirname, '..', `/matroska-test-files/test_files/test${i}.mkv`)).buffer;
  demuxer.queueData(file);
  while (!demuxer.eof) {
    demuxer.demux();
  }
  return demuxer;
};

test('test1.mkv', () => {
  const demuxer = runTestFile(1);
  expect(demuxer.docType).toBe('matroska');
  expect(demuxer.audioPackets.length).toBe(3639);
});

test('test2.mkv', () => {
  const demuxer = runTestFile(2);
  expect(demuxer.docType).toBe('matroska');
});

test('test3.mkv', () => {
  const demuxer = runTestFile(3);
  expect(demuxer.docType).toBe('matroska');
}); 7

test('test5.mkv', () => {
  const demuxer = runTestFile(5);
  expect(demuxer.docType).toBe('matroska');
});

test('test6.mkv', () => {
  const demuxer = runTestFile(6);
  expect(demuxer.docType).toBe('matroska');
});

test('test7.mkv', () => {
  const demuxer = runTestFile(7);
  expect(demuxer.docType).toBe('matroska');
});

test('test8.mkv', () => {
  const demuxer = runTestFile(8);
  expect(demuxer.docType).toBe('matroska');
});