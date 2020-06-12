import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useLocation } from 'react-router-dom'
/** style */
import * as El from './UserProfile.style'

const UserProfile = () => {
  const { search } = useLocation()
  const accountID = new URLSearchParams(search).get('id')
  console.log('< ACCOUNT ID > ', accountID )

  const GET_DATA = gql`
    query GetHomeData {
      dataLayoutPage(id: $id) @rest(type: "Player Data", path: "/players/{args.id}", endpoint: "", method: "GET") {
        tracked_until,
        solo_competitive_rank,
        profile,
        rank_tier,
        competitive_rank,
        leaderboard_rank,
        mmr_estimate
      }
    }
  `
  const {
    loading,
    error,
    data
  } = useQuery(
    GET_DATA, 
    { variables: { id: accountID } },
    { fetchPolicy: 'cache-and-network' }
  )
  
  if (loading) return <h2>Loading...</h2>
  if (error) return <p>ERROR: {error.message}</p>

  console.log('< DATA > ', data.dataLayoutPage)

  const { profile } = data.dataLayoutPage

  return (
    <El.UserProfileContainer>
      {/* <img src={profile.avatar} />
      <div>{profile.personaname}</div> */}
    </El.UserProfileContainer>
  )     
}

export default UserProfile