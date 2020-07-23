import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 7fZnCddiJ0CtVAyVevMxmvmLda7Dpx8QCp2zmeA8AE0'
	}
});