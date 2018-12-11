import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  ImageField} from "react-admin";

const styles = {
    image: { width: 80, height: 80 },
};

const AvatarField = withStyles(styles)(({ classes, ...props }) => (
    <ImageField classes={classes} {...props} />
));

export default AvatarField