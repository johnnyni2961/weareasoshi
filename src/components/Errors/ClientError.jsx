import Spaceman from '../Arts/Spaceman';

const ClientError = ({ code, title, body }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
      <div className="container h-1/2 w-1/2 -ml-10 sm:ml-0 -mt-28 md:mt-0">
        <div className="grid lg:grid-cols-2">
          <Spaceman />
          <div className="self-center text-gray-100 text-left font-nunito-sans">
            <h1 className="font-semibold text-9xl">{code}</h1>
            <h2 className="font-semibold text-3xl mt-4 mb-2">{title}</h2>
            <p className="">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientError;
