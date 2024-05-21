import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import serviceReducer from './services/reducer';
import domainReducer from './domain/reducer';
import blogReducer from './blogs/reducer';
import researchReducer from './research/reducer';
import newsReducer from './news/reducer';
import varietyReducer from './variety/reducer';
import contactReducer from './contact/reducer';
import quotationReducer from './quotation/reducer';


const config = {
	key: 'root',
	storage,
	whitelist: [
		"service",
		"domain",
		"news",
		"blog",
		"research",
		"variety"
	],
};

const rootReducer = combineReducers({
	service: serviceReducer,
	domain: domainReducer,
	blog: blogReducer,
	research: researchReducer,
	news: newsReducer,
	variety: varietyReducer,
	send: contactReducer,
	quote: quotationReducer
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;