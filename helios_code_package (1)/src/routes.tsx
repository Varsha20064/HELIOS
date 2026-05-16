import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  /** Accessible without login. Routes without this flag require authentication. Has no effect when RouteGuard is not in use. */
  public?: boolean;
}

export const routes: RouteConfig[] = [
  {
    name: 'Landing',
    path: '/',
    element: <Landing />,
    public: true,
  },
  {
    name: 'Dashboard',
    path: '/app',
    element: <Dashboard />,
    public: true,
  }
];
