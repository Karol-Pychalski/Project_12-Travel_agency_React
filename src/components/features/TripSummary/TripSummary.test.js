import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('link has proper address', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary link={expectedLink} id={expectedId} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should have correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'image';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render properly name, cost, days', () => {
    const expectedCost = '25000';
    const expectedDays = 7;
    const expectedName = 'Mauritius';
    const component = shallow(<TripSummary image={'image'} name={expectedName} cost={expectedCost} days={expectedDays} id={'id'} tags={['beach', 'sea', 'sun']} />);

    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);
    expect(component.find('.details span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.title').text()).toEqual(expectedName);
  });

  it('show error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in spans', () => {
    const expectedTags = ['beach', 'sea', 'sun'];
    const component = shallow(<TripSummary  tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('if prop tags is false not render spans', () => {
    const component = shallow(<TripSummary image={'image'} name={'image'} cost={'cost'} days={7} id={'id'} />);

    expect(component.hasClass('tags')).toBe(false);
  });
});