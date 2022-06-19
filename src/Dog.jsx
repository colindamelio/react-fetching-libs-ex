import { useQuery } from "react-query";

export default function Dog() {
	const { isLoading, error, data } = useQuery("myDog", () =>
		fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json())
	);

	if (isLoading) return <div>...loadinssssg</div>
	if (error) return <div>`big error ${error}`</div>

	return (
		<div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
				laboriosam. Sed quisquam molestiae cum consequatur sapiente labore
				repellat quae voluptatum. Asperiores amet, omnis recusandae possimus
				nesciunt optio cum. Et, temporibus.
				<img src={data.message} width={400} height={400} alt="where is my image" />
			</p>
		</div>
	);
}
