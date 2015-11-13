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
    constructor(public en:TextLine, public ru:TextLine) {}
}

enum Lang{
    EN = 1,
    RU = 2
}
class TextLine {
    words:Word[] = [];

    getWord(i:number) {
        return this.words[i];
    }

    private text:string;

    constructor(public lang:Lang, public start:number, public dur:number, text:string) {
        this.setText(text);
    }

    setText(text:string) {
        this.text = text;
        this.words = text.split(/\s+/).map(w => new Word(w));
    }

    getText() {
        return this.text;
    }
}

class Word {
    constructor(public word:string, public span:Element = null) {}
}

function parse(s:string) {
    return s.split(/\n/).filter(line => line.trim() != '');
}
var enLinesS = parse(en);
var ruLinesS = parse(ru);
var lines = enLinesS.map((lineS, i) =>
    new Line(
        new TextLine(Lang.EN, null, null, lineS),
        new TextLine(Lang.RU, null, null, ruLinesS[i])));

class Hello extends React.Component<{},{}> {
    lines:Line[] = lines;
    selectedWordPos = 0;
    selectedLine:Line;
    selectedTextLine:TextLine;

    click(line:Line, textLine:TextLine, wordPos:number) {
        this.selectedLine = line;
        this.selectedTextLine = textLine;
        this.selectedWordPos = wordPos;
        this.forceUpdate();
    }

    findClosestNextWord(currWord:Word, nextTextLine:TextLine) {
        var currRect = currWord.span.getBoundingClientRect();
        var currPos = currRect.left + currRect.width / 2;
        return nextTextLine.words.map((w, i) => {
            var rect = w.span.getBoundingClientRect();
            var pos = rect.left + rect.width / 2;
            return {word: w, pos: i, diff: Math.abs(currPos - pos)};
        }).sort((a, b) => a.diff < b.diff ? -1 : 1).shift().pos;
    }

    keyHandler = (e:KeyboardEvent) => {
        //console.log(e.keyCode);
        var handled = false;
        //left
        if (e.keyCode == 37 && this.selectedWordPos > 0) {
            this.selectedWordPos--;
            handled = true;
        }
        //right
        if (e.keyCode == 39 && this.selectedWordPos < this.selectedTextLine.words.length - 1) {
            this.selectedWordPos++;
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
            this.selectedWordPos = this.findClosestNextWord(oldTextLine.getWord(this.selectedWordPos), this.selectedTextLine);
            handled = true;
        }
        if (handled) {
            this.forceUpdate();
            e.preventDefault();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.keyHandler);
    }

    spanClassName(textLine:TextLine, wordPos:number) {
        return classNames({'selected': this.selectedWordPos == wordPos && this.selectedTextLine == textLine});
    }

    setWordNode(word:Word, node:React.DOMComponent<{}>) {
        word.span = React.findDOMNode(node);
    }

    render() {
        return <div>
            {this.lines.map(line => <div className="line">
                <div className="textline en">
                    {line.en.words.map((w,i) =>
                    <span className={this.spanClassName(line.en, i)} ref={node => this.setWordNode(w, node)}
                          onClick={()=>this.click(line, line.en, i)}> {w.word} </span>)}
                </div>
                <div className="textline ru">
                    {line.ru.words.map((w,i) =>
                    <span className={this.spanClassName(line.ru, i)} ref={node => this.setWordNode(w, node)}
                          onClick={()=>this.click(line, line.ru, i)}> {w.word} </span>)}
                </div>
            </div>)}
        </div>
    }

}

React.render(<Hello/>, document.body);
