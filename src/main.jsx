import ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from './contexts/Theme';
import AuthProvider from './contexts/Auth';

import './assets/css/index.css';
import { SidebarProvider } from './contexts/Sidebar';
import ThemedSuspense from './hoc/ThemedSuspense';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <SidebarProvider>
        <Suspense fallback={ThemedSuspense}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Suspense>
      </SidebarProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
