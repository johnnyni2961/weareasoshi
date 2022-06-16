import NavBar from '../components/Nav/NavBar';

const Docs = () => {
  return (
    <div>
      <NavBar toggleTheme={toggleTheme} showLogin={toggleModal} />
      <article className="prose">
        <br />
        <h1 className="mx-5 text-5xl text-cyan-600 body-font font-poppins">
          <b>How do I use ASOSHI?</b>
        </h1>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          First, congrats on taking your first step in finding your next startup/project team! Many struggle with this, and ASOSHI seeks to simplify the process for innovative founders to come together.
        </p>
        <br />
        <div className="mx-5 mockup-code">
          <pre>
            <code className="text-amber-500">
              ASOSHI Vision: To help every student entrepreneur realize their full potential by accelerating their startup or project process
            </code>
          </pre>
        </div>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          The Modern Day Problem: Gen-Z students are being underestimated. Platforms such as Linkedin are tailored towards adults and industry experts. But in reality, Gen-Z carries the creativity and will become the leaders and innovators of tomorrow. However, it's difficult to start an initiative with the right cofounder especially as a Gen-Z entrepreneur. <br />
          <br />
          Solution: Introducing ASOSHI, a web platform where users can match with potential project partners that share similar interests to start initiatives together... as an ASOSHI-backed startup, you also gain access to a network of investors, mentors, and future partnership resources!
        </p>
        <br />
        <h2 className="mx-5 text-3xl text-neutral-600 body-font font-poppins">
          <b>What ASOSHI Offers</b>
        </h2>
        <br />
        <p className=" mx-5 text-gray-600 body-font font-poppins">
          Not only does ASOSHI deliver a Gen-Z networking platform, we also developed a private-access, inclusive networking community within Discord. As ASOSHI grows, we are exploring new technologies and resources such as Web3/crypto as well as onboarding investors and mentors onto ASOSHI.
          <br />
          <a
            className="text-cyan-600"
            href="https://t.co/eFjropqHUD"
          >
            ASOSHI Discord Link!
          </a>
        </p>
        <br />
        <p className=" mx-5 text-gray-600 body-font font-poppins">
          As an ASOSHI-backed startup or project, you become an "Asoshiate" and therefore gain access to all ASOSHI-related resources, investor community, mentorship, and more! Extra features of the ASOSHI app will be unlocked and at your disposal!
        </p>
        <br />
        <div className="mx-5 mockup-code base-300">
          <pre>
            <code className="text-amber-500">Want to join the community?</code>
          </pre>
        </div>
        <br />
        <h2 className="mx-5 text-3xl text-neutral-600 body-font font-poppins">
          <b>ASOSHI Founder Guide</b>
        </h2>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          ASOSHI is not only a networking platform for founders, but a movement for Gen-Z. We prioritize 2 stages in founders, one being those who have a burning idea, and another being already motivated teams seeking for community support, funding, and more!
          <br />
        </p>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Phase A: Launch Your Idea</b>
          <br />
          <br />
          <ul className="list-no disc body-font font-poppins">
            <li>
              1. Register/Login onto the ASOSHI platform
            </li>
            <li>
              2. Customize your profile to express yourself! Network with like-minded founders and explore fellow students' initiatives!
            </li>
            <li>
              3. Get your team. Whether it's a project, startup, or fun community collective, start chatting right in ASOSHI's private chat space right on the app!
            </li>
          </ul>
        </p>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Phase B: Scale Your Startup/Project/Product</b>
        </p>
        <br />
        <ul className=" mx-5 list-no-disc body-font font-poppins">
          <li>
            1. Ok great. You have your idea and possibly a motivated team. What next? This is where you get creative... Expand your community by displaying your project on ASOSHI's explore page!
          </li>
          <li>
            2. Reach out to key investors and fellow students in the ASOSHI community that can further enable your project in new directions.
          </li>
          <li>
            3. ASOSHI also offers a networking discord community for simplified community growth. Nothing fancy. Pure growth of a community.
          </li>
          <li>
            {' '}
            4. Grow together. As ASOSHI grows, we are heavily invested in entering the web3/crypto community and bringing new technologies and resources to current ASOSHI-backed startups and projects. You gain access to all resources we have. Even our networking events...
          </li>
          <li>
            5. Beyond. You have the idea, team, and product. The road ahead of you depends on what you envision...
          </li>
        </ul>
        <br />
        <br />
      </article>
    </div>
  );
};

export default Docs;
