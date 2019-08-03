import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow'
import NoteTextInput from './NoteTextInput'

const setup = propOverrides => {
  const props = Object.assign({
    onSave: jest.fn(),
    text: 'Test Input',
    placeholder: "What is on your mind?",
    editing: false,
    newNote: false
  }, propOverrides);

  const renderer = createRenderer();

  renderer.render(
    <NoteTextInput {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  }
};

describe('components', () => {
  describe('NoteTextInput', () => {
    it('Should render properly', () => {
      const { output } = setup();
      expect(output.type).toBe('form');

      const [ textarea, button ] = output.props.children;
      expect(textarea.props.placeholder).toEqual("What is on your mind?");
      expect(textarea.props.value).toEqual('Test Input');
      expect(textarea.props.className).toEqual('');

      expect(button.type).toBe('button');
    });

    it('should render properly when editing is true', () => {
      const { output } = setup({ editing: true });
      const [ textarea, button ] = output.props.children;

      expect(textarea.props.className).toEqual('edit');
      expect(button.props.className).toEqual('send-edit-btn');
    });

    it('should render properly when newNote is true', () => {
      const { output } = setup({ newNote: true });

      const [ textarea,  ] = output.props.children;
      expect(textarea.props.className).toEqual('new-note');
    })


  })
});