import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Search } from '../components/Search';
import { HomePage } from '../pages/HomePage';
import { PokemonPage } from '../pages/PokemonPage';
import { SearchPage } from '../pages/SearchPage';


export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Search />}>
					<Route index element={<HomePage />} />
					<Route path='pokemon/:id' element={<PokemonPage />} />
					<Route path='search' element={<SearchPage />} />
				</Route>

							<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};