"use client"

import BackButton from "@/components/BackButton";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import posts from "@/data/posts";

  const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
    body: z.string().min(1, {
        message: 'Body is required'
    }),
    author: z.string().min(1, {
        message: 'Author is required'
    }),
    date: z.string().min(1, {
        message: 'Date is required'
    }),
  });

interface PostEditPageProps {
    params: {
        id: string;
    }
}

const PostEditPage = ({params}: PostEditPageProps) => {

    const post = posts.find((post)=> post.id === params.id);

    console.log(post)

    return (
        <>
            <BackButton text="Back To Posts" link="/posts" />
        </>
    );
}

export default PostEditPage;