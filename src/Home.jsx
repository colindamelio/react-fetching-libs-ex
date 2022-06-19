import { useImageSWR } from "./hooks.js";

export default function Home() {
	const { data, isLoading, hasError } = useImageSWR();

	if (isLoading) return <div>...loading</div>;
	if (hasError) return <div>error message</div>;

	return (
		<div>
			<p>this is HOME image</p>
			<img src={data.message} height={300} width={300} />
		</div>
	);
}
