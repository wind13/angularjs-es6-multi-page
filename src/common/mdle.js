import { envs, env } from "./global";
import { Ng, Ramda } from "./util";

const Mdle = function (name, deps = []) {

  const CMPT_SUFFIX = 'Cmpt';

  let mdle = Ng.module(name, deps);

  const defaultComponetName = name + CMPT_SUFFIX;

  const registComponent = (component) => {
    mdle.component(component.name, component);
    return this;
  };

  const registValue = (key, value) => {
    mdle.value(key, value);
    return this;
  };

  const registConfig = (config) => {
    mdle.config(config);
    return this;
  };

  const registService = (service) => {
    mdle.service(service.name, env === envs.DEV ? (service.mockFn || service.fn) : service.fn);
    return this;
  };

  const registFactory = (factory) => {
    mdle.factory(factory.name, env === envs.DEV ? (factory.mockFn || factory.fn) : factory.fn);
    return this;
  };

  const registFilter = (filter) => {
    mdle.filter(filter.name, filter.fn);
  }

  const registController = (controller) => {
    mdle.controller(controller.name, controller.fn);
    return this;
  };

  const setRoutes = (jsonRoutes) => {
    registConfig(function ($routeProvider, $locationProvider) {
      'ngInject';
      Ramda.mapObjIndexed((route, path) => {
        $routeProvider.when(path, route);
      }, jsonRoutes);
      // configure html5 to get links working on jsfiddle
      // $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');
    })
  }

  return {
    CMPT_SUFFIX,
    name,
    mdle,
    defaultComponetName,
    registComponent,
    registValue,
    registConfig,
    registService,
    registFactory,
    registFilter,
    registController,
    setRoutes,
  };
}

export default Mdle;