import React from 'react';
import "./Blogs.css"
import detoxImage from "../../assets/detox.png";
import person from "../../assets/author.jpeg";
import CommonHeader from '../CommonHeader/CommonHeader';
import CommonSuperText from '../CommonSuperText/CommonSuperText';

const Blogs = () => {

    const blogCard = () => {
        return (
            <div className='blogCard'>
                <div className='detoxImage'></div>
                <div className='blogTexts'>
                    <div className='blogDate'>
                        <span>Medical</span>
                        <span>March 31, 2022</span>
                    </div>
                    <div className='blogTitle'>{"6 Tips To Protect Your Mental Health When You’re Sick"}</div>
                    <div className='author'>
                        <img src={person} className='authorImage' alt='author'/>
                        <span className='authorName'>Rebecca Lee</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='Blogs'>
            <div className='BlogsBody commonContainer'>
                <CommonSuperText text="blog & news" transform={"capitalize"}/>
                <span className='blogSuperText'></span>
                <CommonHeader text="Read Our Latest News" />
                <div className='blogsArray'>
                    {blogCard()}
                    {blogCard()}
                    {blogCard()}
                </div>
            </div>
        </div>
    );
};

export default Blogs;