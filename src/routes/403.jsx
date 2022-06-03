import ClientError from '../components/Errors/ClientError';

const FourOhThree = () => {
  return (
    <ClientError
      code="403"
      title="Huh! Not so fast."
      body="You are not authorized to view this page."
    />
  );
};

export default FourOhThree;
