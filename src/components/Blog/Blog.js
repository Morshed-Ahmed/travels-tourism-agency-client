import React from 'react';

const Blog = () => {
    return (
        <div>


            <div className="row container">
                <h3>BLOG FULLWIDTH</h3>
                <div className="col md 6">
                    <img className="img-fluid ms-5" src={'https://max-themes.net/demos/altair/upload/s01-960x640.jpg'} alt="" />
                    <h4>STANDARD BLOG POST WITH IMAGE</h4>
                    <small>MAY 28, 2014  BY  ADMIN </small>
                    <p>Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Be who you are and say […]</p>
                </div>
                <div className="col md 6">
                    <h5>RECENT POSTS</h5>
                    <p>Standard Blog Post With Image</p>
                    <p>Amazing Fullwidth Post</p>
                    <p>Link Post</p>
                    <p>Quote Post</p>
                    <p>Sidebar Post With Slideshow</p>
                    <br />
                    <h5>CATEGORIES</h5>
                    <p>Business</p>
                    <p>Creative</p>
                    <p>Ecommerce</p>
                    <p>Photography</p>
                    <p>Wordpress</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;