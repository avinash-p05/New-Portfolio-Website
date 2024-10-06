import AchievementCard from "./AchievementCard"
import PyhackImage from "../images/pyhack.jpg"
import H2F from "../images/h2f.jpg"
import Odyssey from "../images/odyssey.jpg"
import TCE from "../images/tce.jpg"
import Wave from "../images/wave.jpg"


const Achievements = () => {
    return (
      <div>
        <h1 className='projectHeading'>My <b>Achievements</b></h1>
        <div className='project'>
          <AchievementCard 
            photo={Wave} 
            title="Wave 2.0 - National Level Hackathon" 
            description="1st Runner-up at Wave 2.0 National Level
Hackathon at Basaveshwar Engineering
College, Bagalkote"
            link="https://www.linkedin.com/posts/avinash-pauskar_klsgit-hackathon-wave2-activity-7214877930319962112-3BXM?utm_source=share&utm_medium=member_desktop"
          />
          <AchievementCard 
            photo={PyhackImage} 
            title="Pyhack - National Python Hackathon" 
            description="Winner at PyHack National Level Hackathon
organized by BelPy Python Communities at
Belagavi, India
"
            link="https://www.linkedin.com/posts/om-vasudev-a14109244_hackathon-pyhackbelpy24-teamwork-activity-7214861871185584129-hbYq?utm_source=share&utm_medium=member_desktop"
          />
          <AchievementCard 
            photo={Odyssey} 
            title="Odyssey - National Level Tech Fest" 
            description="Secured 2nd Runner's Up at Odessey National Level Hackathon at Jain College of Engineering Belagavi"
            link="https://www.linkedin.com/posts/avinash-pauskar_teamsuccess-hackathonwinners-aiinnovation-activity-7195334979667603456-llcb?utm_source=share&utm_medium=member_desktop"
          />
          <AchievementCard 
            photo={TCE} 
            title="TCE National Hackathon and Idea Bazaar" 
            description="Secured 1st Runner's Up at TCE National Hackathon and Idea Bazaar at Sri Tontadarya College of Engineering, GADAG"
            link="https://www.linkedin.com/posts/klsgitbelagavi_klsgit-tcehackathon2024-innovation-activity-7193244820046299136-nZGC?utm_source=share&utm_medium=member_desktop"
          />
          <AchievementCard 
            photo={H2F} 
            title="Hack to Future - National Level Hackathon" 
            description="Winner at Hack-to-Future held at KLS
Gogte of Technology, Belagavi."
            link="https://www.linkedin.com/posts/computer-science-and-engineering-at-kls-git-belagavi_hacktofuture-winners-hackathon-activity-7204809365067894784-3XJj?utm_source=share&utm_medium=member_desktop"
          />
        </div>
      </div>
    );
  }
  
  export default Achievements;
  