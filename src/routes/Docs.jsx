const Docs = () => {
  return (
    <div>
      <article className="prose">
        <br />
        <h1 className="mx-5 text-5xl text-cyan-600 body-font font-poppins">
          <b>How do I use ASOSHI?</b>
        </h1>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          This documentation contains all technical documentation related to the
          setup, deployment, update and customization of your BaaP application.
        </p>
        <br />
        <div className="mx-5 mockup-code">
          <pre>
            <code className="text-amber-500">
              Can't wait to start using BaaP?
            </code>
          </pre>
        </div>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          The original purpose of the project was to help users with the help of
          Graphical User Interface to put forward the needed database schema
          information with the relationships among them as well as the
          information regarding the API endpoints and as a result, the required
          back-end server with all the needed functionalities along with the
          database will be generated. <br />
          <br />
          Basically Backend as a Platform (BaaP) is a Low-code application
          development platform specifically for back-ends. The technologies used
          here include Node.js, Express, REST, GraphQL and MongoDB.
        </p>
        <br />
        <h2 className="mx-5 text-3xl text-neutral-600 body-font font-poppins">
          <b>Open-source & Contribution</b>
        </h2>
        <br />
        <p className=" mx-5 text-gray-600 body-font font-poppins">
          Backend as a Platform (BaaP) is an open-source project Licensed under
          MIT. The core project, as well as the documentation and any related
          tool can be found in the backend-as-a-platform in GitHub Organisation.
          <br />
          <a
            className="text-cyan-600"
            href="https://github.com/orgs/backend-as-a-platform/dashboard"
          >
            https://github.com/orgs/backend-as-a-platform/dashboard
          </a>
        </p>
        <br />
        <p className=" mx-5 text-gray-600 body-font font-poppins">
          As it goes hand in hand with the open-source ecosystem, BaaP is open
          to contributions. We appreciates every contribution, be it a feature
          request, bug report, or pull request. The following GitHub
          repositories are open-source and contributions-friendly.
        </p>
        <br />
        <div className="mx-5 mockup-code base-300">
          <pre>
            <code className="text-amber-500">Want to join the community?</code>
          </pre>
        </div>
        <br />
        <h2 className="mx-5 text-3xl text-neutral-600 body-font font-poppins">
          <b>Quick Start Guide</b>
        </h2>
        <br />
        <p className="mx-5 text-gray-600 body-font font-poppins">
          BaaP offers a lot of flexibility. Whether you want to go fast and
          quickly see the final result, or would rather dive deeper into the
          product, we got you covered.
          <br />
        </p>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Part A: Create a new project</b>
          <br />
          <br />
          <ul className="list-no disc body-font font-poppins">
            <li>
              1. Enter your credentials and Signup/ Register into the BaaP
              platform.
            </li>
            <li>
              2. After successful registration, Login into the application.
            </li>
            <li>
              3. On the Dashboard page, Click on Create Project and enter the
              Name and Description of your project and click on the submit
              button.
            </li>
          </ul>
        </p>
        <p className="mx-5 body-font font-poppins">
          <br />
          <b>Part B: Build Forms</b>
        </p>
        <br />
        <ul className=" mx-5 list-no-disc body-font font-poppins">
          <li>
            1. On entering into the project page click on Create forms and enter
            the Name of the form and click submit.
          </li>
          <li>
            2. A GUI based form builder page will be loaded.Here you can drag
            and drop form components.
          </li>
          <li>
            3. After being done, you can view the corresponding JSON Schema of
            the form by Clicking code Button from the below.
          </li>
          <li>
            {' '}
            4. You can save the form by clicking the Save button which will
            redirect you to a list of saved forms.
          </li>
          <li>
            5. You can either Archive, Delete or Edit the form from the
            corresponding page
          </li>
        </ul>
        <br />
        <br />
      </article>
    </div>
  );
};

export default Docs;
