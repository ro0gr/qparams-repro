import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  router: service(),

  queryParams: ['test'],

  test: `I'm changed o_O`,

  actions: {
    transitionWithRouterService() {
      // do not touch "test" in the transition
      // but it got changed on the "application" route
      this.get('router').transitionTo('in')
    }
  }
});
