import { authGuard } from './guards';

export default {
  path: '/listmonk',
  name: 'listmonk',
  meta: { title: '' },
  beforeEnter: authGuard,
  redirect: { name: 'dashboard' },
  component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Index.vue'),
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      meta: { title: '' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Dashboard.vue'),
    },
    {
      path: 'lists',
      name: 'lists',
      meta: { title: 'globals.terms.lists', group: 'lists' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Lists.vue'),
    },
    {
      path: 'lists/forms',
      name: 'forms',
      meta: { title: 'forms.title', group: 'lists' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Forms.vue'),
    },
    {
      path: 'lists/:id',
      name: 'list',
      meta: { title: 'globals.terms.lists', group: 'lists' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Lists.vue'),
    },
    {
      path: 'subscribers',
      name: 'subscribers',
      meta: { title: 'globals.terms.subscribers', group: 'subscribers' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Subscribers.vue'),
    },
    {
      path: 'subscribers/import',
      name: 'import',
      meta: { title: 'import.title', group: 'subscribers' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Import.vue'),
    },
    {
      path: 'subscribers/bounces',
      name: 'bounces',
      meta: { title: 'globals.terms.bounces', group: 'subscribers' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Bounces.vue'),
    },
    {
      path: 'subscribers/lists/:listID',
      name: 'subscribers_list',
      meta: { title: 'globals.terms.subscribers', group: 'subscribers' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Subscribers.vue'),
    },
    {
      path: 'subscribers/:id',
      name: 'subscriber',
      meta: { title: 'globals.terms.subscribers', group: 'subscribers' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Subscribers.vue'),
    },
    {
      path: 'campaigns',
      name: 'campaigns',
      meta: { title: 'globals.terms.campaigns', group: 'campaigns' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Campaigns.vue'),
    },
    {
      path: 'campaigns/media',
      name: 'media',
      meta: { title: 'globals.terms.media', group: 'campaigns' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Media.vue'),
    },
    {
      path: 'campaigns/templates',
      name: 'templates',
      meta: { title: 'globals.terms.templates', group: 'campaigns' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Templates.vue'),
    },
    {
      path: 'campaigns/analytics',
      name: 'campaignAnalytics',
      meta: { title: 'analytics.title', group: 'campaigns' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/listMonk/CampaignAnalytics.vue'),
    },
    {
      path: 'campaigns/:id',
      name: 'campaign',
      meta: { title: 'globals.terms.campaign', group: 'campaigns' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Campaign.vue'),
    },
    {
      path: 'settings',
      name: 'settings',
      meta: { title: 'globals.terms.settings', group: 'settings' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Settings.vue'),
    },
    {
      path: 'settings/logs',
      name: 'logs',
      meta: { title: 'logs.title', group: 'settings' },
      component: () => import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Logs.vue'),
    },
    {
      path: 'settings/maintenance',
      name: 'maintenance',
      meta: { title: 'maintenance.title', group: 'settings' },
      component: () =>
        import(/* webpackChunkName: "listmonk" */ '../views/listMonk/Maintenance.vue'),
    },
  ],
};
