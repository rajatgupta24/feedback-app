import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/navbar/Navbar";

import styles from "./App.module.scss";
import MyFeedback from "./pages/myFeedback/MyFeedback";
import ReceivedFeedback from "./pages/receivedFeedback/ReceivedFeedback";

function App() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/my-feedback" element={<MyFeedback />} />
					<Route path="/received" element={<ReceivedFeedback />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
