import React from 'react';
import "./Header.css";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header(){
  return (

    <div className='header'>
      <div className='header_left'>
      <div className= 'header_image'>

      </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1920px-Facebook_f_logo_%282019%29.svg.png" alt= ""/>

        <div className='header_input'>
            <SearchIcon/>
            <input type ="text"/>
        </div>
      </div>
      <div className='header_center'>
        <div className= 'header_option'>
          <HomeIcon fontSize ="large" />
        </div>
        <div className= 'header_option'>
          <FlagIcon fontSize ="large" />
        </div>
        <div className= 'header_option'>
          <SubscriptionsIcon fontSize ="large" />
        </div>
        <div className= 'header_option'>
          <StoreIcon fontSize ="large" />
        </div>
        <div className= 'header_option'>
          <SupervisedUserCircleIcon fontSize ="large" />
        </div>

      </div>
      <div className='header_right'>
        <div className="header_info">
          <Avatar/>
          <h4>Debargha</h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Header;
