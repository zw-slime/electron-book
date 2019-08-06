import React from 'react';
import './App.css';
import {BookComponent} from "./component/book.component/book.compnent"

const authorData = {name: '尾鱼', office: '晋江签约作者', desc: "梦想是背着大包走遍江湖，实现中。然后在江湖某处拥有一间广交四海朋友的客栈，江湖朋友都叫我老板娘，或者，鱼总"}
const bookList = [{
    image: '',
    name: '司藤',
    desc: '人活在世上，得有个目标，有个奔头。连小学生写作文都写，我的梦想。\n' +
        '——你的梦想是什么？\n' +
        '——重新做回人。你呢？\n' +
        '——重新做回妖。\n',
    type: '言情-惊悚',
    role: ["司藤", "秦放"],
    status: 'done'
}, {
    image: '',
    name: '开封志怪',
    desc: '一个有脾气的神仙姑娘和有爱的展护卫，初见只是朋友，没有一见钟情，也没有一见生厌，这样的感情就好像种下一棵树，慢慢的它就长起来，然后有一天，枝繁叶茂，华盖如伞……' +
        '\n' +
        '神仙姑娘是来人间收妖的，收着收着难免惆怅，因为有些妖怪未必真的很坏，因为有些人来的比妖怪还要坏……',
    type: '言情-东方衍生',
    role: ["展昭", "端木翠"],
    status: 'done'
}, {
    image: '',
    name: '怨气撞铃',
    desc: '一串只能被死人怨气撞响的风铃 一段永远看不到终点的漂泊旅途',
    type: '言情-恐怖',
    role: ["季棠棠", "岳峰", "神棍"],
    status: 'done'
}, {
    image: '',
    name: '七根凶简',
    desc: '传说中，周王室衰微，大德之人老子决意退隐，骑青牛过函谷关。令官尹喜闻讯赶来，苦留无果，说：“先生那么大学问，不为世间留下些什么吗？史载，老子盘桓三月，留下一部约五千字的《道德经》。也有传言说，老子留下的，除了《道德经》，还有一卷以凤凰鸾扣封住的……七根凶简。',
    type: '言情-惊悚',
    role: ["木代", "罗韧", "一万三", "曹严华", "炎红砂", "神棍"],
    status: 'done'
}, {
    image: '',
    name: '四月间事',
    desc: '四月，你的命运泊岸，载我登船。',
    type: '言情-爱情',
    role: ["岑今", "卫来"],
    status: 'done'
}, {
    image: '',
    name: '西出玉门',
    desc: '有人说，你在深夜沙暴里隐约看到的黄土方城，其实是玉门关的鬼魂。',
    type: '言情-恐怖',
    role: ["叶流西", "昌东"],
    status: 'done'
}, {
    image: '',
    name: '三线轮回',
    desc: '——他们走到绝处，眼前无路，想回头。\n' +
        '——那他们成功了吗？\n' +
        '——不知道，故事还没完结。',
    type: '言情-惊悚',
    role: ["易飒", "宗杭"],
    status: 'done'
}, {
    image: '',
    name: '龙骨焚箱',
    desc: '——铃音绝，七简灭，水鬼消，山鬼散。',
    type: '言情-恐怖',
    role: ["孟千姿", "江炼", "神棍"],
    status: 'doing'
}]

function renderBookList() {
    return bookList.map(v => (
        <div className="app-book-item">
            <BookComponent name={v.name}></BookComponent>
            <div className="app-book-desc">
                <p><label>类型</label>{v.type}</p>
                <p><label>主角：</label>{v.role}</p>
                {/*<p><label>简介：</label>{v.desc}</p>*/}
            </div>
        </div>
    ))
}

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <div className='app-title'>
                    <div className='app-user'></div>
                    <div>
                        <p>{authorData.name}</p>
                        <p className="app-user-desc">{authorData.office}</p>
                    </div>
                </div>
                <div className='app-user-comment'>
                    <label>简介：</label>{authorData.desc}
                </div>
                <div className="app-book-list">
                    {renderBookList()}
                </div>
            </header>
        </div>
    );
}

export default App;

