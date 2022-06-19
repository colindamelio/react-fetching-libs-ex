import useSWR from "swr";

export function useImageSWR() {
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	
	const { data, error } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher);
	
	return {
		data,
		isLoading: !data,
		hasError: error
	}

}
