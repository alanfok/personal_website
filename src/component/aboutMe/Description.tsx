import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react';

interface IDescriptionProps {
  name: ReactNode;
  children: ReactNode;
}

const useStyle = makeStyles({
  descriptionStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentOfParagraph: {
    width: '60%',
  },
  header: {
    marginBottom: '0',
  },
});

const Description = ({name, children}: IDescriptionProps) => {
  const classes = useStyle();
  return (
    <div>
      <h3 className={classes.header}>{name}</h3>
      <span className={classes.descriptionStyle}>
        <p className={classes.contentOfParagraph}>{children}</p>
      </span>
    </div>
  );
};

export default Description;
