import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../Redux/action";
import styles from "../Components/styles/styles.module.css";

const Navbar = () => {

  const [timer, setTimer] = useState(undefined);//state for debouncing

  const dispatch = useDispatch();//dispath used to triger an action

  //search functionality for searching and as well as debouncing
  const handlesearch = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(searchData(e.target.value));
        // console.log("debounce=", e.target.value);
      }, 300)
    );
  };

  return (
    <>
      {/* taken input over here */}
      <div className={styles.parentinput}>
        <div className={styles.inputclass}>
          <input type="search" onKeyUp={handlesearch} placeholder="search" />
        </div>

        {/* static design so page looks fine */}

        <div className={styles.TrendingTags}>
          <div className={styles.TrendingTagsheader}>
            <div className={styles.TrendingTagslabel}>
              <span>Explore Tags</span>
            </div>
            <div  className={styles.TrendingTagslabelToggle}>MORE TAGS +</div>
          </div>
        </div>

        {/* //parentdiv of all box */}
        <div className={styles.TrendingTagscontainer}>
          {/* 1box */}
          <div className={styles.TrendingTagscontainerchild}>
            <div className={styles.Tag}>
              <img
                height="70"
                src="https://pokemongolive.com/img/posts/anniversaryposter2019.jpg"
                alt=""
              />
            </div>

            <div className={styles.Tagtitle}>
              <div className={styles.Tagname}>pokemon</div>
              <div className={styles.Tagposts}>FEATURED • 52,201 Posts</div>
            </div>
          </div>

          {/* //2nd box */}

          <div className={styles.TrendingTagscontainerchild}>
            <div className={styles.Tag}>
              <img
                height="70"
                src="https://a-z-animals.com/media/2021/01/mammals-400x300.jpg"
                alt=""
              />
            </div>

            <div className={styles.Tagtitle}>
              <div className={styles.Tagname}>animals</div>
              <div className={styles.Tagposts}>FEATURED • 50,201 Posts</div>
            </div>
          </div>

          {/* 3rd box */}

          <div className={styles.TrendingTagscontainerchild}>
            <div className={styles.Tag}>
              <img
                height="70"
                src="https://www.who.int/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1024v.jpg?Culture=en&sfvrsn=4dba955c_6"
                alt=""
              />
            </div>

            <div className={styles.Tagtitle}>
              <div className={styles.Tagname}>coronavirus</div>
              <div className={styles.Tagposts}>FEATURED • 52,201 Posts</div>
            </div>
          </div>

          {/* //4th box*/}

          <div className={styles.TrendingTagscontainerchild}>
            <div className={styles.Tag}>
              <img
                height="70"
                src="https://funkylife.in/wp-content/uploads/2021/08/20201217_185929.jpeg"
                alt=""
              />
            </div>

            <div className={styles.Tagtitle}>
              <div className={styles.Tagname}>Funny</div>
              <div className={styles.Tagposts}>FEATURED • 52,201 Posts</div>
            </div>
          </div>

          {/* 5thbox */}

          <div className={styles.TrendingTagscontainerchild}>
            <div className={styles.Tag}>
              <img
                height="70"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Jack-o%27-Lantern_2003-10-31.jpg"
                alt=""
              />
            </div>

            <div className={styles.Tagtitle}>
              <div className={styles.Tagname}>Halloween</div>
              <div className={styles.Tagposts}>FEATURED • 52,201 Posts</div>
            </div>
          </div>

          {/* //6th box */}

          <div className={styles.TrendingTagscontainerchild}>
            <div className={styles.Tag}>
              <img
                height="70"
                src="https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg"
                alt=""
              />
            </div>

            <div className={styles.Tagtitle}>
              <div className={styles.Tagname}>technology</div>
              <div className={styles.Tagposts}>FEATURED • 52,201 Posts</div>
            </div>
          </div>

          {/* //7th box */}

          <div className={styles.TrendingTagscontainerchild}>
            <div className={styles.Tag}>
              <img
                height="70"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"
                alt=""
              />
            </div>

            <div className={styles.Tagtitle}>
              <div className={styles.Tagname}>flowers</div>
              <div className={styles.Tagposts}>FEATURED • 52,201 Posts</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
