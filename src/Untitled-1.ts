<BrowserRouter>
        <Routes>
          {/* Public  */}
          <Route
            path="/login"
            element={token ? <Navigate to="/posts" /> : <Login />}
          />
          <Route
            path="/register"
            element={token ? <Navigate to="/posts" /> : <Register />}
          />

          {/* Private */}
          <Route
            path="/posts"
            element={token ? <PostPage /> : <Navigate to="/login" />}
          />

          {/* login page  */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>