const Hook = require('../Hook');
const SyncHook = require("../SyncHook");

const hook = new Hook();
const syncHook = new SyncHook();

describe('hook test', () => {
  it('check property', () => {
    // const fn = syncHook.compile({
    //   taps: [{
    //     name: 'fn1',
    //     fn: () => 'hello world',
    //     type: 'sync'
    //   }],
    //   args: [],
    //   interceptors: [],
    //   type: 'sync'
    // })
  })

  it('use', () => {
    const syncHook1 = new SyncHook();
    syncHook1.tap('hello', () => {
      console.log('say hello');
    })

    syncHook1.tap('world', () => {
      console.log('say world');
    })

    syncHook1.tap('news', () => {
      console.log('say news');
    })

    syncHook1.call();
  })
})