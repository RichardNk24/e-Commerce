import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height:0,
        paddindTop: '56.25%' //This is the 16.9 format :-)
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between',
    },
}));