import WorkflowCard from './WorkflowCard';

const Workflows = () => (
  <div className="grid gap-24 md:max-w-full mx-3 md:mx-8">
    <WorkflowCard
      badge="Step 1"
      title="Pitch yourself, dive into the ASOSHI community"
      description="'Rome wasn't built in a day.' Establish your brand. Are you driven to create the next neurodiversity project that receives a nobel prize or the next founder of a unicorn, VC-backed startup? It's your choice. Enter the app. Create profile. Be you."
      image="https://media.discordapp.net/attachments/756994165690073243/991235450389925888/profile.png"
    />
    <WorkflowCard
      badge="Step 2"
      title="Launch/Grow Your Idea"
      description="Got a new idea that you're dying to pitch to other Gen-Z founders? Go to our explore page and reach the ENTIRE ASOSHI community. Got the ball rolling already? Reach out to driven Gen-Z folks ready to support your vision."
      image="https://media.discordapp.net/attachments/756994165690073243/991235465778843698/explorepage.png"
    />
    <WorkflowCard
      badge="Step 3"
      title="The Unknown Journey of Gen-Z"
      description="Ok. We'll be honest. We don't know what lies ahead for us, for Gen-Z. But we do know one thing, we pave our own paths. ASOSHI is built upon one core concept: community. Support each other. Innovate. ASOSHI isn't a 'company', we're a trend created by you. Your innovation defines us, we're just making the journey convenient."
      image="https://media.discordapp.net/attachments/756994165690073243/991235427619049512/chatorcall.png?width=319&height=566"
    />
  </div>
);

export default Workflows;
