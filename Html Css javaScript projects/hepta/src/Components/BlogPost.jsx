import "../../src/Styling/BlogPost.css";
import boat from "../../src/Styling/boat.webp";
import chair from "../../src/Styling/chair.webp";
import juices from "../../src/Styling/juices.webp";
function BlogPost(){
  return(
    <div className="blogs">
       <div className="blogs-data">
         <h1 className="blog-heading">Recent Blog Post</h1>
          <p className="blog-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
       </div>
       <div className="bb">
       <div className="blog-cards">
       <div className="bcard">
            <img className="bcard-img" src={juices} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div> 
        </div>
        <div className="bcard">
            <img className="bcard-img" src={boat} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div>
        </div>
        <div className="bcard">
            <img className="bcard-img" src={chair} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div>
        </div>
       </div>
       </div>
    </div>
  )
}export default BlogPost;