import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { currentUserThunk } from 'redux/auth/thunks';
import PrivateRoute from './form/PrivateRoute';
import PublicRoute from './form/PublickRoute';
import Layout from './form/Layout';
import authSelectors from 'redux/auth/selectors';

const Home = lazy(() => import('../pages/Contacts/Home/Home.jsx'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts.jsx'));
const SignUp = lazy(() => import('../pages/Contacts/SignUp/SignUp.jsx'));
const LogIn = lazy(() => import('../pages/Contacts/LogIn/LogIn.jsx'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LogIn />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
        <ToastContainer
          autoClose={2500}
          position="top-center"
          theme="colored"
          closeOnClick
        />
      </>
    )
  );
}