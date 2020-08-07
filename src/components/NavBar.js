import React from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import {
  Search as SearchIcon,
  AccountCircle,
  MoreVert as MoreIcon,
  PanoramaFishEye as PanoramaFishEyeIcon,
  LocalParking as LocalParkingIcon,
} from '@material-ui/icons';
import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
  InputBase,
  IconButton,
  Link,
  Menu,
  MenuItem,
  ListItemText
} from '@material-ui/core';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  sectionDesktop: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    flexGrow: 1,
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navMenu: {
    margin: '20px',
    color: '#d9d9d9',
    '&:hover': {
      color: 'inherit'
    }
  },
  moreIcon: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <div className={classes.sectionDesktop}>
              <Typography className={classes.title}>Office Pasal</Typography>
              <Typography>
                <Link href="#" underline="none" className={classes.navMenu}>Home</Link>
                <Link href="#" underline="none" className={classes.navMenu}>Categories</Link>
                <Link href="#" underline="none" className={classes.navMenu}>About</Link>
                <Link href="#" underline="none" className={classes.navMenu}>Contact</Link>
              </Typography>
            </div>
            <div className={classes.sectionMobile}>
              <PanoramaFishEyeIcon />
              <LocalParkingIcon />
            </div>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <div className={classes.moreIcon}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Sent mail" />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Drafts" />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemText primary="Inbox" />
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}
