import React from 'react/addons';
import { List, Map } from 'immutable';
import Results from '../../src/components/Results';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithClass } = React.addons.TestUtils;

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = new Map({ 'Trainspotting': 5 });
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    );
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
    const [train, days] = entries.map(e => e.textContent);

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    expect(train).to.contain('5');
    expect(days).to.contain('28 Days Later');
    expect(days).to.contain('0');
  });
});
