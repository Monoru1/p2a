import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { CataloguePage } from './pages/CataloguePage';
import { TrainingPage } from './pages/TrainingPage';
import { ContentPage } from './pages/ContentPage';

export default function App() { return <Routes><Route element={<AppLayout/>}><Route index element={<HomePage/>}/><Route path="formations" element={<CataloguePage/>}/><Route path="formations/:slug" element={<TrainingPage/>}/><Route path="entreprise" element={<ContentPage/>}/><Route path="prestations" element={<ContentPage/>}/><Route path="financements" element={<ContentPage/>}/><Route path="qualiopi" element={<ContentPage/>}/><Route path="contact" element={<ContentPage/>}/><Route path="mentions-legales" element={<ContentPage/>}/><Route path="confidentialite" element={<ContentPage/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>; }
