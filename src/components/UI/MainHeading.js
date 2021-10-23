import {Fragment, useContext} from 'react';
import InfoContext from '../../store/info-context';
import classes from './MainHeading.module.css';

const MainHeading = () => {
    const infoContext = useContext(InfoContext);
    return (
        <Fragment>
            <h1>{`${infoContext.firstName} ${infoContext.lastName}`}</h1>
            <h4 className={classes.subHeadingRole}>{infoContext.role}</h4>
        </Fragment>)
};

export default MainHeading;