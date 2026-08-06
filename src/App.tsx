import { Route, Routes, useParams } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { CataloguePage } from './pages/CataloguePage';
import { TrainingPage } from './pages/TrainingPage';
import { ContentPage } from './pages/ContentPage';
import { NotFoundPage } from './pages/NotFoundPage';

const contentPages = new Set(['entreprise', 'prestations', 'financements', 'qualiopi', 'contact', 'mentions-legales', 'confidentialite']);

function ContentRoute() {
  const { page } = useParams();
  return page && contentPages.has(page) ? <ContentPage /> : <NotFoundPage />;
}

export default function App() { return <Routes><Route element={<AppLayout/>}><Route index element={<HomePage/>}/><Route path="formations" element={<CataloguePage/>}/><Route path="formations/:slug" element={<TrainingPage/>}/><Route path=":page" element={<ContentRoute/>}/><Route path="*" element={<NotFoundPage/>}/></Route></Routes>; }
