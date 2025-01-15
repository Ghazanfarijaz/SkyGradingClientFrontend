import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import the Layout component

// Import your pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import SubmitCard from "./pages/SubmitCard";
import Search from "./pages/Search";
import ProfilePage from "./pages/ProfilePage";
import Tracking from "./pages/Tracking";

import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./api/store";
import { AuthProvider } from "./authentication/authProvider";
import PrivateRoute from "./authentication/PrivateRoute"; // Import the PrivateRoute component
import Success from "./components/Success";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <div className="App">
            {/* Route Configuration */}
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="/login"
                element={
                  <Layout>
                    <Login />
                  </Layout>
                }
              />
              <Route
                path="/signup"
                element={
                  <Layout>
                    <Signup />
                  </Layout>
                }
              />
              <Route
                path="/contact"
                element={
                  <Layout>
                    <ContactUs />
                  </Layout>
                }
              />
              <Route
                path="/pricing"
                element={
                  <Layout>
                    <Pricing />
                  </Layout>
                }
              />
              <Route
                path="/search"
                element={
                  <Layout>
                    <Search />
                  </Layout>
                }
              />
              <Route
                path="/profile"
                element={
                  <Layout>
                    <ProfilePage />
                  </Layout>
                }
              />
              {/* Protected Routes */}
              <Route
                path="/submit"
                element={
                  <PrivateRoute>
                    <Layout>
                      <SubmitCard />
                    </Layout>
                  </PrivateRoute>
                }
              />
              <Route
                path="/tracking"
                element={
                  <PrivateRoute>
                    <Layout>
                      <Tracking />
                    </Layout>
                  </PrivateRoute>
                }
              />
               <Route
                path="/success"
                element={
                  <PrivateRoute>
                    <Layout>
                      <Success />
                    </Layout>
                  </PrivateRoute>
                }
              />
             
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
