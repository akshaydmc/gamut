import { Text } from '@codecademy/gamut';
import { setupRtl } from '@codecademy/gamut-tests';
import { fireEvent } from '@testing-library/react';
import React from 'react';

import { ListSection } from '..';

type ListItem = {
  title: string;
};

const listItems = [
  { title: 'one' },
  { title: 'two' },
  { title: 'three' },
  { title: 'four' },
];

const listSectionProps = (listItems: ListItem[]) => {
  return {
    title: 'List Section',
    initialDisplayAmount: 2,
    children: listItems.map((listItem) => <Text>Title {listItem.title}</Text>),
  };
};

const renderListSection = setupRtl(ListSection, listSectionProps(listItems));

describe('ListSection', () => {
  it('renders the title in a heading role', () => {
    const { view } = renderListSection();
    expect(view.getByRole('heading').textContent).toBe('List Section');
  });

  it('renders initial display number of items', () => {
    const { view } = renderListSection();
    expect(view.getAllByText(/Title/i)).toHaveLength(2);
  });

  it('renders Show All button when there are more items than the inital display number', () => {
    const { view } = renderListSection();
    expect(view.getByText('Show All')).toBeTruthy();
  });

  it('does not render Show All button when there are less items than the inital display number', () => {
    const listItems = [{ title: 'one' }];
    const { view } = setupRtl(ListSection, listSectionProps(listItems))();
    expect(view.queryByText('Show All')).toBeNull();
  });

  it('renders all the items when Show All button is clicked', () => {
    const { view } = renderListSection();
    const button = view.getByText('Show All');
    fireEvent.click(button);

    expect(view.getAllByText(/Title/i)).toHaveLength(4);
  });

  it('renders Show Less button when Show All button is clicked', () => {
    const { view } = renderListSection();
    const button = view.getByText('Show All');
    fireEvent.click(button);

    expect(view.getByText('Show Less')).toBeTruthy();
  });
});
