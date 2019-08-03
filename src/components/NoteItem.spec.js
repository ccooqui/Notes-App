import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import NoteItem from './NoteItem'

const setup = ( editing = false) => {
  const props = {
    note: {
      id: 0,
      text: 'Test Text'
    },
    editNote: jest.fn(),
    deleteNote: jest.fn()
  };

  const renderer = createRenderer();
  renderer.render(
    <NoteItem { ...props } />
  );
  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  }
};

describe('components', () => {
  describe('NoteItem', () => {
    it('should do initial render', () => {
      const { output } = setup();
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('');

      const div = output.props.children;
      expect(div.type).toBe('div');
      expect(div.props.className).toBe('view');

      const [ destroyButton, editButton, text] = div.props.children;
      expect(destroyButton.type).toBe('button');
      expect(destroyButton.props.className).toBe('destroy-btn');

      expect(editButton.type).toBe('button');
      expect(editButton.props.className).toBe('edit-btn');

      expect(text.type).toBe('p');
      expect(text.props.children).toBe('Test Text');
    });

    it('should call deleteNote on destroyButton click', () => {
      const {output, props} = setup();
      const button = output.props.children.props.children[0];
      button.props.onClick({});
      expect(props.deleteNote).toBeCalledWith(0);
    });

    it('should call editNote on destroyButton click', () => {
      const {output, renderer} = setup();
      const button = output.props.children.props.children[1];
      button.props.onClick({});
      const updated = renderer.getRenderOutput();
      expect(updated.type).toBe('div');
      expect(updated.props.className).toBe('editing');
    });
  })
});