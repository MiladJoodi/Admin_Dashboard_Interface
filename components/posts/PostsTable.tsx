import {
    Table,
    TableBody,
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
        <div>
            posts
        </div>
    );
}

export default PostsTable;