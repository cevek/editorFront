require('./main.css');
import * as React from 'react';

class Line {
    constructor(public en:TextLine, public ru:TextLine) {}
}

class TextLine {
    words:string[] = [];
    private text:string;

    constructor(public start:number, public dur:number, text:string) {
        this.setText(text);
    }

    setText(text:string) {
        this.text = text;
        this.words = text.split(/\s+/);
    }

    getText() {
        return this.text;
    }

}

class Hello extends React.Component<{},{}> {
    lines:Line[] = [];
}

React.render(<div>Hello</div>, document.body);
