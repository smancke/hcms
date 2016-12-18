
import React from 'react';
import { NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO, NOTIFICATION_TYPE_PROGRESS, NOTIFICATION_TYPE_FINISHED } from '../../common/notifications-reducer';

function typeToClass(notificationType) {
  switch (notificationType) {
  case NOTIFICATION_TYPE_ERROR:
      return 'bg-danger';
  case NOTIFICATION_TYPE_INFO:
  case NOTIFICATION_TYPE_PROGRESS:
      return 'bg-info';
  case NOTIFICATION_TYPE_FINISHED:
      return 'bg-success';
  }
}

function typeToGlyphicon(notificationType) {
  switch (notificationType) {
  case NOTIFICATION_TYPE_ERROR:
      return 'glyphicon glyphicon-remove-sign';
  case NOTIFICATION_TYPE_INFO:
      return 'glyphicon glyphicon-info-sign';
  case NOTIFICATION_TYPE_PROGRESS:
      return 'glyphicon glyphicon-retweet';
  case NOTIFICATION_TYPE_FINISHED:
      return 'glyphicon glyphicon-saved';
  }
}

const progressStyle = {width: '50%'}

export default (props) => (
  <div className="notifications">
    {props.notifications.map( n => 
    <p key={n.id} className={typeToClass(n.type)}><b><span className={typeToGlyphicon(n.type)} aria-hidden="true"></span> {n.message}</b>
         {n.type == NOTIFICATION_TYPE_PROGRESS &&
      <div className="progress">
        <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
          <span className="sr-only">50% Complete</span>
        </div>
      </div>
    }
    </p>
   )}
  </div>
)
