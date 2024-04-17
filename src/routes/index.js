import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
// components
import LoadingScreen from '../components/LoadingScreen';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import DashboardLayout from '../layouts/dashboard';
import { PATH_AFTER_LOGIN } from './paths';
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
      ],
    },
    // Dashboard
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/list" replace />, index: true },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: ':id/edit', element: <UserCreate /> },
          ],
        },
        {
          path: 'publication',
          children: [
            { element: <Navigate to="/dashboard/publication/list" replace />, index: true },
            { path: 'list', element: <PublicationList /> },
            { path: 'new', element: <PublicationCreate /> },
            // { path: ':name/edit', element: <UserUpdate /> },
          ],
        },
        {
          path: 'research',
          children: [
            { element: <Navigate to="/dashboard/research/list" replace />, index: true },
            { path: 'list', element: <ResearchList /> },
            { path: 'new', element: <ResearchCreate /> },
            // { path: ':name/edit', element: <UserUpdate /> },
          ],
        },
        {
          path: 'facility',
          children: [
            { element: <Navigate to="/dashboard/facility/list" replace />, index: true },
            { path: 'list', element: <FacilityList /> },
            { path: 'new', element: <FacilityCreate /> },
            // { path: ':name/edit', element: <UserUpdate /> },
          ],
        },
        {
          path: 'news',
          children: [
            { element: <Navigate to="/dashboard/news/list" replace />, index: true },
            { path: 'list', element: <NewsList /> },
            { path: 'new', element: <NewsCreate /> },
            // { path: ':name/edit', element: <UserUpdate /> },
          ],
        },
        {
          path: 'drive',
          children: [
            { element: <Navigate to="/dashboard/drive/list" replace />, index: true },
            { path: 'list', element: <DriveList /> },
            { path: 'new', element: <DriveCreate /> },
            // { path: ':name/edit', element: <UserUpdate /> },
          ],
        },
      ],
    },
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'auth', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'people', element: <People /> },
        { path: 'publication', element: <PublicationList /> },
        { path: 'research', element: <ResearchList /> },
        { path: 'facility', element: <FacilityList /> },
        { path: 'news', element: <NewsList /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const People = Loadable(lazy(() => import('../pages/People')));
// DASHBOARD
const PublicationList = Loadable(lazy(() => import('../pages/dashboard/publication/PublictionList')));
const PublicationCreate = Loadable(lazy(() => import('../pages/dashboard/publication/PublictionCreate')));

const ResearchList = Loadable(lazy(() => import('../pages/dashboard/research/ResearchList')));
const ResearchCreate = Loadable(lazy(() => import('../pages/dashboard/research/ResearchCreate')));

const FacilityList = Loadable(lazy(() => import('../pages/dashboard/facility/FacilityList')));
const FacilityCreate = Loadable(lazy(() => import('../pages/dashboard/facility/FacilityCreate')));

const NewsList = Loadable(lazy(() => import('../pages/dashboard/news/NewsList')));
const NewsCreate = Loadable(lazy(() => import('../pages/dashboard/news/NewsCreate')));

const DriveList = Loadable(lazy(() => import('../pages/dashboard/driver/DriverList')));
const DriveCreate = Loadable(lazy(() => import('../pages/dashboard/driver/DriverCreate')));

/// / OTHERS
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const UserList = Loadable(lazy(() => import('../pages/dashboard/user/UserList')));
const UserCreate = Loadable(lazy(() => import('../pages/dashboard/user/UserCreate')));
const UserUpdate = Loadable(lazy(() => import('../pages/dashboard/user/UserUpdate')));
