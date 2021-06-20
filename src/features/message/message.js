const Message = ({ msg }) => {
  return (
    <>
      <span className="message">{msg}</span>
      <style jsx>{`
        .message {
          padding: 1rem;
        }
        .message {
          font-family: 'Montserrat Alternates', sans-serif;
          font-size: 2rem;
        }
      `}</style>
    </>
  );
};

export default Message;
