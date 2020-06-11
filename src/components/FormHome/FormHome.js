import React, {useState} from 'react'
/** style */
import * as El from './FormHome.style'
/** components */
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'

const FormHome = () => {
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
          color='secondary'
          size='lg'
        >
          Send
        </Button>
      </El.FormBox>
      
    </El.FormHomeContainer>
  )     
}

export default FormHome