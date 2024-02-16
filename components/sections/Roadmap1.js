import Link from "next/link"


export default function Roadmap1() {
    return (
        <>
            <section className="roadmap" id="roadmap-section">
                <img src="/assets/images/background/line.png" alt="" className="img-line" />
                <div className="shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>Road Map</span></h6>
                                <h3 className="heading wow" data-splitting>The Journey of <br />
                                    ADL Robotics</h3>
                                    <p className="mb-17 roadmap-desc-p">We are a team with a mission, to build the world's first Robot butler. A fully autonomous and highly dextrous 
                                mobile robot for the domestic space. The ChatGPT for your home.</p>
                               
                            </div>
                            <div className="roadmap__main" data-aos="fade-up" data-aos-duration={2000}>
                                <div className="roadmap-box">
                                    <div className="time">Step 1</div>
                                    <div className="content">
                                        <h5 className="title">Robot 3D Design</h5>
                                        <p className="text">Crafting the visual blueprint of the robot, designing each component, from the base unit to the fingers, ensuring a comprehensive 
                                        representation of its final form. The process culminates in creating a striking rendering that visualizes its aesthetic appeal and functionality.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box right">
                                    <div className="time">Step 2</div>
                                    <div className="content">
                                        <h5 className="title">ROS Implementation</h5>
                                        <p className="text">The conversion of the intricate 3D design into ROS-compatible URDF components marks a pivotal phase. This involves simulating the joints and movements of the robot into the ROS framework, enabling seamless interaction and maneuverability.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box">
                                    <div className="time">Step 3</div>
                                    <div className="content">
                                        <h5 className="title">Vision software setup</h5>
                                        <p className="text">At the heart of the robot's perception lies the development of sophisticated vision software. This entails creating algorithms capable of accurately identifying objects, calculating their dimensions and orientations, thus empowering the kinematics movement system. Additionally, it provides vital visual feedback to confirm the successful execution of maneuvers.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box right">
                                    <div className="time">Step 4</div>
                                    <div className="content">
                                        <h5 className="title">Kinematics &amp; Training</h5>
                                        <p className="text"> Delving into the realm of kinematics involves devising algorithms to compute precise trajectories for object manipulation. Through rigorous training, the system acquires proficiency in various grasp techniques and movements, essential for executing tasks with efficient dexterity..</p>
                                    </div>
                                </div>
                                
                                <div className="roadmap-box">
                                    <div className="time">Step 5</div>
                                    <div className="content">
                                        <h5 className="title">Step generation System</h5>
                                        <p className="text">This involves generating a structured sequence of steps necessary to accomplish predefined objectives. This entails taking an objective and generating the hundreds of individual steps required to complete the objective, to be fed to the kinematics system for execution.</p>
                                    </div>
                                </div>
                                
                                <div className="roadmap-box right">
                                    <div className="time">Step 6</div>
                                    <div className="content">
                                        <h5 className="title">Production design</h5>
                                        <p className="text">Assembling the intricate internal components and refining the outer structure constitutes the essence of production design. This stage involves fine-tuning actuation systems and designing electronic enclosures, setting the stage for the robot's real-world development.</p>
                                    </div>
                                </div>
                                <div className="roadmap-box">
                                    <div className="time">Step 7</div>
                                    <div className="content">
                                        <h5 className="title">Robot Prototyping</h5>
                                        <p className="text">Bringing the conceptual design to life, the prototyping phase focuses on constructing a functional model of the robot. Integrating sophisticated actuation and vision systems, the prototype showcases dexterous manipulations and the ability to perform tasks akin to everyday activities, validating its potential for practical applications.</p>
                                    </div>
                                </div>
                                <div className="icon" />
                                <div className="icon bottom" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
