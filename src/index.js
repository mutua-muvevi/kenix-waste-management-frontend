import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './error/errorBoundary';
// locales
import ThemeLocalization from './locales';

import ScrollToTop from './components/scroll-to-top';
import SnackbarProvider from './components/snackbar';
import { MotionLazyContainer } from './components/animate';

import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './theme';
import { AuthProvider } from './auth/JwtContext';
import { ThemeSettings, SettingsProvider } from './components/settings';


import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Whatsapp from './components/whatsapp/whatsapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthProvider>
		<HelmetProvider>
			<React.StrictMode>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<SettingsProvider>
							<BrowserRouter>
								<ScrollToTop />
								<MotionLazyContainer>
									<ThemeProvider>
										<ThemeSettings>
											<Whatsapp>
												<ThemeLocalization>
													<SnackbarProvider>
														<Suspense fallback="Loading...">
															<ErrorBoundary>
																<App />
															</ErrorBoundary>
														</Suspense>
													</SnackbarProvider>
												</ThemeLocalization>
											</Whatsapp>
										</ThemeSettings>
									</ThemeProvider>
								</MotionLazyContainer>
							</BrowserRouter>
						</SettingsProvider>
					</PersistGate>
				</Provider>
			</React.StrictMode>
		</HelmetProvider>
	</AuthProvider>
);

reportWebVitals();
