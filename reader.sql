/*
 Navicat Premium Data Transfer

 Source Server         : a
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : reader

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 20/04/2020 21:50:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('admin', 'dcf4b8b63cb9b28d02e012386d9f6951', NULL);
INSERT INTO `admin` VALUES ('新管理员', 'dcf4b8b63cb9b28d02e012386d9f6951', '123423@qq.com');

-- ----------------------------
-- Table structure for books
-- ----------------------------
DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`  (
  `bookId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `extName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `detail` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `shareLink` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `linkSecret` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `downloadTimes` int(255) NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`bookId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of books
-- ----------------------------
INSERT INTO `books` VALUES ('1575338367862', 'zcq1933', '《潜规则-中国的历史故事》', '.jpg', '没看过 但是名字很神秘', 'https://pan.baidu.com/s/12iLUSqnkvp0haywPL8LHug', 'h1b4', NULL, '社科');
INSERT INTO `books` VALUES ('1575362022112', 'zcq1933', '《19世界是红的：看懂中国经济格局的一本书》', '.jpg', '看懂中国经济', 'https://pan.baidu.com/s/1VAyR_dvl8sIa6C77jeIXHQ', 'gdrm', NULL, '社科');
INSERT INTO `books` VALUES ('1575440628753', 'zcq1933', '《围城》', '.jpg', '《围城》是钱钟书所著的长篇小说，是中国现代文学史上一部风格独特的讽刺小说。被誉为“新儒林外史”。第一版于1947年由上海晨光出版公司出版。故事主要写抗战初期知识分子的群相。', 'https://pan.baidu.com/s/1vtGLqDTvApgfhdFhHXxNsw', 'na7a', NULL, '文学');
INSERT INTO `books` VALUES ('123412341234', 'zcq1933', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `books` VALUES ('1577772409648', '新用户1', '12.31', '.jpg', '1234', '12342134', '1234', NULL, '财经');
INSERT INTO `books` VALUES ('1575506706112', '2017011812', '《24个比利》', '.jpg', '《24个比利》是美国作家丹尼尔·凯斯创作的长篇小说，是一部多重人格分裂纪实的作品。 [1]  该书讲述了一个真实的故事，威廉·斯坦利·米利根（比利），是美国史上第一位犯下重罪，结果却获判无罪的嫌犯，因为他是一位多重人格分裂者。比利的多重人格达24个之多，他体内的人格可以互相交谈、下棋，互相控制对方的行为，所有的人格都居住在一个大厅中，谁走到大厅中心的一盏聚光灯之下，谁就是现在控制比利身体的人格，但这些人格互相都不会知道对方干了什么，所以比利接受治疗之前的生活是极其混乱的。 [2] ', 'https://pan.baidu.com/s/1-YAKPVnSr1L6XNuY8f2ezA', '1edy', NULL, '文学');
INSERT INTO `books` VALUES ('1575507592588', '2017011812', '《新书》', '.jpg', '12342134', 'zcq1933', 'houdao123', NULL, '文学');
INSERT INTO `books` VALUES ('1575879685562', '2017011812', '《边荒传说》', '.jpg', '本书以苻坚攻晋的淝水之战为前提，对当时的门阀时势五胡晋朝都有详细的描述，第一集算是一道开胃菜以后的章节会愈来愈精彩。边荒是南北的缓冲地带亦是故事的重心，黄易融入历史的功力又再一次发挥，这是一套历史武侠的作品，就如大唐双龙传般没有让人议论的情色。', 'https://pan.baidu.com/s/1qsFcg18KqYGgFeU-4z8Wuw', 'rbvv', NULL, '文学');
INSERT INTO `books` VALUES ('1575880125278', '2017011812', '《藏地密码》', '.jpg', '《藏地密码(套装共10册)》，千百年来，西藏一直被一种神圣而又神秘的氛围所笼罩，直到今天，我们依然对这片土地的历史知之甚少。读过《藏地密码》，你就会发现原来西藏比你所知道的更加神秘，更加有魅力。《藏地密码》被广大读者誉为“一部关于西藏的百科全书式小说”，世界上迄今为止唯一一部追寻藏传佛教及西藏千年隐秘历史真相的探险巨著。翻开《藏地密码》，犹如进入一幅从未展开过的西藏千年隐秘历史画卷……从横穿可可西里到深入喜马拉雅雪山深处，从藏獒“紫麒麟传说”到灵獒“海蓝兽传奇”，从宁玛古经秘闻到格萨尔王史诗，从公元838年西藏最黑暗时期的“朗达玛禁佛”到1938年和1943年希特勒两次派人进藏之谜……', 'https://pan.baidu.com/s/1tDocBYFSbhl36kOt_b4cMQ', 'fsb2', NULL, '文学');
INSERT INTO `books` VALUES ('1575880027393', '2017011812', '《大秦帝国》', '.jpg', '在礼崩乐坏，群雄逐鹿的春秋末年，面临亡国之祸的秦国于列强环伺之下，崛起于铁血竞争的群雄列强之林。从秦孝公开始，筚路蓝缕、彻底变革、崇尚法制、统一政令，历一百六十余年六代领袖坚定不移地努力追求，才完成了一场伟大的帝国革命，扫六合而一统天下，建立起一个强大统一的帝国。', 'https://pan.baidu.com/s/1hxo1xIEnuX_FOjoZ5EbiIQ', 'oudr', NULL, '文学');
INSERT INTO `books` VALUES ('1575880384920', '2017011812', '《德川家康》', '.jpg', '\"《德川家康：霸王之家》这是一部精炼典雅、视角独特的传记历史小说。作者是日本最著名的历史小说家司马辽太郎，而传主则是日本战国时代赫赫有名的德川家康。 　　德川家康，不是武田信玄般用兵如神的军事家，也非织田信长般汪洋恣肆的天才人物，更不是丰臣秀吉般敢作敢为的草莽英雄。在猛如虎狼的强敌的紧紧包围下，他最终得以统一全日本，开创德川幕府三百年基业，奠定大江户时代持久太平。他的传奇经历让后世人们感叹不已。\"', 'https://pan.baidu.com/s/1z4Y63-hfWMAW0u90hBz3EQ', '3v9v', NULL, '文学');
INSERT INTO `books` VALUES ('1575880432509', '2017011812', '《第二次世界大战回忆录》', '.jpg', '英国前首相温斯顿·伦纳德·斯宾塞·丘吉尔爵士以二战英国首相的亲生经历，并引用大量政府文件和个人纪录，记述1930年代初到二战结束期间的主要国际事件，尤其是英国的政治和军事活动。', 'https://pan.baidu.com/s/1c0KeLp-uvg9wbokAUCkt9g', 'qdqh', NULL, '文学');
INSERT INTO `books` VALUES ('1575880352211', '2017011812', '《大唐双龙传》', '.jpg', '《大唐双龙传》共63卷，是黄易先生最长的一部作品。讲述了隋末群雄割据年代，寇仲及徐子陵两个小混混，凭着初生之犊的勇气，在乱世的洪流中力争上游。该书把历史背景、用兵之道、悱恻爱情和武侠世界完美地结合起来，规模宏大，气势磅礴，情节跌宕起伏、景物描写引人入胜，为读者展开了隋末战火连绵、民不聊生、群雄纷争，有识之士出于对苍生的同情，为太平盛世而奋斗的感人画卷。加之作者语言词锋、情节设计已臻大家之境，对白设计亲切引人而不失幽默，，有亲临其境之感。不得不佩服作者出色的的笔韵和想象力。这部百万字的巨著囊括了军事、历史、天文、医术、科学、宗教、宇宙奥秘、艺术美学等中国几千年文化智慧的精髓，但更重要的——是对生命哲学的省思。这亦是中国古典文化知识与武侠的完美融合。 [2]', 'https://pan.baidu.com/s/18pmgy-1M67rHSjkPtwOWMw', 'fu7f', NULL, '文学');
INSERT INTO `books` VALUES ('1575880462874', '2017011812', '《二十四史》', '.jpg', '二十四史，是中国古代各朝撰写的二十四部史书的总称，由于《史记》的写法被历来的朝代纳为正式的历史写作手法，故将和《史记》一样用纪传体写作的史书称“正史”。它上起传说中的黄帝（约前2550年），止于明朝崇祯十七年（1644年），计3213卷，约4000万字，用统一的有本纪、列传的纪传体编写。', 'https://pan.baidu.com/s/1rDTj0s5WfbM9VUB9V7SqQQ', 'hqqj', NULL, '文学');
INSERT INTO `books` VALUES ('1575880493539', '2017011812', '《鬼吹灯》', '.jpg', '”人点烛，鬼吹灯”是传说中摸金派的不传之秘，意为进入古墓之中先在东南角点燃一支蜡烛才能开棺，如果蜡烛熄灭，须速速退出，不可取一物。相传这是祖师爷所定的一条活人与死人的契约，千年传承，不得破。', 'https://pan.baidu.com/s/1yrPKbcCNZYXAvn1F_k1mHA', 'qas5', NULL, NULL);
INSERT INTO `books` VALUES ('1575880523592', '2017011812', '《哈尔罗杰历险记》', '.jpg', '该故事以一本家传的秘书残卷为引，讲述三位当代摸金校尉，为解开部族消失的千古之谜，利用风水秘术，解读天下大山大川的脉搏，寻找一处处失落在大地深处的龙楼宝殿。那些龙形虎藏、揭天拔地、倒海翻江的举动都迵异庸俗，在离奇诡异的地下世界中，历史的神秘面纱正一层层地被揭开…… [1]', 'https://pan.baidu.com/s/1ukUKwS9QWpgrlSzMqpg7pg', '42uj', NULL, NULL);
INSERT INTO `books` VALUES ('1575880555147', '2017011812', '《哈利波特》', '.jpg', '从小被寄养在姨丈家里的哈利波特，饱受姨丈一家人的歧视与欺侮，然而就在11岁生日那天，哈利波特得知了自己原本是巫师，并且被录取为霍格沃茨魔法学校中的一员。登上霍格沃茨特快列车，哈利开始了他的魔幻旅程，一切都那么新奇，在那里，他第一次有了自己的好朋友：罗恩和赫敏。许多魔法课程也正在等着他研习：有飞行课、黑魔法防御术、魔药学与变形魔法等等，当然还有让所有魔法师疯狂的魁地奇球赛。', 'https://pan.baidu.com/s/1QT-PE0YnD1vw14Xy20i4dA', '', NULL, NULL);
INSERT INTO `books` VALUES ('1575880627051', '2017011812', '《货币战争》', '.jpg', '自1694年英格兰银行成立以来的300年间，几乎每一场世界重大变故背后，都能看到国际金融资本势力的身影。他们通过左右一国的经济命脉掌握国家的政治命运，通过煽动政治事件、诱发经济危机，控制着世界财富的流向与分配。可以说，一部世界金融史，就是一部谋求主宰人类财富的阴谋史。', 'https://pan.baidu.com/s/1pnQ6PiTuDV5v-xCGnpHTig', 'o2lh', NULL, '社科');
INSERT INTO `books` VALUES ('1575880671483', '2017011812', '《货币战争2：金权天下》', '.jpg', '《货币战争2：金权天下》以三百年的历史纵深，全面阐述欧美主要金融势力集团的形成、发展、排挤、冲突、联合与制衡，系统解析当今世界幕后主宰力量的运作和决策机制，第一次揭开了统治世界的“国际银行家族俱乐部”的神秘面纱，洞穿了席卷全球的金融海啸中隐匿的惊天阴谋,并由此预言：世界单一货币将在2024年成为现实。', 'https://pan.baidu.com/s/1IBXSBZZmreUDQ1sOW5PIpw', 'gutb', NULL, '社科');
INSERT INTO `books` VALUES ('1575880712639', '2017011812', '《货币战争3：金融高边》', '.jpg', '用一句话概括《货币战争3·金融高边疆》，那就是：以金融的视角解读中国近现代史。在前两部《货币战争》分别解读了美国和欧洲的金融发展史之后，宋鸿兵终于把目光投向了中国，以鸦片战争为起点，开始了对中国金融发展的探究和解密。', 'https://pan.baidu.com/s/11AVjm3etvv2dYTZBTRBucQ', 'tp4b', NULL, NULL);
INSERT INTO `books` VALUES ('1575880877702', '2017011812', '《长安乱》', '.jpg', '《长安乱》以武林为背景，“我”身为少林弟子，虽然没有卓越的武功，但有特异的功能。在乱得近乎荒谬的世界，十八岁的释然和尚握着据说可以号召天下的剑，带着在大饥荒中侥幸被救的女孩喜乐，玩世不恭地闯荡江湖，他茫然地走出了高高的晃晃悠悠地穿梭在乱糟糟的世界中演绎着他的命运。一场乱世厮杀，他夺取了盟主，但喜乐也因难产死了，乱世悲情，在他最终选择归隐山林时，故事戛然而止 。', 'https://pan.baidu.com/s/1ISBP1uWOIiT_LuRop4qm3w', 't17d', NULL, NULL);
INSERT INTO `books` VALUES ('1575880916953', '2017011812', '《剑桥中国史》', '.jpg', '《剑桥中国史》共15 卷，各卷由知名学者主编，卷内各章由研究有素的专家撰写，反映了国外中国史研究的水平和动向。第12和13卷论述中华民国的历史。在历史研究的角度、领域等方面具有较高的参考价值。两卷都有所论述时期和课题和详尽书目；并有书目介绍，评述各章有关的资料和论著。中国社会科学出版社已出的《剑桥中国史》的其他中译本有秦汉卷、隋唐卷、明代卷、晚清两卷，丛书各卷皆由国外知名学者担当主编，卷内各章节亦由研究有素的专家撰写，并注意吸收各国学者的研究成果，反映了世界中国史研究的水平和动向。', 'https://pan.baidu.com/s/1YXfn60tgo1XNaEHHwyGX9A', '069m', NULL, '社科');
INSERT INTO `books` VALUES ('1575880949044', '2017011812', '《金庸全集》', '.jpg', '金庸全集是指金庸所创作的作品的合集。金庸曾把所创作的小说名称的首字联成一副对联：飞雪连天射白鹿，笑书神侠倚碧鸳，再加一部《越女剑》，共15部。', 'https://pan.baidu.com/s/1S2Wu4Zo1ex9y3ZUaFRsuCQ', '6485', NULL, '文学');
INSERT INTO `books` VALUES ('1575880993165', '2017011812', '《尽管去做--无压力的工作艺术》', '.jpg', '作者在本书中揭示的方法，在各种类型的企业中，在每一种工作层面上，在不同的文化氛围中，甚至在家庭和学校里，都已经得到了证明是功效卓著的。', 'https://pan.baidu.com/s/1Kw6droibat8UdJKPxxIgrQ', 'cwqk', NULL, '社科');
INSERT INTO `books` VALUES ('1575881020623', '2017011812', '《鲁迅文集》', '.jpg', '本书收录鲁迅先生创作的全部著作（不含译著）：小说集《呐喊》《彷徨》《故事新编》；散文诗集《野草》；散文集《朝花夕拾》；杂文集《坟》《热风》《华盖集》《华盖集续编》等；书信集《两地书》；学术著作《古籍序跋集》《译文序跋集》《汉文学史纲要》《中国小说史略》。', 'https://pan.baidu.com/s/1mmc1USt3qzCik7Z13fzlHw', '7slq', NULL, '文学');
INSERT INTO `books` VALUES ('1575881052866', '2017011812', '《毛泽东传》', '.jpg', '本书是第一部由中共中央批准编写的毛泽东的传记，主要依据中央档案馆保存的大量有关毛泽东的档案资料，参考同毛泽东有过直接接触的人士写的回忆文章和对他们的访谈记录，借鉴吸收毛泽东研究方面的一些成果，在对毛泽东的生平和思想进行了较长时间认真研究的基础上写成的。它以详实可靠的材料、简洁流畅的文字，详细真实地记述了毛泽东从青少年时期到缔造中国共产党、中国人民军队和中华人民共和国的波澜壮阔的人生经历，也从一个重要方面反映了半个多世纪中国革命的发展进程。', 'https://pan.baidu.com/s/14NExLj8F9mhfcmM-DGm2Dw', 'uvsw', NULL, '文学');
INSERT INTO `books` VALUES ('1575881085247', '2017011812', '《史上第一混乱》', '.jpg', '我叫萧强，外号小强，在一家冷冷清清的街道上，经营着一家冷冷清清的当铺，整天....无所事事，可是只要一遇到事，就能让人遇大刺激，有一天，我遇到了一个叫刘老六的老头，自己声称是神仙，还莫名其妙的和他做了一笔交易。', 'https://pan.baidu.com/s/1rPG8tYstgWBcQYT4DCRzsw', 'epqc', NULL, '文学');
INSERT INTO `books` VALUES ('1575881111727', NULL, '《三毛流浪记》', '.jpg', '三毛是旧上海的一名流浪儿童，他没有家，没有亲人，吃贴广告用的浆糊，睡在垃圾车里，冬天就以破麻袋披在身上御寒。他做过各种各样的事情；卖报、拣拉圾、帮别人推三轮车，但他挣到的钱连吃顿饱饭都不够。', 'https://pan.baidu.com/s/1GDh0y1ITPsajTLq8QEOz8g', 'xh6x', NULL, '文学');
INSERT INTO `books` VALUES ('1575881136560', '', '《圣经》', '.jpg', '《圣经》又名《新旧约全书》，由《旧约》《新约》组成。《旧约》一共有三十九卷，以古希伯来文（含亚兰文）写就，由犹太教教士依据犹太教的教义编纂而成。它囊括了犹太及邻近民族从公元前12世纪至公元前2世纪的人文历史资料。《新约》一共27卷。', 'https://pan.baidu.com/s/1epQuox8YSVyzWH3PHKRVgQ', '5mg0', NULL, '文学');
INSERT INTO `books` VALUES ('1575881165430', NULL, '《小王子》', '.jpg', '《小王子》是法国作家安托万·德·圣·埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。', 'https://pan.baidu.com/s/10nwdRlSwjaGZm7B6CYzVPQ', 'yuec', NULL, '文学');
INSERT INTO `books` VALUES ('1575881307978', NULL, '《银河英雄传说》', '.jpg', '原本银河宇宙三分天下的微妙关系，被帝国内崛起的天才战略家莱因哈特打破，率领两万艘舰队踏上征途的他，遇上了他毕生的夙敌——同盟军的杨威利，并展开了首次的智谋激斗……亚姆立札星域被同盟军的鲜血所染遍。不败的魔术师杨威利能否解决这一连串的危机……一场规模壮大的太空战记由此展开！', 'https://pan.baidu.com/s/1yfyVQ_WXari4QhHW6KbM-w', 'm3lv', NULL, '文学');
INSERT INTO `books` VALUES ('1575881334002', NULL, '《英雄志》', '.jpg', '《英雄志》是一部极具金庸文字风格的作品，为求推广，让您能细细地品尝，这瓶难得一见的佳酿红酒。讲武堂会持续作业，当然，也希望您喜欢与支持。', 'https://pan.baidu.com/s/13fejZ_IeHK5g2KFuofJwWg', 'jw3n', NULL, '文学');
INSERT INTO `books` VALUES ('1575881361944', NULL, '《中国历史通俗演义》', '.jpg', '《中国历史通俗演义》上迄秦汉，下至民国，两千余年的中国历史栩栩如生地展现在我们面前。它是迄今为止，唯二部全面叙述中国历史的通俗演义。自它面世以来，即受到众多知名人士的广泛推崇。在延安时期，毛泽东同志曾建议党的高级干部应该好好阅读，以了解中国历史。同时，这也是他喜爱阅读的一套历史读物。在他列给儿子毛岸英的书单里，本书同样位列其中。其他如著名历史学家柴德赓、著名作家二月河……都给予这部著作很高的评价。', 'https://pan.baidu.com/s/1xdwioqi6hxbgmlsbT_o7Zw', 'saol', NULL, '文学');
INSERT INTO `books` VALUES ('1575881389884', NULL, '《资治通鉴全译本（柏杨版）》', '.jpg', '《资治通鉴》所记历史有限，上起周威烈王二十三年（公元前403年），下迄后周显德六年（959年），前后共1362年。全书按朝代分为十六纪，即《周纪》五卷、《秦纪》三卷、《汉纪》六十卷、《魏纪》十卷、《晋纪》四十卷、《宋纪》十六卷、《齐纪》十卷、《梁纪》二十二卷、《陈纪》十卷、《隋纪》八卷、《唐纪》八十一卷、《后梁纪》六卷、《后唐纪》八卷、《后晋纪》六卷、《后汉纪》四卷、《后周纪》五卷。', 'https://pan.baidu.com/s/1aWM_xTgDwYL3FFsqa5I4eA', '', NULL, '文学');
INSERT INTO `books` VALUES ('1576142113345', NULL, '《解读量化投资》', '.jpg', '由忻海编著，用轻松、幽默的讲故事手法，解读了西蒙斯量化投资“黑箱”之内的秘密。通过深入浅出地回顾西蒙斯的投资布阵，比较西蒙斯与巴菲特投资模式的迥异，分析投资领域技术分析方法和宏观分析方法的优劣，带我们走近了20年中平均每年总回报为80%的大奖章基金，看看它如何能将1万元变成1亿元。用数学公式打败市场，投资并非悬而未决的事情——这就是《解读量化投资：西蒙斯用公式打败市场的故事》揭示的投资之道。 《解读量化投资：西蒙斯用公式打败市场的故事》内容简介：詹姆斯·西蒙斯，基金领域的拓扑学大腕，成功取代保尔森的对冲之王，20年内最佳赚钱基金经理，在投资界掀起了一场量化投资的狂潮。《解读量化投资：西蒙斯用公式打败市场的故事》用轻松、幽默的讲故事手法，解读了西蒙斯量化投资“黑箱”之内的秘密。通过深入浅出地回顾西蒙斯的投资布阵，比较西蒙斯与巴菲特投资模式的迥异，分析投资领域技术分析方法和宏观分析方法的优劣，《解读量化投资：西蒙斯用公式打败市场的故事》带我们走近了20年中平均每年总回报为80%的大奖章基金，看看它如何能将1万元变成1亿元。用数学公式打败市场，投资并非悬而未决的事情——这就是《解读量化投资：西蒙斯用公式打败市场的故事》揭示的投资之道。', 'https://pan.baidu.com/s/1gmeTkk2IR5r63XFl-G9_NA', 'zxs9', NULL, '财经');
INSERT INTO `books` VALUES ('1576028128118', NULL, '《捣蛋鬼的日记》', '.jpg', '来自意大利的儿童书籍', 'https://pan.baidu.com/s/1OzdRyLVZifVLLS5XaO4KSA ', 'dn1a', NULL, '少儿');
INSERT INTO `books` VALUES ('1576028569725', NULL, '《飞机总体设计》', '.jpg', '《飞机总体设计》是2006年北京航空航天大学出版社出版的图书，作者是顾诵芬。本书对飞机总体设计的基本概念和方法作了系统简明的阐述，强调了飞机总体设计的综合协调、折中权衡、反复迭代等特点。', 'https://pan.baidu.com/s/1Erode8MNdk_QPl2k7qsvZA', 'jrix', NULL, '科技');
INSERT INTO `books` VALUES ('1576142343420', NULL, '《格雷厄姆投资之道》', '.jpg', '姜开舰（雪球ID: Passion启航） 本杰明·格雷厄姆的忠实追随者，对格雷厄姆的投资理念有深入研究，同时，多年来一直在港股、A股、B股等多个市场实践格雷厄姆式价值投资。曾供职于上海一家投研机构和一家大型对冲基金，目前为独立投资人。', 'https://pan.baidu.com/s/1mQSSQt6kbY0hQA2jgWO9VQ', '59vh', NULL, '财经');
INSERT INTO `books` VALUES ('1576142464904', NULL, '《估值的艺术：110个案例解读》', '.jpg', '本书以一种务实的心态，阐述了评估公司过往业绩和预期未来业绩所需的所有定量和定性方法。  一只股票是高估了还是低估了？如何评估一家公司的未来前景？如何在实践中运用复杂的估值方法？本书不仅逐个回答了这些问题，而且以一种便捷和务实的方式，阐述了公司估值的相关原则。更重要的是，本书通过下述方式把估值理论与投资实践联系起来：财报分析和解读、商业模式分析、公司估值、股票分析、投资组合管理和价值投资方略。  本书采用的另一个独特的方法是：用真实公司业绩这种实例来说明每一种估值方式。所用实例110个，辅以扎实的理论架构，并为投资者提供了在实践中易于使用的系统方法。  无论是资产管理经理，还是专业投资人士，或是私人投资者，都需要一个靠谱的、最新的和综合的公司估值指南。本书就是为这些读者而写，旨在鼓励它们在证券市场投资时，要像企业家一样运用思维，而不是像投机者那样凭灵感。在过...', 'https://pan.baidu.com/s/1G6sgGK8h9FIi3klUNnuFTg', 'uyh5', NULL, '财经');
INSERT INTO `books` VALUES ('1576142888226', NULL, '《估值就是讲故事：创业融资与投资》', '.jpg', '投资机构对企业的估值，是一个困难而且主观的过程。一个企业或者一个投资项目究竟值多少钱？投资是赚了还是亏了？投资者或者创业者该用哪些指标、工具去评判和衡量？本书讨论了一些常见的各种估值方法，还有一些天马行空的方法，主要供高成长企业在进行融资谈判时与投资机构进行换位思考。', 'https://pan.baidu.com/s/12AAUKoZzOBn8uPtpRvqOCg', 'ipex', NULL, '财经');
INSERT INTO `books` VALUES ('1576143168802', NULL, '《巴菲特的估值逻辑：20个投资案例深入复盘》', '.jpg', '自20世纪50年代以来，沃伦·巴菲特及其合伙人投资了多家20世纪盈利能力最强且最能代表未来趋势的公司。但他们怎么知道自己是在做正确的投资呢？巴菲特及其合伙人是如何甄别具有未来前景的公司呢？其他人如何才能效仿和学习他们的方法呢？  对于寻求成功投资框架的巴菲特追随者而言，《巴菲特的估值逻辑》无疑是一个上佳的礼物，因为它对巴菲特迄今为止的长期投资组合，做了最为详尽的分析。  作为资深投资人，本书作者从巴菲特1958年对桑伯恩地图公司的投资开始，连续追溯了另外19个巴菲特的主要投资案例，如喜诗糖果公司、《华盛顿邮报》、政府雇员保险公司、可口可乐公司、美国航空集团、富国银行和IBM。  借助于合伙人信函、公司文件、年度报告、第三方参考资料和其他原始信息，作者把巴菲特投资的独特性定位为：时点的把握、本能的发挥、外界信息的运用和投后的运作。而且，作者还从中辨识出适用于...', 'https://pan.baidu.com/s/15WTAwQJnxACUE2ZqUnC8Tw', 'gdqp', NULL, '财经');
INSERT INTO `books` VALUES ('1576143359493', NULL, '《英文绘本1000本》', '.jpg', '1000本绘本合集', 'https://pan.baidu.com/s/1keiAZHw1LHuFOuhK-Nx7FQ', 'v82m', NULL, '少儿');
INSERT INTO `books` VALUES ('1576659520139', NULL, '《商业的本质》', '.jpg', '《商业的本质》是杰克·韦尔奇对过去十几年商业变革的反思和总结。他指出，科技革命给市场带来了巨大变化和诸多杂音，但作为管理者，不能迷失商业中最核心的东西。在当今的新商业环境下，要想“赢”，就必须遵从商业的规则，回归商业的本质。 《商业的本质》不谈空洞的理论和概念，因为在现实中，商业成功的关键在于妥善解决那些层出不穷、生死攸关、不可避免的窘境。韦尔奇在《商业的本质》中结合大量企业的现实案例和经营困境，给出了切实的解决方案，特别是针对经济低迷时期，提出了企业实现快速增长的六大突破口，包括：协同力、领导力、影响业绩和成本的关键数据、快速敏捷的战略制定流程、组织结构优化和领导者的心理素质。同时，韦尔奇还在书中专门分析了中国的经济状况，对中国企业的发展做出了点评和展望。', 'https://pan.baidu.com/s/1yoGUYSvCCMWBIWHlREs03Q', 'cp8a', NULL, '财经');
INSERT INTO `books` VALUES ('1576659562213', NULL, '《智能时代》', '.jpg', '大数据和机器智能的出现，对我们的技术发展、商业和社会都会产生重大的影响。 作者吴军在《智能时代：大数据与智能革命重新定义未来》中指出，首先，我们在过去认为非常难以解决的问题，会因为大数据和机器智能的使用而迎刃而解，比如解决癌症个性化治疗的难题。同时，大数据和机器智能还会彻底改变未来的商业模式，很多传统的行业都将采用智能技术实现升级换代，同时改变原有的商业模式。大数据和机器智能对于未来社会的影响是全方位的。', 'https://pan.baidu.com/s/1Y7qEVo6nvy3th-_M2w85ug', 'owf7', NULL, '财经');
INSERT INTO `books` VALUES ('1576659852000', NULL, '《精要主义》', '.jpg', '你是否也觉得无情的压力正在碾压生活中那些美好的东西？ 你是否经常感到疲惫异常却又没有发挥所能？ 你是否发现自己只擅长做琐碎小事？ 你是否感到自己总是忙忙碌碌却效率低下？ 你是否觉得自己的时间总是被别人的安排打乱？ 你是否觉得自己一直在奔波，却总是到不了任何地方？ 若想要最大限度成就真正重要之事，切忌贪多求全，事事应允。如果答案不是一个确定的Yes，就是一个肯定的No。只有摒弃琐碎而无足轻重的生活，才能过真正重要而有意义的人生。 精要主义主张只做该做的事情。它向“我可以拥有一切”和“我可以做好一切”的主流论断发起攻击，倡导“在合适的时机，以恰当的方式，追求合适的事情”。它旨在让人们重新掌控自己的选择权，自主决定如何支配宝贵的时间和精力——而不再是许可他人替我们作出选择。 《精要主义》一书介绍了精要主义者的思维模式，并将这种模式转化为一种系统化的程序，助你拜托无意义的多数，专注有意义的少数，成就有意义、有目的的人生。对于那些想要重新掌控自己的健康、幸福与快乐的人来说，这是一本必读之作。', 'https://pan.baidu.com/s/1S8wCLNlBRjjezvUfTfpc6g', '2w5i', NULL, '财经');
INSERT INTO `books` VALUES ('1576659882982', NULL, '《运营之光》', '.jpg', '在互联网行业内，“运营”这个职能发展到一定阶段后，往往更需要有成熟的知识体系和工作方法来给予行业从业者们以指引。 《运营之光：我的互联网运营方法论与自白》尤其难得之处在于：它既对“什么是运营”这样的概念认知类问题进行了解读，又带有大量实际的工作技巧、工作思维和工作方法，还包含了很多对于运营的思考、宏观分析和建议，可谓内容完整而全面，同时书中加入了作者亲历的大量真实案例，让全书读起来深入浅出、耐人寻味。 从内容的受众来说，它既有面向初入互联网行业的运营从业者们的具体工作方法讲解和建议，又有适合3～5年运营从业者们阅读的一些案例解析、思考方法分享，也有更适合创业者、互联网公司高管阅读的一些运营体系搭建、不同类型产品所适合的运营方法等更为宏观的问题的解读。 我们希望它可以成为面向互联网运营从业者和创业者们的一本经典读物。', 'https://pan.baidu.com/s/1jQ0e33gmiqiJHANgrvv_eQ', 'h862', NULL, '财经');
INSERT INTO `books` VALUES ('1576659689077', NULL, '《硅谷钢铁侠》', '.jpg', '全球首部埃隆·马斯克授权著作！了解埃隆·马斯克最全面、最真实、最经典读本 本书独家收录32张埃隆·马斯克成长、创业和婚姻生活的珍贵图片。 埃隆·马斯克是风格独具的梦想家，也是眼光独到、一再开创新商业模式的企业家。从PayPal，到特斯拉、Space X、太阳城，他的创业历程中遭遇了无数棘手的事件，但是每一次突破都令全球惊艳。无论钟情于什么领域，他都可以展现出惊人的专注力。44岁的马斯克已经涉足颠覆互联网、 金融、汽车、航空以及能源业。他近乎疯狂的对科技的专注，使他成为目前最成功的连续创业者和科技创业家。 硅谷资深科技记者阿什利·万斯与马斯克超过40个小时的深度对话，记录了他从粗放贫瘠的南非到国际商业世界顶峰的不凡之旅。在三年多的时间里，作者首次深入特斯拉、Space X等公司，采访了马斯克的伙伴、员工、家人、朋友超过300人，真实地讲述了马斯克在创立、运营他那些足够改变世界的公司（包括PayPal，特斯拉，Space X和太阳城）时发生的惊人故事。同时也揭示了企业家和创业者如何专注于创业本身，并同时管理多领域公司所需要的能力、方法和经验，以及如何在与许多竞争对手交手时不断推进企业创新的步伐。 埃隆·马斯克的人生经历，和无数改变世界的伟大实业家的经历一样，是那种可以被千百次地写进小说、搬上银幕后，每一次重看都依然激动人心的，属于全人类的传奇故事。', 'https://pan.baidu.com/s/1kxNxWYTOiC5pOQoPo-5SSA', '2b7k', NULL, '财经');
INSERT INTO `books` VALUES ('1576659923803', NULL, '《出家》', '.jpg', '为养家糊口，原本打着三份零工的男人方泉受人指引成为寺庙里的广净师傅。过上了僧人生活和现实生活交替的日子，逐渐喜欢上念经、打坐的生活。直到接受一座寺庙，成为住持，方泉萌生要扩大寺庙规模的野心，然而这样，他就得真的出家。这次，方泉真的动心了。', 'https://pan.baidu.com/s/1YQy9y-ccHfNm7ee1E1CaYg', 'vdoo', NULL, '文学');
INSERT INTO `books` VALUES ('1576659948017', NULL, '《北鸢》', '.jpg', '小说起笔于商贾世家子弟卢文笙成长，收5于上世纪中叶。将波诡云谲的近现代寄予两个家族的命运沉浮，书写中国丰盛起伏的断代。人生一线，恰似风筝，命运漂浮无着，人亦应有自己的主心骨。政客、军阀、寓公、文人、商人、伶人，书中上百位经典人物，进退于沧桑。群落交织，浑然磅礴。文笙在大时代的风云中辗转历练，且行且进，最终尘埃落定。', 'https://pan.baidu.com/s/1dCIS-6Ht1gVImQbZ7rZwqw', 'o44w', NULL, '文学');
INSERT INTO `books` VALUES ('1576660205055', NULL, '《山中的糖果》', '.jpg', '《山中的糖果》通过“亲人记”“世间记”“回乡记”三个部分，集结了作者对故乡亲人、师友，对身边那些人那些事的记录与怀念。作者邓安庆生长在农村，曾游荡于多个城市之间，从事过广告策划、内刊编辑、企业培训、木材加工、图书编辑、互联网等不同职业，阅历丰富，天性敏感细腻，对乡村，对城市，对社会底层的人和事，都有独到而细致入微的体察。作者文笔细腻，语言纯净克制，用平铺直叙的白描手法，将人间烟火娓娓道来，对人物的举止投足和心理刻画生动，性格描述细致入微，使得读者如见其人，如入其境，读来亲切有加。他的文字接地气，带有温度，能够俘获人心。', 'https://pan.baidu.com/s/1nuj_ceUmqWro9cawHrOlvA', 'rarp', NULL, '文学');
INSERT INTO `books` VALUES ('1576660236903', NULL, '《慈悲》', '.jpg', '小说紧紧围绕着苯酚车间里的人和事展开，开篇就是师傅为水生申请补助，为此师傅的师弟——车间主任李铁牛得罪了宿小东。自此，宿小东和师傅的这一门派结下了几十年不能解的梁子。先是宿小东告发李铁牛和女工汪兴妹的隐秘私情，李铁牛被枪毙；接着是水生的师兄根生因为用脚关阀门，被宿小东以破坏生产罪送进监狱劳改十年；随后，水生也被宿小东调离车间去原料仓库滚了几年的原料桶。刑满释放回来的根生回到厂里，寻一条活路而不得，把自己悬挂在了废品仓库里；国有企业改革中苯酚厂成了宿小东的股份制企业，为了生计，水生不得不重返车间做了操作工，并最终下岗。', 'https://pan.baidu.com/s/19rvOuTBmFvgdf5F2RzOd0A', 'cggg', NULL, '文学');
INSERT INTO `books` VALUES ('1576660312208', NULL, '<哇，历史原来可以这样学》', '.jpg', '历史应该是有趣的，这就是它本来的面目！国家的机密为什么会和一口铜锅有关？古人为什么不养老虎当宠物？历史上的名人为什么会犯那些低级的错误？三国演义和真实的历史相差有多大？太厚道的人真的不适合做皇帝吗？哪个朝代是穿越者的理想时代？为什么在清朝写诗会有生命危险？从原始社会到清朝，你想知道的各种稀奇古怪的问题，在这本书里都能找到答案。', 'https://pan.baidu.com/s/1fZIQjXMO7jylSntR3gqwDg', 'z1po', NULL, '少儿');
INSERT INTO `books` VALUES ('1576660343828', NULL, '《哈利·波特与被诅咒的孩子》', '.jpg', '身为“大难不死的男孩‘，哈利·波特一直生活的很艰难。如今他是三个孩子的父亲、一个超负荷的魔法部职员、一个已婚男人，日子过得并不轻松，与小儿子阿不思的紧张的父子关系尤其令他头痛。 最近，魔法部收缴了一个新的时间转换器，怪事自此接连不断。先是阿不思和好友一起失踪，接着哈利的伤疤又痛了起来……哈利和他们的朋友再一次陷入危机，他们勇敢的面对挑战，找寻那个隐藏于黑暗之中的真相。', 'https://pan.baidu.com/s/15W_uTxxyVSsLIYk7l-dCmg', 'on1x', NULL, '少儿');
INSERT INTO `books` VALUES ('1576660398721', NULL, '《城南旧事》', '.jpg', 'oso9', 'https://pan.baidu.com/s/1mB1tm09Nxt5eZwtDkAJPWQ', 'oso9', NULL, '少儿');
INSERT INTO `books` VALUES ('1576660422492', NULL, '《给孩子读诗》', '.jpg', '《给孩子读诗》是2015年圣诞节上市的暖心之作。书中100首优美的诗，来自跨越3000年历史33个国度的100位诗人。其中有25首中国古诗，25首中国近现代作品，50首外国诗歌。外国诗歌由39位杰出翻译家提供译本；每一首诗均配有美丽的插图，由世界各地70位画家创作。 人类历史上创作了多少首诗？也许是数千万首？没有人知道。却有150位果麦人，用100天时间，挑出了2000首他们所喜欢的诗，并最终精选其中100首，编成了这部《给孩子读诗》。 生活不只是眼前的这些，还有诗和远方。推荐此书给每一位年轻的父母，于清晨或午后，或睡前温暖的灯光下，为你的孩子读上一首诗。书中最短的诗，花9秒可以读完；最长的那首，也只需要两分三十一秒。', 'https://pan.baidu.com/s/1sA0PDUVbjoXBdS9Xv2OUAA', 'iwoi', NULL, '少儿');
INSERT INTO `books` VALUES ('1576660468804', NULL, '《追时间的人》', '.jpg', '未来已经到来，只是分布不均。  有些人已经在利用10年后的技术和资源，而有些人还停留在10年前。  这种时间差造成的信息不对称是一个人重要的竞争砝码。  那么在现有条件下，如何缩小这种时间差，来对抗未来分布的不均？  答案是——  去聆听那些走在时间前头的人。  《追时间的人》正是这样一帮人智慧碰撞的结晶。在这里，有来自诺奖得主实验室的青年科学家卢立为你阐释最前沿的神经科学研究，有《最强大脑》的科学判官魏坤琳描绘虚拟现实的未来，有积极教养专家刘建鸿告诉你如何培养自己的成长型思维，有专攻婴儿心理发展的育儿高手陈忻教你怎么让小朋友学会情绪调整，有曾登上全球TED演讲舞台的知名媒体人安替告诉你一个“信息捕食者”的选择，有社会心理学家程乐华从“可供性”的角度解释产品设计的核心逻辑……  Edge.org创始人约翰·布罗克曼曾说，将世界上最聪明的头脑放在一个房间，会诞生什么？开智群友还不敢吹牛是世界上最聪明的头脑，但他们都是各领域成就斐然的专家，都是站在时代前端引领甚至创造未来的人。他们通过《追时间的人》，通过不同学科智慧的交叉、碰撞、思辨，展示了未来的无限可能，让你看到未来，利用未来，赢得未来。', 'https://pan.baidu.com/s/1EKgQXS2sUfaiPQ54bgptUw', '06xq', NULL, '财经');
INSERT INTO `books` VALUES ('1576660507288', NULL, '《鞋狗》', '.jpg', '在《鞋狗》中，耐克创始人菲尔·奈特亲自讲述了耐克“从0到1”的过程：作为一位美国俄勒冈州的普通人，他出于对跑步的热爱决定进入跑鞋销售领域，从50美元起步，带领一支个性古怪的“杂牌军”，游走于随时破产的悬崖峭壁，却最终缔造了一个强大的体育商业帝国，让耐克标志成为少数几个可以被全世界人毫不费力认出的商标之一。 创业过程中，合作伙伴的背叛、开户银行的翻脸、竞争对手的构陷、国家权力的紧逼；狡猾的融资技巧、粗犷放纵的企业文化、近乎不要命的扩张策略……菲尔·奈特用朴实、幽默的语言，真实袒露了一群痴迷者创业路上的挚爱、执着，与疯狂。', 'https://pan.baidu.com/s/1a0Q3qiiN3NyUKAOu_-mzUQ', 'rrrl', NULL, '财经');
INSERT INTO `books` VALUES ('1576660540033', NULL, '《如何阅读一本文学书》', '.jpg', '小时候我常跟爸爸去采蘑菇。我总是看不到蘑菇，可他会说 “那里有朵黄色的松菇”或“那边有几朵黑色的尖顶菇”。 文学教授做的事与此相似：在遍地都是蘑菇而你看不到的时候，提醒你一下。 全美最受欢迎文学公开课教授托马斯·福斯特，继《如何阅读一本小说》之后，针对小说、电影、戏剧、诗歌等各类文学作品，进行了一次新的梳理，告诉我们迈向文学探索之路，找到“蘑菇”，是多么容易且富有乐趣。 旅行的目的绝不是表面看起来那么单纯，吃一顿饭也不只是为了填饱肚子，雨雪天也不是天气预报的问题。这些文学中隐而不说的含义，借助作者阅读文学的3件法宝、20多个小诀窍、300部作品的赏析，丰富你的阅读体验。 遇到这本书之前，你并不知道你会爱上文学。', 'https://pan.baidu.com/s/1rKDtOMJp_0ROYHP168NiLw', 'dvhj', NULL, '文学');
INSERT INTO `books` VALUES ('1576660575774', NULL, '《斯通纳》', '.jpg', '本书讲述了生命中最重要的部分：爱，认同，怜悯，志业，傲骨，信任与死亡。  一个勇者有过的失败不失意的人生：即使不能拥有完美的生活，所幸追求过完整的自我。  美国，密苏里州。来自偏远农场的农家子弟、19岁的威廉·斯通纳进入州立密苏里大学学习农学。自一堂选修文学课为起点， 他的一生就此悄然改变。未来的斯通纳成为了一名大学老师，结婚、生子、教学、退休、衰老、死亡。在他生命的尽头，或许他可以坦然面对这个问题：你的一生，还要期望别的什么吗？  一部蕴含着真诚、激情与紧凑力量的小说，探究了历史洪流所忽视的人性之间的冲突、溃败与幸存，重新唤起思考每个个体独特存在的意义。作者约翰·威廉斯向世人展示了凡人中的勇者在如何生活。  约翰·威廉斯（John Edward Williams，1922—1994）：美国作家，诗人，学者。辍过学，当过电台播音，从过军。退役后入大学就读并获博士学位。  于1945年-1985年间在母校丹佛大学任教，教授大学英语及创意写作。曾编辑出版学术文集《文艺复兴时期的英语诗歌》，也创作过两本诗集。一生只写了四部小说：《惟有黑夜》（1948）、《屠夫十字镇》（1960）、《斯通纳》（1965）、《奥古斯都》（1973，本书当年获得美国国家图书奖）。', 'https://pan.baidu.com/s/1BZkcmlaDwzP1j-_GblLXUQ', 'z8af', NULL, '文学');
INSERT INTO `books` VALUES ('1576660676999', NULL, '《东京本屋》', '.jpg', '总有一盏书店的灯光，等待温暖人心。 日本人对书店有两种称呼，“书店（shoten）”和“本屋（honya）”。前者比较书面，后者则偏口语，带着一种亲切感，我们通常会在“本屋”后面加上一个“桑”。我小时候，没事儿就老往离家不远的小书店跑。母亲听到门口穿鞋的动静，问我去哪儿，我总回答：“去本屋桑。” 可是长大后，“本屋桑”渐渐变少了。他们在哪儿呢，他们还好吗？  ', 'https://pan.baidu.com/s/1pdn9zZ517txsFUt1bG9c-Q', 'voud', NULL, '社科');
INSERT INTO `books` VALUES ('1576660722934', NULL, '《优秀的绵羊》', '.jpg', '2008年，在常春藤盟校待了24年之后，耶鲁大学教授威廉·德雷谢维奇决定辞去自己的终身教职，离开这所常春藤名校。之所以这么做，是因为他感觉当前的美国精英教育已经陷入了误区，这套系统下培养出来的学生大都聪明，有天分，斗志昂扬，但同时又充满焦虑、胆小怕事，对未来一片茫然，极度缺乏目标感：他们被包裹在一个巨大的特权泡泡里，所有人都在老实巴交地向着同一个方向前进。他们非常擅于解决手头的问题，却不知道为什么要解决这些问题。 在即将辞去耶鲁教职之际，他发表了一篇文章《精英教育的劣势》来讨论这些问题。让他万万没想到的是，几周之内，它的阅读量就超过了10万次（后来的累计阅读量超过了100万次）。很明显，这篇文章触动了很多人的神经。 从那之后，他开始应邀到美国各地的大学发表演讲，跟学生们交流，回答他们的问题，也向他们请教了许多问题，并倾听和了解了他们的答案。这本书就是他对这段经历的思考和总结。 在本书当中，作者德雷谢维奇历数哈佛、耶鲁、普林斯顿等常春藤学校学生的“数宗罪”：过于自信却输不起；朋友圈同质化，固步自封；思维僵硬，与社会脱节，缺乏“常识性聪明”等，并提出“读藤校远不如读公立大学，学校更重视教育、教学方法也更灵活、更前沿”等观点， 他还进一步指出，虽然这些藤校外表上有特色，但在内里，都是“失去了灵魂的地方”。很多在藤校就读的学生没有使命和目标感，自我膨胀、自我中心、自以为是。而相比之下，那些没有这些标签的人，却能在人生道路上攻城掠地，在各方面成就自己。而有一些藤校生一辈子最大的成就，可能只是上过某藤校。 本书自2015年5月上市以来，在美国社会引起广泛争议，迅速成为《纽约时报》、《新共和》、《洛杉矶时报》等各大媒体追捧的话题，在国内也得到了南方周末、凤凰卫视、澎湃新闻网、环球时报、外滩画报等媒体的报道。', 'https://pan.baidu.com/s/1UN6fxEjtHbZsnv0G-U5vHg', 'bg6u', NULL, '社科');
INSERT INTO `books` VALUES ('1576660759107', NULL, '《大好河山可骑驴》', '.jpg', '四十九岁的陆游骑驴入剑门关； 欧阳修少白头，他早就明白，天命有多无情，人意有多卑微，声明有速朽； 苏东坡，真正旷达之刃，俯仰天地间而无愧； 张汝舟的失败，在于他看轻了李清照，她宁可面对世俗嘲骂与牢狱之灾，也要寻回自由身，勇气与决断，近于壮士断腕。 让当下的我们跟随陆游、欧阳修、苏东坡、姜夔、李清照、陈亮、朱敦儒、辛弃疾、秦观、晏几道等诸多名人的生活与故事、游历各阶世相，领略诗词背后不一样的爱恨情仇与悲欢离合，寻找失落的精致与优雅', 'https://pan.baidu.com/s/1UhCRWx1y10DftVbpB7ba_A', 'ygnk', NULL, '社科');
INSERT INTO `books` VALUES ('1576660816086', NULL, '《我们都是食人族》', '.jpg', '本书为结构主义大师列维-斯特劳斯于1989年至2000年间，在意大利《共和报》所发表的16篇专栏集结，以及发表于1952年的《被处决的圣诞老人》一文。   在这些文章里，列维-斯特劳斯立足当时社会热点，探讨了如圣诞为何“习俗”风靡全球、疯牛病蔓延广泛、女性割礼是否侵害人权、亲子关系应基于血缘还是亲缘等议题，用结构主义和人类学的眼光审视自己身处的时代和社会，反思科学与自然的关系，告诉我们“所谓复杂或先进的社会，与被误称为原始或古代的社会，两者之间的距离远较人们认知的小上许多。” 就像出版于1955年的《忧郁的热带》一样，列维-斯特劳斯文章的写作时间并不标示它过期的时间。相反，他在这些文章中对当代社会的文化反思放到现在依然成立，且无比犀利，几近预言。', 'https://pan.baidu.com/s/1N7Jne60Fw75LDw9HYRtCzA', 'h4ff', NULL, '社科');
INSERT INTO `books` VALUES ('1576660849541', NULL, '《至味在人间》', '.jpg', '大隐于市的美食，散落江湖的佳肴，东奔西走，只为吃口热乎的； 一个人的饭馆，每个人的珍珠翡翠白玉汤，南来北往，至味只在人与人之间。 《至味在人间》是一个美食爱好者的十年饮啜笔记，陈晓卿将文字化作原料，以散文为碗钵，佐以故事人情之盐，把关于食物的独家记忆蒸炒煎炸而成此书。从千里之外的江湖至味到灵魂深处的家乡味道，从四面八方觅食的扫街嘴到饮食变迁的沧海桑田，从食客厨子店小二谈到饭菜与共那一人，拂袖笑破饭桌上的假面具，平民食物也看得人口水四溅之时，归根结底直抵人心：吃什么、在哪里吃这些问题远不如“和谁吃”来得重要，人间至味往往酝酿于人与人之间，最好吃的永远是人。', 'https://pan.baidu.com/s/1KmncK9Cx4I4vuDUNyq70Og', 'ylho', NULL, '社科');
INSERT INTO `books` VALUES ('1576660898890', NULL, '《西风东土：两个世界的挫折》', '.jpg', '行万里路，写一卷书。熊培云以记者的敏锐和学者的深度，详细记录了旅日期间的所见与所思。本书不仅梳理了日本自明治以来的思想流变，同时深入探讨了当今日本的社会结构与社会问题。有关“日本是中国之药”的结论，注定这不只是一本日本之书，更是一本中国之书。 日本是中国的一味药。至于药性如何，很大程度上取决于中国对日本的态度。如果认真学习日本的社会建设，日本将是一味良药，可以医治中国“弱社会”与“强个人”的病灶。如果只是看到日本在向右转、安倍在参拜靖国神社、右翼在街头举旗叫喊，从而继续以民族主义、国家主义来强化中国“强国家-弱社会”的结构，则可能适得其反。倘若良药未成反自制苦果，将是一味毒药。 我之所以仍然热衷于寻访一些我所喜爱的历史人物，固然是因为在他们身上我可以找到精神与思想上的共鸣，此外还有对历史木已成舟的某种伤怀。我相信这种伤怀不仅是基于古老的悲剧意识，更是我对所有尼布尔意义上的光明之子的深切回望。我想从黑暗年代里寻回一点光亮，希望那些曾经照亮过去的人也将照亮未来。 大自然馈赠人类太多的恩情。它给了人类免费的死亡，人类却没有耐心等待这份施舍，所以不仅发明了断头台并给刽子手发工资，还制造战争把无数血肉之躯送上战场。然而，我还是要感谢大自然有关生与死的无私的施舍，它教会我们要节制贪欲。因为有了这份免费的死亡，我们可以在有生之年积极行善，至于除恶的事情交给大自然就好了。 好的观念将人带上康庄大道，坏的观念让人万劫不复。当一个国家被一种坏的观念所笼罩，这个国家也就开始了它的灭顶之灾。日本当年就是这样一步步从“明治维新”滑向“一亿总玉碎”之疯狂的。在这里，“意义猛于虎”。许多人受意义的激情驱使，最终又被意义吞没。 人类尚未形成。虽然我们名义上同属人类这一物种，并置身于所谓的人类文明之中，但人类从来没有真正生活在同一个世界里。误解与被误解，施虐与受虐，征服与臣服，同胞与异类，只要“我者-他者”这个模式一直存在，人类就永远有两个世界的挫折。', 'https://pan.baidu.com/s/13bgImuiFe7UJsOh0VoGhBg', 'mmg3', NULL, '社科');
INSERT INTO `books` VALUES ('1576661053221', NULL, '《清明上河图密码3》', '.jpg', '全图824位人物，每个人都有名有姓，佯装、埋伏在舟船车轿、酒肆楼阁中。看似太平盛世，其实杀机四伏。翻开本书，在小贩的叫卖声中，金、辽、西夏、高丽等国的间谍、刺客已经潜伏入画，824个人物逐一复活，只待客船穿过虹桥，就一起拉开北宋帝国覆灭的序幕。  《清明上河图》描绘人物824位，牲畜60多匹，木船20多只……5米多长的画卷，画尽了汴河上下十里繁华，乃至整个北宋近两百年的文明与富饶。  然而，这幅歌颂太平盛世的传世名画，画完不久金兵就大举入侵，杀人焚城，汴京城内大火三日不熄，北宋繁华一夕扫尽。  这是北宋帝国的盛世绝影，在小贩的叫卖声中，金、辽、西夏、高丽等国的间谍和刺客已经潜伏入画，死亡的气息弥漫在汴河的波光云影中：  画面正中央，舟楫相连的汴河上，一艘看似普通的客船正要穿过虹桥，而由于来不及降下桅杆，船似乎就要撞上虹桥，船上手忙脚乱，岸边大呼小叫，一片混乱之中，贼影闪过，一阵烟雾袭来，待到烟雾散去， 客船上竟出现了二十四具尸体，所有人都目瞪口呆……  翻开本书，一幅旷世奇局徐徐展开，错综复杂，丝丝入扣，824个人物逐一复活，为你讲述《清明上河图》中埋藏的帝国秘密。', 'https://pan.baidu.com/s/1pd0x26bRly8NFLF3_xMLbw', 'bzip', NULL, '科技');
INSERT INTO `books` VALUES ('1576661118341', NULL, '《魔兽世界：编年史》', '.jpg', '历时二十年呕心创作，全面追述了艾泽拉斯与魔兽宇宙的历史，《魔兽世界》无可争议的史料文本，官方首发三册全收录！  暴雪官方历时二十年编纂而成的史料！  波澜壮阔的魔兽宇宙，奇幻世界的史诗巨著。  从创世之初到暮光审判，带你重温过往的游戏时光。  联盟与部落的勇士们，你们准备好了吗？', 'https://pan.baidu.com/s/1yvw5mD1zKIl1vZnoHQEz8g', 'cjp2', NULL, '科技');
INSERT INTO `books` VALUES ('1576661202858', NULL, '《克苏鲁神话》', '.jpg', '《克苏鲁神话》被誉为20世纪最伟大、最具影响力的恐怖小说体系，作者是H.P.洛夫克拉夫特——或者“爱手艺”。 假设你的脚边有一只蚂蚁在爬，你不会在意有没有踩死它，因为它太渺小了，是死还是活，对你来说没有分毫影响。在“克苏鲁神话”中描述的远古邪神的眼中，人类就是那只蚂蚁。 洛夫克拉夫特所倡导的“宇宙主义”，即人类远非世界的主宰者，在尚未探索的未知宇宙中，隐藏着超乎想象、不可名状的恐怖真相，只是见上一眼就能让人陷入疯狂或者死亡。正如作者本人所述：“人类最古老、最强烈的情感是恐惧；而最古老、最强烈的恐惧，是对未知的恐惧”。 本书收录了“克苏鲁神话”中极具代表性的10部中短篇小说，包括《克苏鲁的呼唤》《大衮》《黑暗中的低语》《敦威治恐怖事件》等，随手翻开一个故事，唤起你内心深处对黑暗的恐惧。 “在拉莱耶他的宫殿里，沉睡的克苏鲁等待做梦。” 繁星已经抵达特定的位置，旧日支配者即将重现人间。', 'https://pan.baidu.com/s/1YQwvBK7bBt11dDZVHjSa7Q', 'ycpk', NULL, '科技');
INSERT INTO `books` VALUES ('1576661255046', NULL, '《七堂极简物理课》', '.jpg', '在本书中，意大利物理学家卡洛·罗韦利，用诗一般简洁优美的语言，向读者讲述了20世纪以来现代物理学的伟大理论发现。相对论、量子力学、宇宙的结构、空间的颗粒、时间的本质……在这七堂简单明了的物理课里，作者为我们打开了一个奇妙的物理学世界，也带我们轻盈地飞过重重障碍，窥见科学 的深刻与美丽。没有繁琐的方程，只有诗意的讲述，即使没有科学背景的人也能轻松读懂。', 'https://pan.baidu.com/s/1Z1dA1RzHkXRAHOiR1M7vug', 'bzip', NULL, '科技');
INSERT INTO `books` VALUES ('1576661311186', NULL, '《屠夫十字镇》', '.jpg', '《屠夫十字镇》讲述的是一个在1873年从哈佛辍学的年轻人安德鲁斯，受爱默生和梭罗等人的自然观念影响，带着寻找美好、希望和活力的冲动，来到屠夫十字镇，并跟随猎人米勒和其他两人（剥皮人施耐德和随营干杂活的查理·霍格）进入科罗拉多山区猎捕野牛。他们各自带着不同的目的和想法，踏上了这次前途未卜的旅程。他们经历重重困难，还丢掉了一个人的性命，才重回屠夫十字镇，但这里却发生了翻天覆地的变化……  ', 'https://pan.baidu.com/s/1XhsITRcTGxe_vuMOlK6qAQ', 'z390', NULL, '少儿');
INSERT INTO `books` VALUES ('1576661413880', NULL, '《极简宇宙史》', '.jpg', '我们的存在的确让太阳系与众不同。夏夜，你躺在沙滩上，仰望夜空。一颗小小的流星安静滑过，还来不及许愿，不可思议的事情发生了：你一下子穿越五十亿年，走进时光的旅行……   霍金亲传弟子、物理学博士克里斯托弗·加尔法德带领我们踏上一场关于宇宙的过去、现在和未来的惊奇之旅。不需要图表和方程式，只需凭着奇诡的想象，我们就可走向衰亡的太阳表面，飞越遥远的星系，感受来自黑洞的死亡魅力……你可以轻松读懂时至今日的宇宙神奇，继续探究关于上帝的存在、时间的起源以及人类的未来。  ', 'https://pan.baidu.com/s/1I_OQmc3ldY8meILqw8jsZA', '9lnr', NULL, '财经');
INSERT INTO `books` VALUES ('1576661450121', NULL, '《不正常人类症候群》', '.jpg', '不同宇宙不同时空之中，总有这样一些人，他们特立独行、和周遭格格不入，像一座岛一般孤独：可以预知却无力改变未来的孩子、失去老伴儿后学讲猫语的奶奶、和宫女真心相爱的王妃、世界毁灭后陷入休眠的收信人、遇到斯芬克斯的胖公主、驻守宇宙灯塔的瞭望员、天生目盲的诗人、虚拟手机恋爱程序、成为食材的地球人类…… 可是，选择承认自己的特别，一定得以孤独为代价吗？在书里，时间就像一座庞大的迷宫，只要每个人都握紧手中记忆的线团，就永远不会和彼此走散。再特立独行的人，也有知心同类；再离奇的命运，也不会是独白；和别人不一样，也可以不孤独。 《不正常人类症候群》是「ONE·一个」人气签约作家张寒寺的重磅新作，这本暗黑治愈故事集收录了28个脑洞大开、猜不中结局的故事，首度披露诗人“莱特昂·布兰朵”伤感身世，更回应读者呼声，精心整理呈现了诗集《来自波希米亚》的原貌。', 'https://pan.baidu.com/s/1lfxXi0TzsFlTr0U5ZzTjlw', '777n', NULL, '少儿');
INSERT INTO `books` VALUES ('1576661497146', NULL, '《奇爱博士》', '.jpg', '《奇爱博士》是世界范围内最具知名度的黑色幽默小说之一。著名已故电影导演斯坦利·库布里克就是本书的忠实读者，在买下小说的电影版权后，库布里克亲自改编并执导了这部作品的电影版，使《奇爱博士》成为了冷战时期最为经典的黑色幽默片，并与库布里克后来执导的电影《2001太空漫游》和《发条橙》一起被评论界合称为“未来三部曲”。 美国空军将领昆腾将军怀疑苏联人的共产主义思想正在通过各种方式“荼毒”善良天真的美国人民。利用美国空军作战计划中的漏洞，昆腾将军成功地避开了美国政府，在美国总统和美国人民毫不知情的情况下，将携带着大量核武器的飞行部队秘密派往苏联境内实施毁灭性轰炸。 等到美国总统和苏联领导人发现事态的严重性时，似乎为时已晚，不得不通过电话在一起商讨避免核战的方案，此时却又得知了一个坏消息：一旦苏联境内遭到攻击，自卫系统将会自动启动“世界末日装置”，威力足以摧毁地球……美苏两国领导人只有两个小时用来化解这次危机，否则就会迎来世界末日，你，我，以及每一个人，都将被毁灭……', 'https://pan.baidu.com/s/1zhtsM5X80iJlYQbvqad7ww', 'howm', NULL, '科技');
INSERT INTO `books` VALUES ('1577101678231', NULL, '测试上传', '.jpg', '1234', '1234', '1234', NULL, '财经');
INSERT INTO `books` VALUES ('1577505588280', NULL, '12.28', '.jpg', '1234', 'zhangsan', 'asdf', NULL, '财经');

-- ----------------------------
-- Table structure for commit
-- ----------------------------
DROP TABLE IF EXISTS `commit`;
CREATE TABLE `commit`  (
  `username` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `detail` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of commit
-- ----------------------------
INSERT INTO `commit` VALUES ('zcq1933', '1576060633451', '这本书不错', '1575332855994');
INSERT INTO `commit` VALUES ('zcq1933', '1576061161383', '评论一下', '1575332855994');
INSERT INTO `commit` VALUES ('zcq1933', '1576061657076', '1234234', '1575505549175');
INSERT INTO `commit` VALUES ('zcq1933', '1576061774935', '冒个泡', '1576028128118');
INSERT INTO `commit` VALUES ('zcq1933', '1576109773698', '评论一下', '1576028128118');
INSERT INTO `commit` VALUES ('zcq1933', '1576112934327', '1234213412342134234214123423', '1576028128118');
INSERT INTO `commit` VALUES ('zcq1933', '1576113260044', '123', '1575881334002');
INSERT INTO `commit` VALUES ('zcq1933', '1576118286395', '测试评论', '1575881307978');
INSERT INTO `commit` VALUES ('zcq1933', '1576118787580', '再发一条评论', '1575881307978');
INSERT INTO `commit` VALUES ('zcq1933', '1576118857420', '12341234', '1575881361944');
INSERT INTO `commit` VALUES ('zcq1933', '1576118946295', '实现评论了', '1575881361944');
INSERT INTO `commit` VALUES ('zcq1933', '1576119064938', '提交啊', '1575881361944');
INSERT INTO `commit` VALUES ('zcq1933', '1576142791321', '支持一下', '1576142464904');
INSERT INTO `commit` VALUES ('zcq1933', '1576464664546', '我是傻瓜', '1576142343420');
INSERT INTO `commit` VALUES ('2017011812', '1576476313842', 'guanyuanbin', '1576143359493');
INSERT INTO `commit` VALUES ('zcq1933', '1576488576566', '官源斌傻瓜', '1576142343420');
INSERT INTO `commit` VALUES ('zcq1933', '1576488807464', '12341234', '1576028569725');
INSERT INTO `commit` VALUES ('zcq1933', '1576573951220', 'qwerqewr', '1575362022112');
INSERT INTO `commit` VALUES ('false', '1576715133822', '评论', '1576660575774');
INSERT INTO `commit` VALUES ('zcq1933', '1576715148910', '评论', '1576661118341');
INSERT INTO `commit` VALUES ('zcq1933', '1576715159098', '123', '1576661118341');
INSERT INTO `commit` VALUES ('zcq1933', '1576717016384', '评论', '1576660722934');
INSERT INTO `commit` VALUES ('zcq1933', '1576718089324', '评论23112342134', '1576661202858');
INSERT INTO `commit` VALUES ('2017011812', '1577093155522', '123', '1576661450121');
INSERT INTO `commit` VALUES ('2017011812', '1577095336496', '123', '1576661311186');
INSERT INTO `commit` VALUES ('2017011812', '1577095404208', '测试评论', '1576661497146');
INSERT INTO `commit` VALUES ('2017011812', '1577095414937', '测试评论', '1576661497146');
INSERT INTO `commit` VALUES ('2017011812', '1577095415731', '测试评论', '1576661497146');
INSERT INTO `commit` VALUES ('2017011812', '1577095555394', '测试评论', '1576660722934');
INSERT INTO `commit` VALUES ('2017011812', '1577095713492', '', '1576660722934');
INSERT INTO `commit` VALUES ('2017011812', '1577095717553', '12341234', '1576660722934');
INSERT INTO `commit` VALUES ('2017011812', '1577095728803', '测试', '1576661053221');
INSERT INTO `commit` VALUES ('2017011812', '1577097903055', '哈哈', '1576661497146');
INSERT INTO `commit` VALUES ('2017011812', '1577099665962', '123', '1576661413880');
INSERT INTO `commit` VALUES ('2017011812', '1577099674725', '12341234', '1576661311186');
INSERT INTO `commit` VALUES ('zcq1933', '1577099714008', '阿斯蒂芬', '1576661413880');
INSERT INTO `commit` VALUES ('zcq1933', '1577505273095', '评论', '1576660849541');
INSERT INTO `commit` VALUES ('新用户3', '1577506771572', '新用户3测试评论', '1576661255046');
INSERT INTO `commit` VALUES ('zcq1933', '1577696447592', '12342341', '1576661053221');

-- ----------------------------
-- Table structure for download
-- ----------------------------
DROP TABLE IF EXISTS `download`;
CREATE TABLE `download`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bookId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `downloadTimes` int(255) NULL DEFAULT NULL,
  `bookname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  INDEX `bookId`(`bookId`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of download
-- ----------------------------
INSERT INTO `download` VALUES ('新用户1', '1576661413880', NULL, '《极简宇宙史》');
INSERT INTO `download` VALUES ('zcq1933', '1575880916953', NULL, '《彼得林奇的成功投资》');
INSERT INTO `download` VALUES ('zcq1933', '1576142888226', NULL, '《围城》');
INSERT INTO `download` VALUES ('新用户1', '1576660816086', NULL, '《我们都是食人族》');
INSERT INTO `download` VALUES ('新用户1', '1576661255046', NULL, '《七堂极简物理课》');
INSERT INTO `download` VALUES ('新用户1', '1576661311186', NULL, '《屠夫十字镇》');
INSERT INTO `download` VALUES ('新用户5', '1577101678231', NULL, '测试上传');
INSERT INTO `download` VALUES ('新用户5', '1577101678231', NULL, '测试上传');
INSERT INTO `download` VALUES ('新用户3', '1576661202858', NULL, '《克苏鲁神话》');
INSERT INTO `download` VALUES ('zcq1933', '1576660849541', NULL, '《至味在人间》');
INSERT INTO `download` VALUES ('zcq1933', '1576660816086', NULL, '《我们都是食人族》');
INSERT INTO `download` VALUES ('2017011812', '1576659689077', NULL, '《硅谷钢铁侠》');
INSERT INTO `download` VALUES ('2017011812', '1576661413880', NULL, '《极简宇宙史》');
INSERT INTO `download` VALUES ('zcq1933', '1576660507288', NULL, '《鞋狗》');
INSERT INTO `download` VALUES ('zcq1933', '1576660759107', NULL, '《大好河山可骑驴》');
INSERT INTO `download` VALUES ('zcq1933', '1576661202858', NULL, '《克苏鲁神话》');
INSERT INTO `download` VALUES ('zcq1933', '1576660816086', NULL, '《我们都是食人族》');
INSERT INTO `download` VALUES ('zcq1933', '1576661311186', NULL, '《屠夫十字镇》');
INSERT INTO `download` VALUES ('zcq1933', '1576660236903', NULL, '《慈悲》');
INSERT INTO `download` VALUES ('zcq1933', '1575880671483', NULL, '《货币战争2：金权天下》');
INSERT INTO `download` VALUES ('zcq1933', '1575881307978', NULL, '《银河英雄传说》');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (' ', '9f1d7cd42db207f78f9ab18c0e213049', '1933748107@qq.com');
INSERT INTO `user` VALUES ('19832117212', 'dcf4b8b63cb9b28d02e012386d9f6951', 'undefined');
INSERT INTO `user` VALUES ('新用户2', 'dcf4b8b63cb9b28d02e012386d9f6951', 'undefined');
INSERT INTO `user` VALUES ('zcq1933', '9f1d7cd42db207f78f9ab18c0e213049', 'undefined');
INSERT INTO `user` VALUES ('gyb', 'dcf4b8b63cb9b28d02e012386d9f6951', '1933748107@qq.com');
INSERT INTO `user` VALUES ('好哥哥', 'dcef42a44ec675c886c2ccac117bd307', 'undefined');
INSERT INTO `user` VALUES ('2017011812', 'dcf4b8b63cb9b28d02e012386d9f6951', 'undefined');
INSERT INTO `user` VALUES ('123', 'dcf4b8b63cb9b28d02e012386d9f6951', '1933748107@qq.com');
INSERT INTO `user` VALUES ('新用户5', 'dcf4b8b63cb9b28d02e012386d9f6951', '1933748107@qq.com');
INSERT INTO `user` VALUES ('新用户1', 'dcf4b8b63cb9b28d02e012386d9f6951', '1933748107@qq.com');

SET FOREIGN_KEY_CHECKS = 1;