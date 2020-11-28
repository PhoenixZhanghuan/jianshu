import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: "社会热点",
            imgUrl:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1326378687,2904033429&fm=26&gp=0.jpg",
        },
        {
            id: 2,
            title: "手绘",
            imgUrl:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2763217051,1519585379&fm=26&gp=0.jpg",
        },
    ],
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
