import ClientError from '../components/Errors/ClientError';

const FourOhFour = () => {
  return (
    <ClientError
      code="404"
      title="Uh Oh! You're lost."
      body="The page you're looking for does not exist."
    />
  );
};

export default FourOhFour;
