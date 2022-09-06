import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <>
        <div className='blog-wrap'>
          <Helmet>
            <title>
              {blog.title}
            </title>
          </Helmet>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>
          {blog.description.map((description, i) => (
            <div key={i}>
              {description}<br/><br/>
            </div>
          ))}
          </p>
        </div>
        <div className='blog-footer'>
            <h1 className='footer-header'>{blog.authorName}</h1>
            <p className='blog-date'>{blog.authorRole}</p>
            <img className='footer-img' src={blog.authorAvatar} alt="Author Picture"/>
            <h1 style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', textAlign: 'center'}}>
            {blog.authorBio.map((description, i) => (
            <div key={i}>
              {description}<br/><br />
            </div>
          ))}
            </h1>
        </div>
        </>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;