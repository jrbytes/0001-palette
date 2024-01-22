import { useState, useRef, useEffect } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

export function MyEditor() {
  const [editorState, setEditorState] = useState<EditorState>()
  const text = editorState?.getCurrentContent().getPlainText()
  
  const editor = useRef(null)
 
  useEffect(() => {
    setEditorState(EditorState.createEmpty())
  }, []);

  function handleKeyCommand(command: string, editorState: EditorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  }
 
  return (
    <>
      {editorState && (
        <>
          <div style={{ marginBottom: '0.5rem' }}>
            <button onClick={() => {
              setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
            }}>Negrito</button>

            <button onClick={() => {
              setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
            }}>Itálico</button>
          </div>

          <div style={{ border: '1px solid gray', borderRadius: '0.25rem' }}>
            <Editor
              ref={editor}
              editorState={editorState}
              handleKeyCommand={handleKeyCommand}
              onChange={editorState => setEditorState(editorState)}
            />
          </div>

          <div style={{ marginTop: '0.5rem', whiteSpace: 'pre-line' }}>{text}</div>
        </>
      )}
    </>
  );
}