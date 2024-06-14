import BackButton from "@/components/BackButton";
import PostsTable from "@/components/posts/PostsTable";


const PostPage = () => {
    return (
        <>
        <BackButton text="Go Back" link="/" />
        <PostsTable />
        </>
    );
}

export default PostPage;