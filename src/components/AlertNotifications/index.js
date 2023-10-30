// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <div className="main-con">
        <MdInfo className="info icon" />
        <div className="msg-con">
          <h1 className="info-heading">Info</h1>
          <p className="para">Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="main-con">
        <MdWarning className="warning icon" />
        <div className="msg-con">
          <h1 className="war-heading">Warning</h1>
          <p className="para">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <div className="main-con">
        <RiErrorWarningFill className="error icon" />
        <div className="msg-con">
          <h1 className="error-heading">Error</h1>
          <p className="para">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <div className="main-con">
        <AiFillCheckCircle className="success icon" />
        <div className="msg-con">
          <h1 className="success-heading">Success</h1>
          <p className="para">You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
  )

  return (
    <div className="app-con">
      <div className="card-con">
        <h1 className="head">Alert Notifications</h1>
        {renderInfoNotification()}
        {renderSuccessNotification()}
        {renderWarningNotification()}
        {renderErrorNotification()}
      </div>
    </div>
  )
}
export default AlertNotifications
