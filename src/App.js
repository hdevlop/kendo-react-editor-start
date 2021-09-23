import React from "react";
import "./App.css";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { loadMessages, LocalizationProvider } from "@progress/kendo-react-intl";
import { deMessages } from "./deMessages";
import content from "./content";

loadMessages(deMessages, "de");

const {
  FindAndReplace,
  Pdf,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  Link,
  Unlink,
} = EditorTools;

const CustomPdf = props => (
  <Pdf
    {...props}
    savePdfOptions={{
      fileName: "React Rich Text Editor",
      paperSize: "A4",
      marign: "3cm",
    }}
  />
);

function App() {
  return (
    <LocalizationProvider language="de">
      <div className="app">
        <Editor
          tools={[
            [Bold, Italic, Underline],
            [Undo, Redo],
            [Link, Unlink],
            [AlignLeft, AlignCenter, AlignRight],
            [OrderedList, UnorderedList, Indent, Outdent],
            [FindAndReplace, CustomPdf],
          ]}
          contentStyle={{ height: 320 }}
          defaultContent={content}
        />
      </div>
    </LocalizationProvider>
  );
}

export default App;
