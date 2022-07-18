
export default class SimpletonStateManager {
  static instance = null;

  //private members
  #models = {}; 
  #immutables = {};
  #subscribers = {};

  constructor() {
    if (!SimpletonStateManager.instance) {
      SimpletonStateManager.instance = this;
      this.modelsProxy = new Proxy(this.#models, SimpletonStateManager.proxyHandler);
    } else {
      return SimpletonStateManager.instance;
    }
  }

  static getInstance() {
    return new SimpletonStateManager();
  }

  static proxyHandler = {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    set(obj, prop, value) {
      Reflect.set(obj, prop, value);
      SimpletonStateManager.instance.modelChanged(prop);
      return true;
    },
  };

  setModel(modelName, model, immutable = false) {
    //console.log('setModel', modelName, model, immutable);

    if(immutable) {
      this.#immutables[modelName] = modelName;
    }

    this.modelsProxy[modelName] = model;
  }

  notifyModelListeners(modelName) {
    this.modelChanged(modelName);
  }

  isImmutable(modelName) {
    return this.#immutables[modelName] != null;
  }

  getModel(modelName) {
    const model = this.modelsProxy[modelName];
    //console.log('getModel', modelName, model);

    if(this.isImmutable(modelName)) { //return copy of model
      const isArr = model instanceof Array;
      const isObj = model instanceof Object;

      if (model != null) {
        if (!isObj) {
          return model;
        } if (isArr) {
          const copy = JSON.parse(JSON.stringify(model));
          return JSON.parse(JSON.stringify(model));
        } 
        return { ...model };
      }
    }

    return model;
  }

  getModelList() {
    return { ...this.modelsProxy };
  }

  subscribers(modelName) {
    if (this.#subscribers[modelName] == null) {
      this.#subscribers[modelName] = [];
    }

    return this.#subscribers[modelName];
  }

  subscribe(modelName, key, callback) {
    const modelSubscribers = this.subscribers(modelName);
    modelSubscribers[`${key}`] = callback;
  }

  unsubscribe(modelName, key) {
    const modelSubscribers = this.#subscribers[modelName];
    if (modelSubscribers) {
      delete modelSubscribers[key];
    }
  }

  unsubscribeAll() {
    this.#models = {};
    this.#subscribers = {};
    this.#immutables = {};
    this.modelsProxy = new Proxy(this.#models, SimpletonStateManager.proxyHandler);
  }

  modelChanged(modelName) {
    const value = this.modelsProxy[modelName];
    const modelSubscribers = this.#subscribers[modelName];

    if (modelSubscribers) {
      for (const key of Object.keys(modelSubscribers)) {
        const callback = modelSubscribers[key];
        if (callback) {
          callback(value);
        }
      }
    }
  }
}
