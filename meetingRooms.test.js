import { createElement } from 'lwc';
import MeetingRooms from 'c/meetingRooms';

describe('c-meetingRooms', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  //test the meeting room ,test refer as it
  it('count number of meeting room component', () => {
    const meetingRooms = createElement('c-meetingRooms', { is: MeetingRooms });

    document.body.appendChild(meetingRooms);

    const allMettingRoom = meetingRooms.shadowRoot.querySelectorAll(
      'c-meeting-room'
    );

    expect(allMettingRoom.length).toBe(6);
  });

  it('check the title of lightning card', () => {
    const meetingRooms = createElement('c-meetingRooms', { is: MeetingRooms });

    document.body.appendChild(meetingRooms);

    const lightningCardComponent = meetingRooms.shadowRoot.querySelector(
      'lightning-card'
    );
    expect(lightningCardComponent.title).toBe('Meeting Rooms');
  });
});
