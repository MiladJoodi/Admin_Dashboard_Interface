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

const PostEditPage = () => {
    return (
        <>
            <BackButton text="Back To Posts" link="/posts" />
        </>
    );
}

export default PostEditPage;