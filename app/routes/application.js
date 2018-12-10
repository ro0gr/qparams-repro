import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    test: {
      refreshModel: true
    }
  },

  model(params, {queryParams}) {
    alert(`I should only appear on page load!

Query Param Value: ${queryParams.test}
`)
  }
});
