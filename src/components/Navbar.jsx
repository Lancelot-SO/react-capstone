import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import MapIcon from '@mui/icons-material/Map';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import { searchField } from './redux/home/homeSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '95%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: theme.spacing(30),
    width: '400px',
  },

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#e4853c',
}));

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.countrydetail.selectedCountry);
  const searchHandler = (e) => {
    dispatch(searchField(e.target.value));
  };
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  const BackHandler = () => {
    navigate('/');
  };
  return (

    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed" sx={{ bgcolor: '#fff' }}>

        <Toolbar>
          <Box sx={{ disply: 'flex', flexDirection: 'row' }}>
            <IconButton
              onClick={BackHandler}
              sx={{ display: usePathname() === '/detail' ? ('inline') : ('none') }}
              aria-label="back"
            >
              <ArrowBackIosIcon sx={{
                minWidth: '40px',
                minHeight: '35px',
                color: '#e4853c',
              }}
              />
            </IconButton>

            <MapIcon sx={{
              minWidth: '40px',
              minHeight: '40px',
              color: '#e4853c',
              display: usePathname() === '/detail' ? ('none') : ('block'),
            }}
            />
          </Box>
          <Box sx={{
            display: 'flex',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
            <Typography
              gutterBottom
              variant="body2"
              component="span"
              align="center"
              sx={{
                fontWeight: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
                color: '#e4853c',
                display: usePathname() === '/detail' ? ('block') : ('none'),
              }}
            >
              {selectedCountry.toUpperCase()}

            </Typography>
            <Search sx={{
              display: usePathname() === '/detail' ? ('none') : ('flex'),
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#e4853c',
            }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={searchHandler}
              />
            </Search>
          </Box>
          <Box sx={{
            display: 'flex',
            marginLeft: 'auto',
          }}
          >
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="mic"
              sx={{ mr: 1, color: '#e4853c' }}
            >
              <MicNoneIcon />
            </IconButton>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="setting"
              sx={{ mr: 1, color: '#e4853c' }}
            >
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
