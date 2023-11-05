export interface Post {
    id: Number,
    title: String,
    slug: String,
    summary: String,
    content: null,
    publishedAt: Date,
    author: User,
    comments: Array,
    tags: Array,
}
