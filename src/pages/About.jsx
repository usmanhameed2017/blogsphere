import React from 'react';
import { FaPencilAlt, FaComments, FaHeart, FaRocket } from 'react-icons/fa';

function About() 
{
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <h1>About Us</h1>
                <p>
                Welcome to our vibrant community! We're passionate about creating meaningful content and experiences.
                </p>
            </section>

            {/* Divider */}
            <div className="section-divider">Who We Are</div>

            {/* Content Sections */}
            <section className="about-content">
                <div className="about-card">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to inspire and empower individuals through engaging stories, cutting-edge technology, and a commitment to excellence.
                    </p>
                </div>

                <div className="about-card">
                    <h2>Our Vision</h2>
                    <p>
                        To be a leading platform that connects people across the globe, fostering creativity, collaboration, and growth.
                    </p>
                </div>

                <div className="about-card">
                    <h2>Our Values</h2>
                    <p>
                        We value integrity, inclusivity, and innovation. Every step we take is guided by our commitment to making a positive impact.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="section-divider">Our Blogging Ecosystem</div>

            <section className="about-content">
                <div className="about-card">
                    <h2>BlogSphere</h2>
                    <p>
                        Dive into our dynamic BlogSphere where ideas come alive! Share your stories, insights, and expertise by posting engaging blogs. Whether you're a beginner or a seasoned writer, our platform is designed to make your voice heard.
                    </p>
                </div>

                <div className="about-card">
                    <h2>Comment & Collaborate</h2>
                    <p>
                        Interact with others by commenting on blog posts. Share your thoughts, ask questions, and spark meaningful discussions. Your comments can inspire others and help build a collaborative environment where ideas flourish.
                    </p>
                </div>

                <div className="about-card">
                    <h2>Feedback & Growth</h2>
                    <p>
                        We believe in continuous improvement. Check out feedback from readers on your posts and use it to grow as a writer. Feedback isn't just critique—it’s a pathway to better storytelling and impactful connections.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="section-divider">Fun & Creativity</div>

            {/* Blog and Community Features */}
            <section className="about-features">
                <div className="feature-card">
                    <h2> <FaPencilAlt className="fun-icon spin" title="Write Blogs" /> Post Your Blogs and Watch Them Shine</h2>
                    <p>
                        In today’s digital world, sharing your voice matters more than ever. Our platform is designed for creators who want to express themselves through blogs that stand out. From personal stories to expert opinions, every blog you post gets a spotlight, allowing it to shine. With our user-friendly tools, you can customize layouts, add media, and craft posts that resonate with readers. Not only will your blogs be seen, but they will also inspire discussions and engagement. Our content curation algorithms ensure your quality work gets noticed, and our analytics help you track impact. It’s time to let your words make a mark and watch your blogs light up the creative universe.
                    </p>
                </div>

                <div className="feature-card">
                    <h2> <FaComments className="fun-icon bounce" title="Comment & Interact" /> Leave Comments, Make Friends, and Grow Together</h2>
                    <p>
                        A blog post is just the beginning. The real magic happens in the comments where readers and writers connect. Our commenting system is designed to spark meaningful conversations. Whether you’re asking a question, sharing feedback, or engaging in a debate, comments are a way to build connections and friendships. Authors can respond, clarifying ideas or simply expressing gratitude. These interactions create a feedback loop that helps both readers and writers grow. We’ve also integrated moderation tools to keep conversations respectful and inclusive. By engaging, you’re not just part of a platform; you’re part of a supportive and evolving community where ideas flourish.
                    </p>
                </div>

                <div className="feature-card">
                    <h2> <FaHeart className="fun-icon pulse" title="Spread Love" /> Be Inspired, Share Love, and Embrace Feedback</h2>
                    <p>
                        Feedback isn’t just about pointing out flaws; it’s about growth, appreciation, and collaboration. On our platform, we encourage users to leave thoughtful feedback that inspires and uplifts. Authors can take this feedback to improve and refine their work, while readers benefit from deeper insights and shared perspectives. We believe in fostering a culture where positive reinforcement and constructive criticism coexist. Whether it’s a simple like, a detailed comment, or a shoutout on social media, every form of interaction adds to the ecosystem of creativity. Let’s inspire each other, share love, and make every blog a stepping stone toward brilliance.
                    </p>
                </div>

                <div className="feature-card">
                    <h2> <FaRocket className="fun-icon fly" title="Launch Your Ideas" /> Bring Your Ideas to Life and Let's Create Something Amazing</h2>
                    <p>
                        This isn’t just a blogging platform; it’s a launchpad for creativity. Here, your ideas aren’t confined to drafts or notebooks—they take flight. We provide tools, inspiration, and a community that helps turn concepts into captivating content. Whether you’re a storyteller, a tech enthusiast, or a creative artist, our platform supports your journey from idea to execution. And it doesn’t stop at posting; our analytics, feedback systems, and engagement tools ensure your creations evolve and reach their full potential. Let’s collaborate, experiment, and create something amazing together. Your imagination is the limit, and we’re here to amplify it.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;