import React from 'react'
import './hotelview.scss'
import hotel1 from '../../img/hotel-1.jpg'
import hotel2 from '../../img/hotel-2.jpg'
import hotel3 from '../../img/hotel-3.jpg'
import userP from '../../img/user-3.jpg'
import userP2 from '../../img/user-4.jpg'
import userP3 from '../../img/user-5.jpg'
import userP4 from '../../img/user-6.jpg'
import userP1 from '../../img/user-1.jpg'
import userP6 from '../../img/user-2.jpg'


const HotelView = () => {
  return (

<main className="Hotel-view">
  
<div className="gallery">
  <figure className="gallery_item">
<img src={hotel1} alt="" className="gallery_photo" />
  </figure>
  <figure className="gallery_item">
<img src={hotel2} alt="" className="gallery_photo" />
  </figure>
  <figure className="gallery_item">
<img src={hotel3} alt="" className="gallery_photo" />
  </figure>
</div>

<div className="overview">
  <h1 className="overview_heading">
    Hotel Las Palmas
  </h1>
  <div className="overview_stars">
  <i class="fa-solid fa-star overview_star"></i>
  <i class="fa-solid fa-star overview_star"></i>
  <i class="fa-solid fa-star overview_star"></i>
  <i class="fa-solid fa-star overview_star"></i>
  <i class="fa-solid fa-star overview_star"></i>
  </div>
  <div className="overview_location">
  <i class="fa-solid fa-location-dot overview_star"></i>
  <button className="btn-inline">Albufeira,Portugal</button>
  </div>


<div className="overview_rating">
  <div className="overview_rating-average">
    8.6
  </div>
  <div className="overview_rating-count">
    429 votes
  </div>
</div>
</div>



<div className="detail">

<div className="description">
<p className="paragraph">
  
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
</p>
<p className="paragraph">
Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
</p>

<ul className="list">
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i> Close to The Bech
  </li>
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i> Breakfast Included
  </li>
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i> Free airport Shuttle
  </li>
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i>We speak All Languages
  </li>
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i> Perfect for families
  </li>
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i>  Free Wifi in all Rooms
  </li>
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i>  Air Conditioning and Heating
  </li>
  <li className="list_item">
  <i class="fa-solid fa-chevron-right"></i>  Pets Allowed
  </li>
</ul>

<div className="recommend">
  <p className="recommend_count">
Lucy and 3 other friends recommend this hotel.
  </p>
  <div className="recommend_friends">
    <img src={userP} alt="Friend-1" className="recommend_photo" />
    <img src={userP2} alt="Friend-2" className="recommend_photo" />
    <img src={userP3} alt="Friend-3" className="recommend_photo" />
    <img src={userP4} alt="Friend-4" className="recommend_photo" />
  </div>
</div>
</div>

<div className="user-reviews">

  <figure className="review">
<blockquote className="review_text">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
</blockquote>
<figcaption className="review_user">

<img src={userP} alt="user 1" className="review_photo" />

<div className="review_user-box">
<p className="review_user-name">Nick Smith</p>
<p className="review_user-date">Feb 23rd, 2017</p>
</div>

<div className="review_rating">
  7.8
</div>
</figcaption>
  </figure>

  <figure className="review">
<blockquote className="review_text">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
</blockquote><figcaption className="review_user">
<img src={userP6} alt="user 1" className="review_photo" />

<div className="review_user-box">
<p className="review_user-name">Tolulope Odugbemi</p>
<p className="review_user-date">Feb 2nd, 2017</p>
</div>
<div className="review_rating">
  8.0
</div>
</figcaption>

  </figure>

  <button className="btn-inline center">Show all <span>&rarr;</span></button>
</div>





</div>
<div className="cta">
  <h2 className="cta_book-now">
    Good news We have 4 free rooms for your selected dates;
  </h2>
  <button className="btn">
 
    <span className="btn_visible">
Book now!
    </span>
    <span className="btn_invisible">
    Only 4 rooms left
    </span>
  </button>
</div>

</main>

 
  )
}

export default HotelView