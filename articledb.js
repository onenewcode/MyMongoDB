/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 70002 (7.0.2)
 Source Host           : 192.168.218.131:27017
 Source Schema         : articledb

 Target Server Type    : MongoDB
 Target Server Version : 70002 (7.0.2)
 File Encoding         : 65001

 Date: 20/10/2023 09:55:23
*/


// ----------------------------
// Collection structure for comment
// ----------------------------
db.getCollection("comment").drop();
db.createCollection("comment");

// ----------------------------
// Documents of comment
// ----------------------------
db.getCollection("comment").insert([ {
    _id: ObjectId("652f89bc5ed93a67a6029e82"),
    articleid: "100000",
    content: "今天天气真好，阳光明媚",
    userid: "1001",
    nickname: "Rose",
    createdatetime: ISODate("2023-10-18T07:31:08.406Z"),
    likenum: NumberInt("10"),
    state: null
} ]);
db.getCollection("comment").insert([ {
    _id: "1",
    articleid: "100001",
    content: "我们不应该把清晨浪费在手机上，健康很重要，一杯温水幸福你我他。",
    userid: "1002",
    nickname: "相忘于江湖",
    createdatetime: ISODate("1970-01-01T00:00:00.000Z"),
    likenum: NumberInt("1000"),
    state: "1"
} ]);
db.getCollection("comment").insert([ {
    _id: "2",
    articleid: "100001",
    content: "我夏天空腹喝凉开水，冬天喝温开水",
    userid: "1005",
    nickname: "伊人憔悴",
    createdatetime: ISODate("2019-08-05T23:58:51.485Z"),
    likenum: NumberInt("888"),
    state: "1"
} ]);
db.getCollection("comment").insert([ {
    _id: "3",
    articleid: "100001",
    content: "我一直喝凉开水，冬天夏天都喝。",
    userid: "1004",
    nickname: "杰克船长",
    createdatetime: ISODate("2019-08-06T01:05:06.321Z"),
    likenum: NumberInt("666"),
    state: "1"
} ]);
db.getCollection("comment").insert([ {
    _id: "4",
    articleid: "100001",
    content: "专家说不能空腹吃饭，影响健康。",
    userid: "1003",
    nickname: "凯撒",
    createdatetime: ISODate("2019-08-06T08:18:35.288Z"),
    likenum: NumberInt("2000"),
    state: "1"
} ]);
db.getCollection("comment").insert([ {
    _id: "5",
    articleid: "100001",
    content: "研究表明，刚烧开的水千万不能喝，因为烫嘴。",
    userid: "1003",
    nickname: "凯撒",
    createdatetime: ISODate("1970-01-01T00:00:00.000Z"),
    likenum: NumberInt("3000"),
    state: "1"
} ]);
db.getCollection("comment").insert([ {
    _id: ObjectId("652f8ca79e225263f0d28433"),
    content: "测试添加的数据",
    userid: "1003",
    nickname: "凯撒大帝",
    createdatetime: ISODate("2023-10-18T07:43:35.255Z"),
    likenum: NumberInt("0"),
    replynum: NumberInt("0"),
    state: "1",
    articleid: "100000",
    _class: "onenewcode.article.po.Comment"
} ]);
