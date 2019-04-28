import React, { Component } from 'react'
import SiteTitle from './SiteTitle'
import PostFeatured from './PostFeatured'
import PostAllPost from './PostAllPost'

export default class Home extends Component {
    render() {
        return (
            <div className="container margtop3rem">
            <SiteTitle/>
            {/* End Site Title================================================== */}
            {/* Begin Featured================================================== */}
            <section className="featured-posts">
              <div className="section-title">
                <h2><span>Featured</span></h2>
              </div>
              <div className="card-columns listfeaturedtag">
                {/* begin post */}
                <PostFeatured/>               
                <PostFeatured/>             
                <PostFeatured/>          
                <PostFeatured/>
                {/* end post */}
              </div>
            </section>
            {/* End Featured================================================== */}
            {/* Begin List Posts================================================== */}
            <section className="recent-posts">
              <div className="section-title">
                <h2><span>All Stories</span></h2>
              </div>
              <div className="card-columns listrecent">
                {/* begin post */}
                <PostAllPost/>
                <PostAllPost/>
                <PostAllPost/>              
                <PostAllPost/>            
                <PostAllPost/>
                <PostAllPost/>
                {/* end post */}
              </div>
            </section>
            {/* End List Posts ================================================== */}
              {/* <AlertBar/>          */}
          </div>
        )
    }
}
