import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import NoteList from './NoteList'
import NoteItem from './NoteItem'

const setup = () => {
  const props = {
    filteredNotes: [
      {
        text: 'This is test text one',
        id: 0
      }, {
        text: 'This is test text two',
        id: 1
      }
    ],
    actions: {
      editNote: jest.fn(),
      deleteNote: jest.fn()
    }
  };

  const renderer = createRenderer();
  renderer.render(<NoteList { ...props } />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output
  }
};

describe('components', () => {
  describe('NoteList', () => {
    it('should render note container', () => {
      const { output } = setup();
      expect(output.type).toBe('ul');
      expect(output.props.className).toBe('note-list');
    });

    it('shoulder render note list in reverse', () => {
      const { output, props} = setup();
      expect(output.props.children.length).toBe(2);

      const length = output.props.children.length-1;
      output.props.children.forEach((note, i) => {
        expect(note.type).toBe(NoteItem);
        expect(Number(note.key)).toBe(props.filteredNotes[length-i].id);
        expect(note.props.note).toBe(props.filteredNotes[length-i]);
      })
    })
  })
});