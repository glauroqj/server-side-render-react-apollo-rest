import React from 'react'
// import { useQuery } from '@apollo/react-hooks'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_DATA = gql`
  query GetHomeData {
    dataLayoutPage @rest(type: "Player Data", path: "", endpoint: "home", method: "GET") {
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

const Home = () => {
  const {
    loading,
    error,
    data
  } = useQuery(
    GET_DATA, 
    { variables: '' },
    { fetchPolicy: 'cache-and-network' }
  )
  
  
  if (loading) return <h2>Loading...</h2>
  if (error) return <p>ERROR: {error.message}</p>

  console.log('< DATA > ', data)

  return (
    <div>
      HOME
    </div>
  )     
}

export default Home