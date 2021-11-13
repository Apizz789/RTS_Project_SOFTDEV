let V = 218;

function dijkstra(graph, src)
{
    let cost = new Array(V);
    let distance = new Array(V);
    let pred = new Array(V);
    let visited = new Array(V);
    let nextnode = 0;
    let j = 0;
    let srcstation = 0;


    for (let i=0 ; i<V ; i++)
    {
        if (src == nameofgraph[i])
        {
            srcstation = i;
            break;
        }
    }
    
    // document.write(srcstation);


    for (let i=0 ; i<V ; i++)
    {
        cost[i] = new Array(V);
    }
    for (let i=0 ; i<V ; i++)
    {
        for (let j=0 ; j<V ; j++)
        {
            if (graph[i][j]==0)
                cost[i][j] = Number.MAX_VALUE;
            else
                cost[i][j] = graph[i][j];
        }
    }
    for (let i=0 ; i<V ; i++)
    {
        distance[i] = cost[srcstation][i];
        pred[i] = srcstation;
        visited[i] = 0;
    }
    distance[srcstation] = 0;
    visited[srcstation] = 1;
    let count = 1;
    while (count<V-1)
    {
        let minDistance = Number.MAX_VALUE;

        for (let i=0 ; i<V ; i++)
        {
            if (distance[i]<minDistance && !visited[i])
            {
                minDistance = distance[i];
                nextnode = i;
            }
        }

        visited[nextnode] = 1;
        for (let i=0 ; i<V ; i++)
        {
            if (!visited[i])
            {
                if (minDistance+cost[nextnode][i] < distance[i])
                {
                    distance[i] = minDistance + cost[nextnode][i];
                    pred[i] = nextnode;
                }
            }
        }
        count++;
    }

    let tmp = "";
    let dest = "";
    let result = "";
    for (let i=0 ; i<V ; i++)
    {
        if(i != srcstation)
        {
            // document.write("<br>Distance of node " + i + " = " + distance[i]);
            
            lst[i] = lst[i].concat("<br>Path = ");
            lst[i] = lst[i].concat(nameofgraph[i]);
            j = i;
            do
            {
                j = pred[j];
                lst[i] = lst[i].concat("<-");
                lst[i] = lst[i].concat(nameofgraph[j]);
            }
            while (j != srcstation);

            if (i == nameofgraph.indexOf(deststation))
            {
                document.write("<br>The Shortest path from station " + nameofgraph[srcstation] + " to " + deststation + " station is : ");
                document.write(lst[i]);
                break;
            }
        }
    }

    
}

// let graph = [[0, 10, 0, 30, 100],
// [10, 0, 50, 0, 0],
// [0, 50, 0, 20, 10],
// [30, 0, 20, 0, 60],
// [100, 0, 10, 60, 0]];


let graph = Array(218).fill().map(() => Array(218).fill(0));
graph[0][1] = 1;  //N01
graph[0][215] = 1;
graph[1][0] = 1;  //N02
graph[1][2] = 1;
graph[2][1] = 1;  //N03
graph[2][3] = 1;
graph[3][2] = 1;  //N04
graph[3][4] = 1;
graph[4][3] = 1;  //N05
graph[4][5] = 1;
graph[5][4] = 1;  //N06
graph[5][6] = 1;
graph[6][5] = 1;  //N07
graph[6][7] = 1;
graph[7][6] = 1;  //N08
graph[7][8] = 1;
graph[8][7] = 1;  //N09
graph[8][9] = 1;
graph[9][8] = 1;  //N10
graph[9][10] = 1;
graph[10][9] = 1;  //N11
graph[10][11] = 1;
graph[11][10] = 1;  //N12
graph[11][12] = 1;
graph[12][11] = 1;  //N13
graph[12][13] = 1;
graph[13][12] = 1;  //N14
graph[13][14] = 1;
graph[14][13] = 1;  //N15
graph[14][15] = 1;
graph[15][14] = 1;  //N16
graph[15][16] = 1;
graph[16][15] = 1;  //N17
graph[16][17] = 1;
graph[17][16] = 1;  //N18
graph[17][18] = 1;
graph[18][17] = 1;  //N19
graph[18][19] = 1;
graph[19][18] = 1;  //N20
graph[19][20] = 1;
graph[20][19] = 1;  //N21
graph[20][21] = 1;
graph[21][20] = 1;  //N22
graph[21][22] = 1;
graph[22][21] = 1;  //N23
graph[22][23] = 1;
graph[23][22] = 1;  //N24
graph[24][25] = 1;  //E01
graph[25][24] = 1;  //E02
graph[25][26] = 1;
graph[26][25] = 1;  //E03
graph[26][27] = 1;
graph[27][26] = 1;
graph[27][28] = 1; //E4
graph[28][27] = 1;
graph[28][29] = 1; //E5
graph[29][28] = 1;
graph[29][30] = 1; //E6
graph[30][29] = 1;
graph[30][31] = 1; //E7
graph[31][30] = 1;
graph[31][32] = 1; //E8
graph[32][31] = 1;
graph[32][33] = 1; //E9
graph[33][32] = 1;
graph[33][34] = 1; //E10
graph[34][33] = 1;
graph[34][35] = 1; //E11
graph[35][34] = 1;
graph[35][36] = 1; //E12
graph[36][35] = 1;
graph[36][37] = 1; //E13
graph[37][36] = 1;
graph[37][38] = 1; //E14
graph[38][37] = 1;
graph[38][39] = 1; //E15
graph[39][38] = 1;
graph[39][40] = 1; //E16
graph[40][39] = 1;
graph[40][41] = 1; //E17
graph[41][40] = 1;
graph[41][42] = 1; //E18
graph[42][41] = 1;
graph[42][43] = 1; //E19
graph[43][42] = 1;
graph[43][44] = 1; //E20
graph[44][43] = 1;
graph[44][45] = 1; //E21
graph[45][44] = 1;
graph[45][46] = 1; //E22
graph[46][45] = 1; //E23
graph[47][48] = 1;
graph[48][47] = 1;
graph[48][49] = 1;
graph[49][48] = 1;
graph[49][50] = 1;
graph[50][49] = 1;
graph[50][51] = 1;
graph[51][50] = 1;
graph[51][52] = 1;
graph[52][51] = 1;
graph[52][53] = 1;
graph[53][52] = 1;
graph[53][54] = 1;
graph[54][53] = 1;
graph[54][55] = 1;
graph[55][54] = 1;
graph[55][56] = 1;
graph[56][55] = 1;
graph[56][57] = 1;
graph[57][56] = 1;
graph[57][58] = 1;
graph[58][57] = 1;
graph[59][60] = 1;
graph[60][59] = 1;
graph[60][61] = 1;
graph[61][60] = 1;
graph[61][62] = 1;
graph[62][61] = 1;
graph[62][63] = 1;
graph[63][62] = 1;
graph[63][64] = 1;
graph[64][63] = 1;
graph[64][65] = 1;
graph[65][64] = 1;
graph[65][66] = 1;
graph[66][65] = 1;
graph[66][67] = 1;
graph[67][66] = 1;
graph[67][68] = 1;
graph[68][67] = 1;
graph[68][69] = 1;
graph[69][68] = 1;
graph[69][70] = 1;
graph[70][69] = 1;
graph[70][71] = 1;
graph[71][70] = 1;
graph[71][72] = 1;
graph[72][71] = 1;
graph[72][73] = 1;
graph[73][72] = 1;
graph[73][74] = 1;
graph[74][73] = 1;
graph[74][75] = 1;
graph[75][74] = 1;
graph[75][76] = 1;
graph[76][75] = 1;
graph[76][77] = 1;
graph[77][76] = 1;
graph[77][78] = 1;
graph[78][77] = 1;
graph[78][79] = 1;
graph[79][78] = 1;
graph[79][80] = 1;
graph[80][79] = 1;
graph[80][81] = 1;
graph[81][80] = 1;
graph[81][82] = 1;
graph[82][81] = 1;
graph[82][83] = 1;
graph[83][82] = 1;
graph[84][85] = 1;
graph[85][84] = 1;
graph[85][86] = 1;
graph[86][85] = 1;
graph[86][87] = 1;
graph[87][86] = 1;
graph[87][88] = 1;
graph[88][87] = 1;
graph[88][89] = 1;
graph[89][88] = 1;
graph[89][90] = 1;
graph[90][89] = 1;
graph[90][91] = 1;
graph[91][90] = 1;
graph[91][92] = 1;
graph[92][91] = 1;
graph[92][93] = 1;
graph[93][92] = 1;
graph[93][94] = 1;
graph[94][93] = 1;
graph[94][95] = 1;
graph[95][94] = 1;
graph[95][96] = 1;
graph[96][95] = 1;
graph[96][97] = 1;
graph[97][96] = 1;
graph[97][98] = 1;
graph[98][97] = 1;
graph[98][99] = 1;
graph[99][98] = 1;
graph[99][100] = 1;
graph[100][99] = 1;
graph[100][101] = 1;
graph[101][100] = 1;
graph[101][102] = 1;
graph[102][101] = 1;
graph[102][103] = 1;
graph[103][102] = 1;
graph[103][104] = 1;
graph[104][103] = 1;
graph[104][105] = 1;
graph[105][104] = 1;
graph[105][106] = 1;
graph[106][105] = 1;
graph[106][107] = 1;
graph[107][106] = 1;
graph[107][108] = 1;
graph[108][107] = 1;
graph[108][109] = 1;
graph[109][108] = 1;
graph[109][110] = 1;
graph[110][109] = 1;
graph[110][111] = 1;
graph[111][110] = 1;
graph[111][112] = 1;
graph[112][111] = 1;
graph[112][113] = 1;
graph[113][112] = 1;
graph[114][115] = 1;
graph[115][114] = 1;
graph[115][116] = 1;
graph[116][115] = 1;
graph[116][117] = 1;
graph[117][116] = 1;
graph[117][118] = 1;
graph[118][117] = 1;
graph[118][119] = 1;
graph[119][118] = 1;
graph[119][120] = 1;
graph[120][119] = 1;
graph[120][121] = 1;
graph[121][120] = 1;
graph[121][122] = 1;
graph[122][121] = 1;
graph[122][123] = 1;
graph[123][122] = 1;
graph[123][124] = 1;
graph[124][123] = 1;
graph[124][125] = 1;
graph[125][124] = 1;
graph[125][126] = 1;
graph[126][125] = 1;
graph[126][127] = 1;
graph[127][126] = 1;
graph[127][128] = 1;
graph[128][127] = 1;
graph[128][129] = 1;
graph[129][128] = 1;
graph[129][130] = 1;
graph[130][129] = 1;
graph[130][131] = 1;
graph[131][130] = 1;
graph[131][132] = 1;
graph[132][131] = 1;
graph[132][133] = 1;
graph[133][132] = 1;
graph[133][134] = 1;
graph[134][133] = 1;
graph[134][135] = 1;
graph[135][134] = 1;
graph[135][136] = 1;
graph[136][135] = 1;
graph[136][137] = 1;
graph[137][136] = 1;
graph[137][138] = 1;
graph[138][137] = 1;
graph[138][139] = 1;
graph[139][138] = 1;
graph[139][140] = 1;
graph[140][139] = 1;
graph[140][141] = 1;
graph[141][140] = 1;
graph[141][142] = 1;
graph[142][141] = 1;
graph[142][143] = 1;
graph[143][142] = 1;
graph[143][144] = 1;
graph[144][143] = 1;
graph[145][146] = 1;
graph[146][145] = 1;
graph[146][147] = 1;
graph[147][146] = 1;
graph[147][148] = 1;
graph[148][147] = 1;
graph[148][149] = 1;
graph[149][148] = 1;
graph[149][150] = 1;
graph[150][149] = 1;
graph[151][152] = 1;
graph[152][151] = 1;
graph[152][153] = 1;
graph[153][152] = 1;
graph[153][154] = 1;
graph[154][153] = 1;
graph[154][155] = 1;
graph[155][154] = 1;
graph[155][156] = 1;
graph[156][155] = 1;
graph[156][157] = 1;
graph[157][156] = 1;
graph[157][158] = 1;
graph[158][157] = 1;
graph[158][159] = 1;
graph[159][158] = 1;
graph[159][160] = 1;
graph[160][159] = 1;
graph[160][161] = 1;
graph[161][160] = 1;
graph[161][162] = 1;
graph[162][161] = 1;
graph[162][163] = 1;
graph[163][162] = 1;
graph[163][164] = 1;
graph[164][163] = 1;
graph[164][165] = 1;
graph[165][164] = 1;
graph[165][166] = 1;
graph[166][165] = 1;
graph[166][167] = 1;
graph[167][166] = 1;
graph[167][168] = 1;
graph[168][167] = 1;
graph[168][169] = 1;
graph[169][168] = 1;
graph[170][171] = 1;
graph[171][170] = 1;
graph[171][172] = 1;
graph[172][171] = 1;
graph[172][173] = 1;
graph[173][172] = 1;
graph[173][174] = 1;
graph[174][173] = 1;
graph[174][175] = 1;
graph[175][174] = 1;
graph[175][176] = 1;
graph[176][175] = 1;
graph[176][177] = 1;
graph[177][176] = 1;
graph[177][178] = 1;
graph[178][177] = 1;
graph[179][180] = 1;
graph[180][179] = 1;
graph[180][181] = 1;
graph[181][180] = 1;
graph[181][182] = 1;
graph[182][181] = 1;
graph[182][183] = 1;
graph[183][182] = 1;
graph[183][184] = 1;
graph[184][183] = 1;
graph[184][185] = 1;
graph[185][184] = 1;
graph[185][186] = 1;
graph[186][185] = 1;
graph[186][187] = 1;
graph[187][186] = 1;
graph[187][188] = 1;
graph[188][187] = 1;
graph[188][189] = 1;
graph[189][188] = 1;
graph[189][190] = 1;
graph[190][189] = 1;
graph[190][191] = 1;
graph[191][190] = 1;
graph[191][192] = 1;
graph[192][191] = 1;
graph[192][193] = 1;
graph[193][192] = 1;
graph[193][194] = 1;
graph[194][193] = 1;
graph[194][195] = 1;
graph[195][194] = 1;
graph[195][196] = 1;
graph[196][195] = 1;
graph[196][197] = 1;
graph[197][196] = 1;
graph[197][198] = 1;
graph[198][197] = 1;
graph[198][199] = 1;
graph[199][198] = 1;
graph[199][200] = 1;
graph[200][199] = 1;
graph[200][201] = 1;
graph[201][200] = 1;
graph[201][202] = 1;
graph[202][201] = 1;
graph[202][203] = 1;
graph[203][202] = 1;
graph[203][204] = 1;
graph[204][203] = 1;
graph[204][205] = 1;
graph[205][204] = 1;
graph[205][206] = 1;
graph[206][205] = 1;
graph[206][207] = 1;
graph[207][206] = 1;
graph[207][208] = 1;
graph[208][207] = 1;
graph[208][209] = 1;
graph[209][208] = 1;
graph[209][210] = 1;
graph[210][209] = 1;






// CEN, W1, BL01-L
let nameofgraph = ['N01','N02','N03','N04','N05','N06','N07','N08','N09','N10','N11'
                  ,'N12','N13','N14','N15','N16','N17','N18','N19','N20'
                  ,'N21','N22','N23','N24','E01','E02','E03','E04','E05','E06'
                  ,'E07','E08','E09','E10','E11','E12','E13','E14','E15','E16','E17'
                  ,'E18','E19','E20','E21','E22','E23','S1','S2','S3','S4','S5'
                  ,'S6','S7','S8','S9','S10','S11','S12','YLEX01','YLEX02','YL01'
                  ,'YL02','YL03','YL04','YL05','YL06','YL07','YL08','YL09','YL10'
                  ,'YL11','YL12','YL13','YL14','YL15','YL16','YL17','YL18','YL19'
                  ,'YL20','YL21','YL22','YL23','PK01','PK02','PK03','PK04','PK05'
                  ,'PK06','PK07','PK08','PK09','PK10','PK11','PK12','PK13','PK14'
                  ,'PK15','PK16','PK17','PK18','PK19','PK20','PK21','PK22','PK23'
                  ,'PK24','PK25','PK26','PK27','PK28','PK29','PK30','BL02','BL03'
                  ,'BL04','BL05','BL06','BL07','BL08','BL09','BL10','BL11','BL12'
                  ,'BL13','BL14','BL15','BL16','BL17','BL18','BL19','BL20','BL21'
                  ,'BL22','BL23','BL24','BL25','BL26','BL27','BL28','BL29','BL30'
                  ,'BL31','BL32','BL33','BL34','BL35','BL36','BL37','BL38','OR2'
                  ,'OR3','OR4','OR5','OR6','OR7','OR8','OR9','OR10','OR11','OR12'
                  ,'OR13','OR14','OR15','OR16','OR17','OR18','OR19','OR20','OR21'
                  ,'OR22','OR23','OR24','OR25','OR26','OR27','OR28','OR29','PP02'
                  ,'PP03','PP04','PP05','PP06','PP07','PP08','PP09','PP10','PP11'
                  ,'PP12','PP13','PP14','PP15','PP16','PP17','PP18','PP19','PP20'
                  ,'PP21','PP22','PP23','PP24','PP25','PP26','PP27','PP28','PP29'
                  ,'PP30','PP31','PP32','PP33','G1','G2','G3','G4','CEN','W1','BL01-L'];

let x = nameofgraph.length;
document.write(x);
document.write(nameofgraph[46]);


let deststation = 'N17';

// let nameofgraph = ['a','b','c','d','e'];


let lst = new Array(V);
for (let i=0 ; i<V ; i++)
{
    lst[i] = "";
}

dijkstra(graph, 'N1');
