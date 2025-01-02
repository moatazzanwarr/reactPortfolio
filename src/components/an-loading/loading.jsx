// Imports
import React ,{useEffect} from 'react'
import './loading.css'


function Loading() {

    useEffect(() => {
      const animation = document.getElementById("loading");
      if (animation) {
          setTimeout(() => {
              animation.style.display = "none";
          }, 3000);
      }
  }, []);
  return (
    <section className='loading' id='loading'>
      <div className='loding-container'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Loading
