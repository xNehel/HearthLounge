import React, {Component} from 'react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';
import Loader from "../../loaders/diamond/loader";
import Icon from "../../icon";

class CalendarSidebar extends Component {

  mapEvents = () => {
    const {selectedDateEvents} = this.props;
    const eventDateFormat = "HH:mm";

    return selectedDateEvents.map(event => (
      <li key={event.id} className="calendar__sidebar--event">
        <div className="event__title">
          <p>{event.summary}</p>
        </div>
        <div className="event__date">
          <p className="label">Start</p>
          <span>{format(event.start.dateTime, eventDateFormat)}</span>
        </div>
        <div className="event__description">
          <p className="label">Description</p>
          <p>{event.description}</p>
        </div>
      </li>
    ))
  };


  render() {
    const {selectedDate, selectedDateEvents, loading, handleMobileActiveDayEventsViewCloseClick} = this.props;
    const dateFormat = 'Do MMM';

    return (
      <div className="calendar__sidebar">
        <div className="calendar__sidebar--header">
          {format(selectedDate, dateFormat)} Tournaments
          <Icon name="cross" handleClick={handleMobileActiveDayEventsViewCloseClick}/>
        </div>
        <ul className="calendar__sidebar--events">
          {loading
            ? <Loader/>
            : selectedDateEvents.length === 0
              ? <div className="calendar__sidebar--no-events"><p>There are no tournaments for this day.</p><span>(╯°□°）╯︵ ┻━┻</span></div>
              : this.mapEvents()}
        </ul>
      </div>
    )
  }
}

CalendarSidebar.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  selectedDateEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  handleMobileActiveDayEventsViewCloseClick:PropTypes.func.isRequired
};

export default CalendarSidebar;