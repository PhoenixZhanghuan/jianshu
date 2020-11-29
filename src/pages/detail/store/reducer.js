import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    title: "《雪国》：铅华落尽，怅然若失",
    content: '<img src="https://upload-images.jianshu.io/upload_images/23095789-b2a7eb63fbd76f72?imageMogr2/auto-orient/strip|imageView2/2/w/984/format/webp" alt="" /> <p> <b>在川端康成创作的众多文学作品之中，《雪国》具备较强的代表性，该部作品不仅仅是在日本受到大众欢迎，在全世界范围内更是拥有大批的文学爱好者，在I960年英国学者赛丹斯蒂更是将《雪国》进行了翻译，由此英文版《雪国》开始在美国发行,从而使《雪国》成为了世界名著之一。</b> </p> <p>《雪国》该部小说属于川端康成最高文学创作典范，小说之中将洁净以及虚无和相应的悲哀三方面美感予以了淋漓尽致的展现，让读者在实际阅读之时不禁怦然心动,而感叹于世间纯净之美的同时又有一丝惆怅萦绕心间，整部小说充分表达了人物情感而又细致地描写了唯美意象。</p><p>而就《雪国》该部小说本身故事情节而言，并不具备复杂性，故事主要是将舞蹈研究学者岛村去往雪国相逢艺伎驹子以及叶子的情感作为故事核心,并由此展开一系列情感纠葛，其中岛村作为一个中年男子不仅拥有着自己的妻子，而且已经生儿育女，生活方面较为优越，并不需要为生计而发愁,整日多以无所事事为主，日常也仅仅是对西洋舞蹈有着研究热情，但是其并不是真正地从事舞蹈研究有着舞蹈技能，而是通过一些文字资料以及照片来了解舞蹈，只能算是一个舞蹈的“理论”研究学者。</p><p>三次去往温泉旅馆之后与艺伎驹子相遇，驹子不仅外表清丽而且十分单纯可爱，岛村对于驹子的印象就是“脚趾弯处都干净得让人不禁想要抚摸”，而岛村去往温泉旅馆多半也与喜爱驹子有关,而在其第二次去往雪国的列车上又相逢了美丽少女叶子，岛村以及叶子和驹子三者之间的情感关系由此形成，整部小说也主要是围绕这样一段微妙情感展开具体故事内容。</p>'
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default reducer;
