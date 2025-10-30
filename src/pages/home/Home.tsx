import { useEffect, useState } from "react";
import Posts from "../../data/posts.json";
import styles from "./Home.module.scss";
import PostCard from "../../components/postCard/PostCard";

interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
	date: string;
}

const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		try {
			// Simulate fetching posts from a local JSON file
			setPosts(Posts);
		} catch (error) {
			setPosts([]);
			console.error("Error fetching posts:", error);
		}
	};

	return (
		<>
			<div>
				<div className={styles.cards}>
					{posts.length === 0 ? (
						<div>No posts available.</div>
					) : (
						posts.map((post) => (
							<PostCard
								key={post.id}
								title={post.title}
								description={post.content}
								author={post.author}
								date={post.date}
							/>
						))
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
