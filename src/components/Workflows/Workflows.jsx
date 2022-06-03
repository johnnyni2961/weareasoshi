import WorkflowCard from './WorkflowCard';

const Workflows = () => (
  <div className="grid gap-24 md:max-w-full mx-3 md:mx-8">
    <WorkflowCard
      badge="Step 1"
      title="Pitch yourself, dive into the ASOSHI community"
      description="'Rome wasn't built in a day.' Establish your brand. Are you driven to create the next neurodiversity project that receives a nobel prize or the next founder of a unicorn, VC-backed startup? It's your choice. Enter the app. Create profile. Be you."
      image="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
    />
    <WorkflowCard
      badge="Step 2"
      title="Launch/Grow Your Idea"
      description="Got a new idea that you're dying to pitch to other Gen-Z founders? Go to our explore page and reach the ENTIRE ASOSHI community. Got the ball rolling already? Reach out to driven Gen-Z folks ready to support your vision."
      image="https://open.cruip.com/static/media/features-split-image-02.3c569239.png"
    />
    <WorkflowCard
      badge="Step 3"
      title="The Unknown Journey of Gen-Z"
      description="Ok. We'll be honest. We don't know what lies ahead for us, for Gen-Z. But we do know one thing, we pave our own paths. ASOSHI is built upon one core concept: community. Support each other. Innovate. ASOSHI isn't a 'company', we're a trend created by you. Your innovation defines us, we're just making the journey convenient."
      image="https://open.cruip.com/static/media/features-split-image-03.87e4d053.png"
    />
  </div>
);

export default Workflows;
