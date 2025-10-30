import { useEffect, useState } from "react";
import Posts from "../../data/posts.json";
import styles from "./MyFeedback.module.scss";
import PostCard from "../../components/postCard/PostCard";

interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
	date: string;
}

const MyFeedback = () => {
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
					<div className={styles.settings}>
						<p>Filters:</p>
						<p>Sort:</p>
					</div>

					<p>lets put a table here.</p>

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

export default MyFeedback;
