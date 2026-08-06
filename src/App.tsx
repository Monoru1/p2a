import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { CataloguePage } from './pages/CataloguePage';
import { TrainingPage } from './pages/TrainingPage';
import { ContentPage } from './pages/ContentPage';

export default function App() { return <Routes><Route element={<AppLayout/>}><Route index element={<HomePage/>}/><Route path="formations" element={<CataloguePage/>}/><Route path="formations/:slug" element={<TrainingPage/>}/><Route path=":page" element={<ContentPage/>}/></Route></Routes>; }
