import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
export function AppLayout() { const { pathname } = useLocation(); useEffect(() => window.scrollTo(0, 0), [pathname]); return <><Header /><main><Outlet /></main><Footer /></>; }
