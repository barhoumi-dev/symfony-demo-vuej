import type {User} from "@/types/user";

export interface Post {
    id: Number,
    title: String,
    slug: String,
    summary: String,
    content: null,
    publishedAt: Date,
    author: User,
    comments: Array<Comment>,
    tags: Array<Tag>,
}
