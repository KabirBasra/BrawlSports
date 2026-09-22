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
          <span>Founder & Lead Developer</span>
        </div>

        <div className="about-member-info">
          <span>Founder of BrawlSports.gg and head of development</span>
          <span><a href="https://www.linkedin.com/in/kabir-basra-435b65282/">LinkedIn</a></span>
          <span><a href="https://github.com/KabirBasra">GitHub</a></span>
        </div>
      </div>

      <br></br>

      <div className='progress-container'>
        <p>🕓 <em>You are early!</em></p>

        <p>
          This page is still in development and will be released in the coming days.
          We aim to have it released in <strong>early October</strong>, so to tune back
          in around then. Feel free to explore the rest of BSN in the meanwhilst...
        </p>
      </div>
    </div>
  )
}

export default About

// test