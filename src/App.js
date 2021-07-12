import React, { Component } from 'react';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'

function App() {
	return (
		<ThemeProvider>
			<PageContent>
				<Navbar />
				<Form />
			</PageContent>
		</ThemeProvider>
	);
}

export default App;
