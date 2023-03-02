import './App.scss';
import AuthPage from '../AuthPage/AuthPage';
import FreezerPage from '../FreezerPage/FreezerPage';
import FridgePage from '../FridgePage/FridgePage';
import LandingPage from '../LandingPage/LandingPage';
import NewItemPage from '../NewItemPage/NewItemPage';
import NewRecipePage from '../NewRecipePage/NewRecipePage';
import PantryPage from '../PantryPage/PantryPage';
import RecipesPage from '../RecipesPage/RecipesPage';
import SuppliesPage from '../SuppliesPage/SuppliesPage';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';
import SignupForm from '../../components/SignupForm/SignupForm';

import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="App">
      { user ?
      <>
        <NavBar />
        <Routes>
          <Route path='/*' element={<Navigate to='LandingPage'/>} />
        </Routes>
      </>
      :
      <AuthPage />
      }
    </div>
  );
}