import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Accounts = React.lazy(() => import('./views/Accounts/AccountsList/Accounts'));
const NewAccount = React.lazy(() => import('./views/Accounts/NewAccount/NewAccount'));
const EditAccount = React.lazy(() => import('./views/Accounts/EditAccount/EditAccount'));
const Groups = React.lazy(() => import('./views/Groups/GroupsList/Groups'));
const NewGroup = React.lazy(() => import('./views/Groups/NewGroup/NewGroup'));
const EditGroup = React.lazy(() => import('./views/Groups/EditGroup/EditGroup'));
const SendInvite = React.lazy(() => import('./views/Groups/SendInvite/SendInvite'));
const Transactions = React.lazy(() => import('./views/Transactions/TransactionsList/Transactions'));
const NewTransaction = React.lazy(() => import('./views/Transactions/NewTransaction/NewTransaction'));

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true, },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true, },
  { path: '/accounts', name: 'Accounts', component: Accounts, exact: true, },
  { path: '/accounts/new', name: 'New Account', component: NewAccount, exact: true, },
  { path: '/accounts/:id', name: 'Edit Account', component: EditAccount, exact: true, },
  { path: '/groups', name: 'Groups', component: Groups, exact: true, },
  { path: '/groups/new', name: 'New Group', component: NewGroup, exact: true, },
  { path: '/groups/send-invite', name: 'Invite to group', component: SendInvite, exact: true, },
  { path: '/groups/:id', name: 'Edit Group', component: EditGroup, exact: true, },
  { path: '/transactions', name: 'Transactions', component: Transactions, exact: true, },
  { path: '/transactions/new', name: 'New Transaction', component: NewTransaction, exact: true, },

  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
];

export default routes;
