import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import Header from './Header'
import NoteTextInput from '../components/NoteTextInput'

const setup = () => {
  const props = {
    addNote: jest.fn()
  };

  const renderer = createRenderer();
  renderer.render(<Header {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  }
};

describe('components', () => {
  describe('Header', () => {
    it('should render properly', () => {
      const { output } = setup();
      expect(output.type).toBe('header');
      expect(output.props.className).toBe('header');

      const h2 = output.props.children[0];
      const input = output.props.children[1];
      expect(h2.type).toBe('h2');
      expect(h2.props.children).toBe('New Note');
      expect(input.type).toBe(NoteTextInput);
      expect(input.props.newNote).toBe(true);
      expect(input.props.placeholder).toBe("What's on your mind?");
    });

    it('should call addNote if length of input is greater than 0', () => {
      const { output, props } = setup();
      const input = output.props.children[1];
      input.props.onSave('');
      expect(props.addNote).not.toBeCalled();
      input.props.onSave('Test Input');
      expect(props.addNote).toBeCalled();
    })
  })
});
