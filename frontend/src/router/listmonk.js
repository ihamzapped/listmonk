import { authGuard } from './guards';

export default {
  path: '/listmonk',
  name: 'listmonk',
  meta: { title: '' },
  beforeEnter: authGuard,
  redirect: { name: 'dashboard' },
  component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Index.vue'),
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      meta: { title: '' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Dashboard.vue'),
    },
    {
      path: 'lists',
      name: 'lists',
      meta: { title: 'globals.terms.lists', group: 'lists' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Lists.vue'),
    },
    {
      path: 'lists/forms',
      name: 'forms',
      meta: { title: 'forms.title', group: 'lists' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Forms.vue'),
    },
    {
      path: 'lists/:id',
      name: 'list',
      meta: { title: 'globals.terms.lists', group: 'lists' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Lists.vue'),
    },
    {
      path: 'subscribers',
      name: 'subscribers',
      meta: { title: 'globals.terms.subscribers', group: 'subscribers' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Subscribers.vue'),
    },
    {
      path: 'subscribers/import',
      name: 'import',
      meta: { title: 'import.title', group: 'subscribers' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Import.vue'),
    },
    {
      path: 'subscribers/bounces',
      name: 'bounces',
      meta: { title: 'globals.terms.bounces', group: 'subscribers' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Bounces.vue'),
    },
    {
      path: 'subscribers/lists/:listID',
      name: 'subscribers_list',
      meta: { title: 'globals.terms.subscribers', group: 'subscribers' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Subscribers.vue'),
    },
    {
      path: 'subscribers/:id',
      name: 'subscriber',
      meta: { title: 'globals.terms.subscribers', group: 'subscribers' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Subscribers.vue'),
    },
    {
      path: 'campaigns',
      name: 'campaigns',
      meta: { title: 'globals.terms.campaigns', group: 'campaigns' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Campaigns.vue'),
    },
    {
      path: 'campaigns/media',
      name: 'media',
      meta: { title: 'globals.terms.media', group: 'campaigns' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Media.vue'),
    },
    {
      path: 'campaigns/templates',
      name: 'templates',
      meta: { title: 'globals.terms.templates', group: 'campaigns' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Templates.vue'),
    },
    {
      path: 'campaigns/analytics',
      name: 'campaignAnalytics',
      meta: { title: 'analytics.title', group: 'campaigns' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/CampaignAnalytics.vue'),
    },
    {
      path: 'campaigns/:id',
      name: 'campaign',
      meta: { title: 'globals.terms.campaign', group: 'campaigns' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Campaign.vue'),
    },
    {
      path: 'settings',
      name: 'settings',
      meta: { title: 'globals.terms.settings', group: 'settings' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Settings.vue'),
    },
    {
      path: 'settings/logs',
      name: 'logs',
      meta: { title: 'logs.title', group: 'settings' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Logs.vue'),
    },
    {
      path: 'settings/maintenance',
      name: 'maintenance',
      meta: { title: 'maintenance.title', group: 'settings' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/list-monk/Maintenance.vue'),
    },
  ],
};
