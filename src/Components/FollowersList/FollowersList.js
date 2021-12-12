import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import FollowersListComponent from "./Components/FollowersListComponent";


//here pass followers from getStaticProps 
export default function FollowersList({followers}) {


    return (
        <FollowersListComponent followers={followers}/>
    )
}



//this function excute the first 

  export async function getStaticProps(context) {
    const res = await fetch("https://randomuser.me/api/?results=5")
    const followers = await res.json()
  
    if (!followers) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { followers },  // will be passed to the page component as props
    }
  }



