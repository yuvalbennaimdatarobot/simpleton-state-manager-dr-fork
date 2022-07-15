import SimpletonStateManager from './SimpletonStateManager';

const MODEL_NAME = 'testModel';

describe('SimpletonStateManager', () => {

  test('create instance', () => {
    const store = new SimpletonStateManager();
    expect(store).toBeInstanceOf(SimpletonStateManager);
  });
 
  /* Whenever you instanciate a SimpletonStateManager, by constructor or the static getInstance method
     you get the same static instance */

  test('SimpletonStateManager instance is a Singleton', () => {;
    const storeOne = new SimpletonStateManager();
    const storeTwo = new SimpletonStateManager();
    const storeThree = SimpletonStateManager.getInstance();
    expect(storeOne).toBe(storeTwo); //toBe check that the Objects are equal BY REFERENCE (same memory pointer)
    expect(storeTwo).toBe(storeThree);
  });

  /*  We store an array model awhich by default is MUTABLE. When we getModel and 
      pushing new elements it does affect the original Model */

      test('Model Array should be NOT be immutable', () => {
        const store = new SimpletonStateManager();
        const original = ['aaa', 'bbb'];
        store.setModel(MODEL_NAME, original);
        const arr = store.getModel(MODEL_NAME);
        arr.push('ccc');
        const arr2 = store.getModel(MODEL_NAME);
        expect(arr2.length).toEqual(3);
        expect(arr.length).toEqual(3);
      });

  /*  We store an array model and set it as immutable. When we getModel we get a clone of the 
      Array so pushing new elements does NOT affect the original Model */

  test('Model Array should be immutable', () => {
    const store = new SimpletonStateManager();
    const original = ['aaa', 'bbb'];
    store.setModel(MODEL_NAME, original, true); //immutable
    const arr = store.getModel(MODEL_NAME);
    arr.push('ccc');
    const arr2 = store.getModel(MODEL_NAME);
    expect(arr2.length).toEqual(2);
    expect(arr.length).toEqual(3);
  });

  test('outputs the  model list', () => {
    const store = new SimpletonStateManager();
    const model = { name: 'sample' };
    store.setModel(MODEL_NAME, model);
    console.log('Models:', store.getModelList());
  });
});
