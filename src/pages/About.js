import kabir_basra from '../images/Kabir_Basra.jpeg';

const About = () => {
  return (
    <div className="">
      
      <div className="main-title-fantasy">
        <h1 className="title2">About</h1>
        <h1 className="title1"> BSN</h1>
      </div>

      
      <h3>BrawlSports</h3> <br/>

      {/* Questions and Answers */}
      <details>
        <summary>What is our objective?</summary>
        <div class="">
          <p>
            BrawlSports aims to provide a unqiue perseptvite to Brawl Stars Esports viewership.
            Through our development, we want to create tools that allows fans to dive deeper into
            the action through statistical reviews, analytical breakdowns, one of a akind fantasy
            game and more...
          </p>
        </div>
      </details>
      <br/>
      <details>
        <summary>When was BSN founded?</summary>
        <div class="">
          <p>
            BrawlSports Network was initally conceptualised in May 2025, with deelopment starting
            that summer. We are currently still at the beginning of devlopment but we can guarantee
            that more and great features will be coming soon...
          </p>
        </div>
      </details>
      <br/>
      <details>
        <summary>What can we expect next?</summary>
        <div class="">
          <p>
            After finalising development of our fantasy and blog-post section, we will continue
            our operations towards social media platforms, inlcuding X, YouTube and more...
            <br/>(that is all we can say for now 🤫)
          </p>
        </div>
      </details>


      <div className="section-break"/>

      <h3>The Team</h3>

      <div className="about-members">
        <div className="about-member">
          <p className="member-name">Kabir Basra</p>
          <img src={kabir_basra} alt="Kabir_Basra" className="about-img"/>
          <span>Founder</span>
        </div>

        <div className="about-member-info">
          <h3>Kabir Basra</h3>
          
          <p>
            <i>Role:</i> Founder and Head of Development. <br/>
            <i>Supports:</i> Hmble <br/>
            <i>Fav Brawler:</i> Sprout, Kaze & Surge
          </p>
          <span>
            <a href="https://www.linkedin.com/in/kabir-basra-435b65282/">LinkedIn</a>
            <span> </span> 
            <a href="https://github.com/KabirBasra">GitHub</a>
            <span> </span>
          </span>
          
        </div>
      </div>

      <div className="section-break"/>

      <div className='progress-container'>
        <p>🕓 <em>And that's the team!</em></p>

        <p>
          BrawlSports is still in early development, but we <i>might</i> have oportunities
          for people to join the team in the future. If you are intrested in any writing, graphics
          or content creation roles in the future, then stay tuned and follow our
          socials on X and YouTube :)
        </p>
      </div>
    </div>
  )
}

export default About

// test