import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineList from './data';
import './index.css';

export default () => (
  <div className="timeline">
    <VerticalTimeline animate={false}>
      {
        timelineList.map(({ designation, company, date, iconClass }) => (
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff)' }}
            date={date}
            key={date}
            className={iconClass}
          >
            <h3 className="vertical-timeline-element-title">{designation}</h3>
            <h4 className="vertical-timeline-element-subtitle">{company}</h4>
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  </div>
);