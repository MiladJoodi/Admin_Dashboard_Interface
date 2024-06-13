import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import Link from "next/link";
  import posts from '@/data/posts'

  interface PostsTableProps {
    limit?: number;
    title?: string
  }

const PostsTable = ({limit, title} : PostsTableProps) => {
    return (
        <div className="mt-10">
            <h3 className="text-2xl mb-4 font-semibold">
                {title ? title : 'Posts'}
            </h3>
            <Table>
                <TableCaption>A list of recent posts</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Author</TableHead>
                        <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((post)=> (
                        <TableRow key={post.id}>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default PostsTable;