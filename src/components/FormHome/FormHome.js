import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
/** style */
import * as El from './FormHome.style'
/** components */
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'

const FormHome = ({history}) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <El.FormHomeContainer>

      <El.FormBox>
        <h5>Please, insert your account ID</h5>
        <Input 
          placeholder='account ID number'
          size='lg'
          onChange={ value => setInputValue(value) }
        />
        <Button
          actionClick={() => window.location.replace(`${window.location.origin}/player/${inputValue}`) }
          // actionClick={() => history.push(`/player/142504352`)}
          color='secondary'
          size='lg'
        >
          Send
        </Button>
      </El.FormBox>
      
    </El.FormHomeContainer>
  )     
}

export default withRouter(FormHome)