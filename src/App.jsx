import { QueryClientProvider, QueryClient} from 'react-query';
import Home from "./Home";
import Dog from "./Dog";

function App() {

	const client = new QueryClient();

	return (
		<>
		<QueryClientProvider client={client}>
			<Dog />
		</QueryClientProvider>
			<Home />
		</>
	);
}

export default App;
