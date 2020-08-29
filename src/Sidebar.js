import React from 'react';
import SidebarRow from './SidebarRow'
import "./Sidebar.css";


import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar(){
  return (
      <div className="sidebar">
      <SidebarRow src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" title="Debargha Ghosh" />
      <SidebarRow Icon = {LocalHospitalIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon = {EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon = {ChatIcon} title="Messenger" />
      <SidebarRow Icon = {StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon = {VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon = {ExpandMoreIcon} title="Expand " />
      </div>

  )
}

export default Sidebar;
