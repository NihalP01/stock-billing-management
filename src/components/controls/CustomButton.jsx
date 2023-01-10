import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  textTransform: 'none',
  fontSize: '0.875rem',
  width: '7.5rem',
  borderRadius: '0.6rem',
}));

const CustomButton = (props) => {
  const { text, color, onClick, ...other } = props;
  return (
    <StyledButton
      variant="contained"
      size="small"
      color={color}
      onClick={onClick}
      {...other}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
