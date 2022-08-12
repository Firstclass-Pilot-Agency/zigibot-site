import React from 'react'
import { BigHeader, SmallText } from './Components/TextComponents'
import './Styles/PrePage.css'
import shoe1 from './Assets/shoes/Shoe1.png'
import { ButtonMain } from './Components/FormComponents'
import { usePage } from './Contexts/PageContext'


function JoinWaitList() {
    const { setPage } = usePage()

    const handleAction = () => {
        setPage(4)
    }
  return (
      <div className='JoinWaitList'>
          <div className="JoinLeft">
              <div className="JoinLeftWrap">
                  <CountDown/>

                  <div className="textLunch">
                      <BigHeader color='#FFF500'>{ '4days' }</BigHeader>
                      <SmallText color='white'>remaining till launch</SmallText>
                  </div>

                  <div className="buttonSection">
                      <ButtonMain color={'#FFF500'} text={'Join WaitList '} />
                      <ButtonMain textColor={'white'} text={'Goto Website  -'} action={ handleAction} />
                  </div>
              </div>
          </div>
          <div className="JoinRight">
              <img src={shoe1} alt="" />
          </div>
      </div>
  )
}

export default JoinWaitList

function CountDown() {
    return (
        <div className="CountDown">
            <div className="Count">
                <TimeandFormat count={'00'} format={'HOUR'} />
            </div>
            <div className="Count">
                <TimeandFormat count={'00'} format={'MUNITES'} />
            </div>
            <div className="Count">
                <TimeandFormat count={'00'} format={'SECONDS'} />
            </div>
        </div>
    )
}

function TimeandFormat(props) {
    return (
        <div className='timeFormat'>
            <p className='timeNum'>{props.count}</p> 
            <p className='timeName'>{ props.format}</p>
        </div>
    )
}