const About = () => {
  return (
    <div className="">
      
      <div className="main-title-fantasy">
        <h1 className="title2">About</h1>
        <h1 className="title1"> BSN</h1>
      </div>
      <h3>The Team</h3>

      <div className="about-members">
        <div className="about-member">
          <h4>Kabir</h4>
          <span>Founder</span>
        </div>

        <div className="about-member-info">
          <h3>Kabir Basra</h3>
          <p>
            <i>Role:</i> Founder and Head of Development. <br/>
            <i>Fav Teams:</i> Hmble <br/>
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

      <br></br>

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