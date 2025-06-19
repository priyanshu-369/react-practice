import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/configuration.js";
import {Container, PostCard} from '../component/index.js'

// Simple and Attractive Hero Section Component
function HeroSection() {
    return (
        <div className="w-full bg-gray-100 py-20 sm:py-24 md:py-32 text-gray-800 border-b border-gray-200">
            <Container>
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-gray-900">
                        Your Ideas, Our Platform
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-8">
                        Share your thoughts, connect with readers, and explore a world of diverse perspectives.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/login" // Assuming you have a /login route
                            className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
                        >
                            Start Writing
                        </a>
                        <a
                            href="/all-posts" // Assuming you have an /all-posts route
                            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 transform hover:scale-105"
                        >
                            Explore Posts
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        appwriteService.getPosts().then((postsData) => {
            if (postsData) {
                setPosts(postsData.documents)
            }
        }).finally(() => {
            setLoading(false);
        });
    }, [])
    console.log(posts)

    return (
        <div className="w-full">
            {/* Hero Section is always rendered at the top */}
            <HeroSection />

            {/* Conditionally render posts or a loading/no posts message below the hero */}
            <div className="py-8 bg-white"> {/* Added a light background for this section */}
                <Container>
                    {loading ? (
                        <div className="text-center py-12">
                            <h2 className="text-xl font-bold text-gray-600">Loading posts...</h2>
                            <p className="text-gray-500 mt-2">Please wait a moment.</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="text-center py-12">
                            <h2 className="text-xl font-bold text-gray-600">No posts available yet.</h2>
                            <p className="text-gray-500 mt-2">Be the first to share your story!</p>
                        </div>
                    ) : (
                        <div className='flex flex-wrap -mx-2'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
            </div>
        </div>
    )
}

export default Home