import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import MainSection from './MainSection'
import VisibleNoteList from '../containers/VisibleNoteList'

const setup = propsOverrides => {
  const props = Object.assign({
    notesCount: 2,
    actions: {
      editNote: jest.fn(),
      deleteNote: jest.fn()
    }
  }, propsOverrides);

  const renderer = createRenderer();
  renderer.render(<MainSection {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  }
};

describe('components', () => {
  describe('MainSection', () => {
    it('should render a container', () => {
      const { output } = setup();
      expect(output.type).toBe('section');
      expect(output.props.className).toBe('main');
    });

    describe('visible note list', () => {
      it('should render', () => {
        const { output } = setup();
        const [ , visibleNoteList ] = output.props.children;
        expect(visibleNoteList.type).toBe(VisibleNoteList);
      });
    })
  })
});