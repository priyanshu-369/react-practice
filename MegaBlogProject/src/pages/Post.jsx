import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/configuration.js";
import { Button, Container } from "../component/index.js";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            setLoading(true);
            appwriteService.getPost(slug).then((fetchedPost) => {
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    navigate("/");
                }
            }).catch(error => {
                console.error("Error fetching post:", error);
                navigate("/");
            }).finally(() => {
                setLoading(false);
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    if (post.featuredImage) {
                        appwriteService.deleteFile(post.featuredImage);
                    }
                    navigate("/");
                } else {
                    alert("Failed to delete the post.");
                }
            }).catch(error => {
                console.error("Error deleting post:", error);
                alert("An error occurred while deleting the post.");
            });
        }
    };

    const getFeaturedImageUrl = (fileId) => {
        return fileId
            ? appwriteService.getFilePreview(fileId)
            : 'https://placehold.co/800x400/e2e8f0/64748b?text=No+Image';
    };

    if (loading) {
        return (
            <div className="py-16 text-center bg-gray-50 min-h-[50vh]">
                <Container>
                    <h2 className="text-2xl font-bold text-gray-700">Loading post...</h2>
                    <p className="text-gray-500 mt-2">Please wait a moment.</p>
                </Container>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="py-16 text-center bg-gray-50 min-h-[50vh]">
                <Container>
                    <h2 className="text-2xl font-bold text-gray-700">Post not found.</h2>
                    <p className="text-gray-500 mt-2">The requested post does not exist or has been removed.</p>
                    <button
                        onClick={() => navigate("/")}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
                    >
                        Go to Home
                    </button>
                </Container>
            </div>
        );
    }

    return (
        <div className="py-8 bg-gray-50">
            <Container>
                <div className="bg-white rounded-lg shadow-xl p-5 md:p-7 lg:p-8 border border-gray-200">
                    <div className="w-full mb-6 relative">
                        <img
                            src={getFeaturedImageUrl(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md border border-gray-100 mx-auto"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'; }}
                        />

                        {isAuthor && (
                            <div className="absolute top-3 right-3 flex space-x-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-blue-600"
                                        className="py-1.5 px-3 rounded-md text-sm font-semibold transition duration-200 hover:bg-blue-700 shadow-md"
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-600"
                                    className="py-1.5 px-3 rounded-md text-sm font-semibold transition duration-200 hover:bg-red-700 shadow-md"
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5 text-center leading-tight">
                        {post.title}
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed mx-auto">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    );
}
