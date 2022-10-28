import React from 'react';
import {ChangeProfile} from "../Component/ChangeProfile"



const Profile = (props) => {

  return(
    <div>
      <h1>The Profile Page {props.userName}</h1>
      <ChangeProfile setUserName={props.setUserName}/>
    </div>
  )
}
export default Profile;