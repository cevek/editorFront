import TouchEvent = __React.TouchEvent;
require('./main.css');
import * as React from 'react';
import * as classNames from 'classnames';

var en = `
Oh, it's just me, myself and I
Solo ride until I die,
‘Cause I got me for life,
Got me for life, yeah!
Oh, I don't need a hand to hold
Even when the night is cold,
I got that fire in my soul.

[Verse 1: G-Eazy]
And as far as I can see, I just need privacy
Plus, a whole lot of tree, fuck all this modesty!
I just need space to do me get a world that they're tryna see,
A Stella Maxwell right beside of me,
A Ferrari, I'm buyin' three,
A closet of Saint Laurent, get what I want when I want
‘Cause this hunger is drivin' me, yeah!
I just need to be alone, I just need to be at home,
Understand what I'm speakin' on, if time is money, I need a loan,
But regardless, I'll always keep keepin' on.
Fuck fake friends, we don't take L's,
We just make M's,
While y'all follow, we just make trends,
I'm right back to work when that break ends.

[Refrain: Bebe Rexha]
Oh, it's just me, myself and I
Solo ride until I die,
‘Cause I got me for life,
Got me for life, yeah!
Oh, I don't need a hand to hold
Even when the night is cold,
I got that fire in my soul.

[Chorus: Bebe Rexha]
I don't need anything to get me through the night
Except the beat that's in my heart,
Yeah, it's keeping me alive,
Keeps me alive.
I don't need anything to make me satisfied, you know,
‘Cause the music fills me good and it gets me every time.

[Verse 2: G-Eazy]
Yeah, and I don't like talkin' to strangers,
So get the fuck off me, I'm anxious!
I'm tryna be cool but I may just go ape shit,
Say "fuck y'all" to all of y'all faces,
It changes, though, now that I'm famous,
Everyone knows how this lifestyle is dangerous,
But I love it, the rush is amazing.
Celebrate nightly and everyone rages,
I found how to cope with my anger,
I'm swimmin' in money,
Swimmin' in liquor, my liver is muddy,
But it's all good, I'm still sippin' this bubbly.
This shit is lovely, this shit ain't random, I didn't get lucky,
Made it right here ‘cause I'm sick with it, Cudi.
They all take the money for granted,
But don't want to work for it, tell me now, isn't it funny? Nah.

[Refrain: Bebe Rexha]
Oh, it's just me, myself and I
Solo ride until I die,
‘Cause I got me for life,
Got me for life, yeah!
Oh, I don't need a hand to hold
Even when the night is cold,
I got that fire in my soul.

[Chorus: Bebe Rexha]
I don't need anything to get me through the night
Except the beat that's in my heart,
Yeah, it's keeping me alive,
Keeps me alive.
I don't need anything to make me satisfied, you know,
‘Cause the music fills me good and it gets me every time.

[Bridge: G-Eazy]
Yeah, lonely nights I laid awake,
Pray to lord my soul to take,
My heart's become too cold to break,
Know I'm great but I'm broke as hell.
Havin' dreams that I'm foldin' cake,
All my life I've been told to wait,
But Imma get it now, yeah, it's no debate,
Yeah!

[Refrain: Bebe Rexha]
Oh, it's just me, myself and I
Solo ride until I die,
‘Cause I got me for life,
Got me for life, yeah!
Oh, I don't need a hand to hold
Even when the night is cold,
I got that fire in my soul.

[Chorus: Bebe Rexha]
I don't need anything to get me through the night
Except the beat that's in my heart,
Yeah, it's keeping me alive,
Keeps me alive.
I don't need anything to make me satisfied, you know,
‘Cause the music fills me good and it gets me every time.
`;

var ru = `
О, тут только я, я сама и моя персона,
Еду одна до самой смерти,
Потому что я буду рядом со мной всю жизнь,
Рядом со мной всю жизнь, да!
О, мне не нужна рука помощи
Даже холодной ночью,
Ведь в моей душе огонь!

[Куплет 1: G-Eazy]
Насколько я вижу, мне просто нужно уединение
И много-много травы, в ж**у скромность!
Мне нужно место, чтобы завоевать весь мир, они же хотят видеть
Стеллу Максвелл рядом со мной, 1
"Феррари", дайте три,
Шкаф забит "Сен-Лораном", получаю, что хочу, когда хочу,
Потому что этот голод и движет мной, да!
Мне просто нужно побыть одному, мне просто нужно оказаться дома,
Поймите мои слова, время — деньги, мне нужен кредит,
Но несмотря ни на что я всегда буду продолжать продолжать.
В ж**у притворных друзей, мы не терпим неудач,
Мы просто зашибаем миллионы,
Пока вы следуете им, мы устанавливаем модные веяния,
Я вернусь к работе, когда закончится музыка.

[Рефрен: Bebe Rexha]
О, тут только я, я сама и моя персона,
Еду одна до самой смерти,
Потому что я буду рядом со мной всю жизнь,
Рядом со мной всю жизнь, да!
О, мне не нужна рука помощи
Даже холодной ночью,
Ведь в моей душе огонь!

[Припев: Bebe Rexha]
Мне не нужен другой проводник в ночи
Кроме ритма в моём сердце,
Да, он хранит во мне жизнь,
Хранит во мне жизнь.
Мне не нужно ничего для удовольствия, понимаете,
Потому что музыка питает меня и всегда трогает.

[Куплет 2: G-Eazy]
Да, мне не нравится разговаривать с незнакомцами,
Так что отъ**итесь от меня, я разволновался!
Я пытаюсь хранить спокойствие, но могу и слететь с катушек,
Говорю "пошли вы!" всем вам в лицо,
Всё изменилось, раз я прославился,
Все знают, что такая жизнь до добра не доводит,
Но я люблю её, потрясающее ощущение.
Каждую ночь — праздник, все отрываются,
Я узнал, как справляться со своей злобой,
Я купаюсь в деньгах,
Купаюсь в выпивке, моя печень забита грязью,
Но ничего страшного, я продолжаю пить шипучку.
Это мило, это не случайно, мне не просто повезло,
Я дошёл до этого, потому что ловко управляюсь, Кади. 2
Все принимают деньги как должное,
Но не хотят трудиться ради них, скажите, разве это не смешно? Не-а.

[Рефрен: Bebe Rexha]
О, тут только я, я сама и моя персона,
Еду одна до самой смерти,
Потому что я буду рядом со мной всю жизнь,
Рядом со мной всю жизнь, да!
О, мне не нужна рука помощи
Даже холодной ночью,
Ведь в моей душе огонь!

[Припев: Bebe Rexha]
Мне не нужен другой проводник в ночи
Кроме ритма в моём сердце,
Да, он хранит во мне жизнь,
Хранит во мне жизнь.
Мне не нужно ничего для удовольствия, понимаете,
Потому что музыка питает меня и всегда трогает.

[Связка: G-Eazy]
Да, одинокими ночами я лежу без сна,
Молюсь Господу, чтобы он забрал мою душу,
Моё сердце слишком остыло, чтобы его разбили,
Знаю, что я велик, но беднее церковной мыши.
Мне снится, что я складываю бабло,
Всю жизнь мне велели ждать,
Но теперь-то я его гребу, ага, никаких обсуждений,
Да!

[Рефрен: Bebe Rexha]
О, тут только я, я сама и моя персона,
Еду одна до самой смерти,
Потому что я буду рядом со мной всю жизнь,
Рядом со мной всю жизнь, да!
О, мне не нужна рука помощи
Даже холодной ночью,
Ведь в моей душе огонь!

[Припев: Bebe Rexha]
Мне не нужен другой проводник в ночи
Кроме ритма в моём сердце,
Да, он хранит во мне жизнь,
Хранит во мне жизнь.
Мне не нужно ничего для удовольствия, понимаете,
Потому что музыка питает меня и всегда трогает.
`;

class Line {
    constructor(public en:TextLine = null, public ru:TextLine = null) {
        if (!en) {
            this.en = new TextLine(Lang.EN, null, null, null);
        }
        if (!ru) {
            this.ru = new TextLine(Lang.RU, null, null, null);
        }
    }

    getTextLine(lang:Lang) {
        return lang == Lang.EN ? this.en : this.ru;
    }

    isEmpty() {
        return this.en.isEmpty() && this.ru.isEmpty();
    }

    setTextLine(lang:Lang, textLine:TextLine) {
        if (lang == Lang.EN) {
            this.en = textLine;
        } else {
            this.ru = textLine;
        }
    }

    getInvertTextLine(lang:Lang) {
        return lang == Lang.RU ? this.en : this.ru;
    }
}

const enum Lang{
    EN = 1,
    RU = 2
}
class TextLine {
    words:Word[];

    getWord(i:number) {
        return this.words[i];
    }

    isEmpty() {
        return this.getWord(0).isEmpty;
    }

    private text:string;

    constructor(public lang:Lang, public start:number, public dur:number, words:Word[]) {
        this.setWords(words);
    }

    setWords(words:Word[]) {
        if (!words) {
            words = [];
        }
        words = words.filter(w => w.word.trim() != '');
        if (words.length == 0) {
            words = [new Word(null)];
        }
        this.words = words;
        return this;
    }
}

class Word {
    isEmpty = false;

    constructor(public word:string, public span:Element = null) {
        if (word == null) {
            this.isEmpty = true;
            this.word = '\u00A0';
        }
    }
}

function parse(s:string) {
    return s.split(/\n/).filter(line => line.trim() != '');
}
var enLinesS = parse(en);
var ruLinesS = parse(ru);
var lines = enLinesS.map((lineS, i) =>
    new Line(
        new TextLine(Lang.EN, null, null, lineS.split(/\s+/).map(w => new Word(w))),
        new TextLine(Lang.RU, null, null, ruLinesS[i].split(/\s+/).map(w => new Word(w)))));

interface IModify {
    line:Line;
    linePos:number;
    textLine:TextLine;
    origWords:Word[];
    currLang:Lang;
    wordPos:number
}

const enum EditorAction{
    SPLIT      = 1,
    SPLIT_MOVE = 2,
    JOIN       = 3,
    JOIN_MOVE  = 4
}

class EditorHistory {
    action:EditorAction;
    linePos:number;
    lang:Lang;
    wordPos:number;
}

class Hello extends React.Component<{},{}> {
    lines:Line[] = lines;

    getLinePos(line:Line) {
        return this.lines.indexOf(line);
    }

    selectedLine:Line;
    selectedTextLine:TextLine;
    selectedWord:Word;

    findClosestNextWord(currWord:Word, nextTextLine:TextLine) {
        var currRect = currWord.span.getBoundingClientRect();
        var currPos = currRect.left + currRect.width / 2;
        return nextTextLine.words.map((w, i) => {
            var rect = w.span.getBoundingClientRect();
            var pos = rect.left + rect.width / 2;
            return {word: w, pos: i, diff: Math.abs(currPos - pos)};
        }).sort((a, b) => a.diff < b.diff ? -1 : 1).shift().word;
    }

    setSelection(line:Line, textLine:TextLine, word:Word) {
        this.selectedLine = line;
        this.selectedTextLine = textLine;
        this.selectedWord = word;
    }

    splitWithMove(m:IModify) {
        var lastLine = this.lines[this.lines.length - 1];
        if (!lastLine.getTextLine(m.currLang).isEmpty()) {
            this.lines.push(new Line());
        }
        for (var i = this.lines.length - 1; i > m.linePos; i--) {
            this.lines[i].setTextLine(m.currLang, this.lines[i - 1].getTextLine(m.currLang));
        }
        m.line.setTextLine(m.currLang, new TextLine(m.currLang, null, null, m.origWords.slice(0, m.wordPos)));

        var newLine = this.lines[m.linePos + 1];
        var selLine = newLine.getTextLine(m.currLang);
        selLine.setWords(m.origWords.slice(m.wordPos));

        this.setSelection(newLine, selLine, selLine.getWord(0));
        this.addUndo({action: EditorAction.SPLIT_MOVE, lang: m.currLang, linePos: m.linePos, wordPos: m.wordPos});
    }

    undoSplitWithMove(undoItem:EditorHistory) {

    }

    splitIntoNewLine(m:IModify) {
        m.textLine.setWords(m.origWords.slice(0, m.wordPos));
        var newLine = new Line();
        this.lines.splice(m.linePos + 1, 0, newLine);

        var selLine = newLine.getTextLine(m.currLang).setWords(m.origWords.slice(m.wordPos));
        this.setSelection(newLine, selLine, selLine.getWord(0));
        this.addUndo({action: EditorAction.SPLIT, lang: m.currLang, linePos: m.linePos, wordPos: m.wordPos});
    }

    undoSplitIntoNewLine(undoItem:EditorHistory) {

    }

    joinLine(m:IModify) {
        if (m.linePos < 1) {
            return false;
        }
        var prevLine = this.lines[m.linePos - 1];
        var prevWords = prevLine.getTextLine(m.currLang).words;
        var newWords = [...prevWords, ...m.origWords];
        var textLine = new TextLine(m.currLang, null, null, newWords);
        prevLine.setTextLine(m.currLang, textLine);
        m.textLine.setWords(null);
        this.setSelection(prevLine, textLine, textLine.getWord(prevWords.length - (prevWords[0].isEmpty ? 1 : 0)));
        this.addUndo({action: EditorAction.JOIN, lang: m.currLang, linePos: m.linePos, wordPos: m.wordPos});
        return true;
    }

    undoJoinLine(undoItem:EditorHistory) {
        this.joinLineWithMove(this.undoToModify(undoItem));
    }

    undoToModify(undoItem:EditorHistory) {
        var line = this.lines[undoItem.linePos];
        var textLine = line.getTextLine(undoItem.lang);
        return {
            line: line,
            linePos: undoItem.linePos,
            textLine: textLine,
            origWords: textLine.words,
            currLang: undoItem.lang,
            wordPos: undoItem.wordPos
        };
    }

    joinLineWithMove(m:IModify) {
        if (this.joinLine(m)) {
            for (var i = m.linePos + 1; i < this.lines.length; i++) {
                this.lines[i - 1].setTextLine(m.currLang, this.lines[i].getTextLine(m.currLang));
            }
            var lastLine = this.lines[this.lines.length - 1];
            lastLine.setTextLine(m.currLang, new TextLine(m.currLang, null, null, null));
            if (lastLine.isEmpty()) {
                this.lines.pop();
            }
            //remove joinLine undo
            this.undoStack.pop();
            this.addUndo({action: EditorAction.JOIN_MOVE, lang: m.currLang, linePos: m.linePos, wordPos: m.wordPos});
        }
    }

    undoJoinLineWithMove(undoItem:EditorHistory) {

    }

    addUndo(undo:EditorHistory) {
        this.undoStack.push(undo);
    }

    undoStack:EditorHistory[] = [];

    undo() {
        var undoItem = this.undoStack.pop();
        switch (undoItem.action) {
            case EditorAction.JOIN:
                this.undoJoinLine(undoItem);
                break;
            case EditorAction.JOIN_MOVE:
                this.undoJoinLineWithMove(undoItem);
                break;
            case EditorAction.SPLIT:
                this.undoSplitIntoNewLine(undoItem);
                break;
            case EditorAction.SPLIT_MOVE:
                this.undoSplitWithMove(undoItem);
                break;
        }
    }

    keyHandler = (e:KeyboardEvent) => {
        console.log(e.keyCode);

        var handled = false;
        if (!this.selectedLine || !this.selectedTextLine) {
            this.selectedLine = this.lines[0];
            this.selectedTextLine = this.selectedLine.en;
        }

        var modify:IModify = {
            currLang: this.selectedTextLine.lang,
            origWords: this.selectedTextLine.words,
            wordPos: this.selectedTextLine.words.indexOf(this.selectedWord),
            linePos: this.lines.indexOf(this.selectedLine),
            line: this.selectedLine,
            textLine: this.selectedTextLine

        };

        //enter without shift
        if (e.keyCode == 13) {
            if (e.shiftKey) {
                this.splitIntoNewLine(modify);
            }
            else {
                this.splitWithMove(modify);
            }
            handled = true;
        }

        //backspace
        if (e.keyCode == 8) {
            if (e.shiftKey) {
                this.joinLine(modify);
            }
            else {
                this.joinLineWithMove(modify);
            }
            handled = true;
        }

        if (e.keyCode == 90 && (e.metaKey || e.ctrlKey)) {
            this.undo();
            handled = true;
        }

        //left
        if (e.keyCode == 37 && modify.wordPos > 0) {
            var pos = this.selectedTextLine.words.indexOf(this.selectedWord);
            this.selectedWord = this.selectedTextLine.getWord(pos - 1);
            handled = true;
        }
        //right
        if (e.keyCode == 39 && modify.wordPos < this.selectedTextLine.words.length - 1) {
            var pos = this.selectedTextLine.words.indexOf(this.selectedWord);
            this.selectedWord = this.selectedTextLine.getWord(pos + 1);
            handled = true;
        }
        // up down
        if (e.keyCode == 38 || e.keyCode == 40) {
            var pos = this.lines.indexOf(this.selectedLine);
            if (pos == -1) {
                throw new Error('Unexpected error: line not found. ' + JSON.stringify(this.selectedLine));
            }
            //up
            if (e.keyCode == 38) {
                if (this.selectedTextLine.lang == Lang.EN) {
                    if (pos <= 0) {
                        return e.preventDefault();
                    }
                    this.selectedLine = this.lines[pos - 1];
                }
            }
            //down
            if (e.keyCode == 40) {
                if (this.selectedTextLine.lang == Lang.RU) {
                    if (pos >= this.lines.length - 1) {
                        return e.preventDefault();
                    }
                    this.selectedLine = this.lines[pos + 1];
                }
            }
            var oldTextLine = this.selectedTextLine;
            if (this.selectedTextLine.lang == Lang.EN) {
                this.selectedTextLine = this.selectedLine.ru;
            } else {
                this.selectedTextLine = this.selectedLine.en;
            }
            this.selectedWord = this.findClosestNextWord(this.selectedWord, this.selectedTextLine);
            handled = true;
        }
        if (handled) {
            this.forceUpdate();

            var wordSpan = this.selectedWord.span as HTMLElement;
            var rect = wordSpan.getBoundingClientRect();

            if (rect.top < 0) {
                wordSpan.scrollIntoView(true);
            }
            if (rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
                wordSpan.scrollIntoView(false);
            }

            e.preventDefault();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.keyHandler);
    }

    spanClassName(textLine:TextLine, word:Word) {
        return classNames({'selected': this.selectedWord == word && this.selectedTextLine == textLine});
    }

    setWordNode(word:Word, node:React.DOMComponent<{}>) {
        word.span = React.findDOMNode(node);
    }

    wordClick(e:React.MouseEvent, line:Line, textLine:TextLine, word:Word, wordPos:number) {
        this.selectedLine = line;
        this.selectedTextLine = textLine;
        //this.selectedWordPos = wordPos;
        this.selectedWord = word;
        this.forceUpdate();
        e.preventDefault();
        e.stopPropagation();
    }

    textLineClick(line:Line, textLine:TextLine) {
        this.selectedTextLine = textLine;
        this.selectedLine = line;
        this.selectedWord = textLine.getWord(0);
        //this.selectedWordPos = 0;
        this.forceUpdate()
    }

    render() {
        return <div>
            {this.lines.map(line => <div className="line">
                <div className="textline en" onClick={()=>this.textLineClick(line, line.en)}>
                    {line.en.words.map((w,i) =>
                    <span className={this.spanClassName(line.en, w)} ref={node => this.setWordNode(w, node)}
                          onClick={e=>this.wordClick(e, line, line.en, w, i)}>{w.word}</span>)}
                </div>
                <div className="textline ru" onClick={()=>this.textLineClick(line, line.ru)}>
                    {line.ru.words.map((w,i) =>
                    <span className={this.spanClassName(line.ru, w)} ref={node => this.setWordNode(w, node)}
                          onClick={e=>this.wordClick(e, line, line.ru, w, i)}>{w.word}</span>)}
                </div>
            </div>)}
        </div>
    }

}

React.render(<Hello/>, document.body);
