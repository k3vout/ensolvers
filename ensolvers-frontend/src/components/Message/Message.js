import React from 'react';
import StyledMessage from './Messaje.styled';

const Message = ({ message, messageColor }) => {
  if (messageColor === 'alert-success') {
    return (
      <StyledMessage>
        <div className="alert-success">{message}</div>
      </StyledMessage>
    );
  } if (messageColor === 'alert-error') {
    return (
      <StyledMessage>
        <div className="alert-error">{message}</div>
      </StyledMessage>
    );
  }
  return <div />;
};

export default Message;
