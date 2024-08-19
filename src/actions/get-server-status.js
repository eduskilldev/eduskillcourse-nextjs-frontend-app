'use server';

async function getServerstatus() {
	const options = {
		method: 'GET',
		cache: 'no-store',
	};

	const res = await fetch(process.env.TEST_API_URL, options);
	const data = await res.json();

	return data;
}

export { getServerstatus };
