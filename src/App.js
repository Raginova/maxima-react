import './App.scss';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ReviewsPage from './pages/ReviewsPage';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import WorksPage from './pages/WorksPage';


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<DefaultLayout/>}>
                <Route index element={<IndexPage/>} />
                <Route path={'reviews'} element={<ReviewsPage/>} />
                <Route path={'works'} element={<WorksPage />} />
            </Route>
        </Routes>

    );
}

export default App
