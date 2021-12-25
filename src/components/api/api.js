import axios from 'axios';

const store = axios.create({
	baseURL: 'https://61c3339c9cfb8f0017a3ea13.mockapi.io/UsersData',
});

export default class API {
	static getProducts = async () => {
		const { data } = await store.get();
		return data;
	};
	static getCategory = async (category) => {
		const { data } = await store.get('/category/' + category);
		return data;
	};
}
