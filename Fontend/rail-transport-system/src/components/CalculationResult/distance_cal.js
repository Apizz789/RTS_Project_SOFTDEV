import { func } from "prop-types";
import React from 'react';

let V = 240;


export function dijkstra(graph, src, dest) {
    let cost = new Array(V);
    let distance = new Array(V);
    let pred = new Array(V);
    let visited = new Array(V);
    let lst = new Array(V).fill("");
    let nextnode = 0;
    let j = 0;
    let srcstation = 0;

    // document.write(src + "<br>" + dest + "<br>");

    for (let i = 0; i < V; i++) {
        if (src == codeofgraph[i]) {
            srcstation = i;
            // document.write(srcstation + "<br>");
            break;
        }
    }

    for (let i = 0; i < V; i++) {
        cost[i] = new Array(V);
    }
    for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
            if (graph[i][j] == 0)
                cost[i][j] = Number.MAX_VALUE;
            else
                cost[i][j] = graph[i][j];
        }
    }
    for (let i = 0; i < V; i++) {
        distance[i] = cost[srcstation][i];
        pred[i] = srcstation;
        visited[i] = 0;
    }
    distance[srcstation] = 0;
    visited[srcstation] = 1;
    let count = 1;
    while (count < V - 1) {
        let minDistance = Number.MAX_VALUE;

        for (let i = 0; i < V; i++) {
            if (distance[i] < minDistance && !visited[i]) {
                minDistance = distance[i];
                nextnode = i;
            }
        }

        visited[nextnode] = 1;
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (minDistance + cost[nextnode][i] < distance[i]) {
                    distance[i] = minDistance + cost[nextnode][i];
                    pred[i] = nextnode;
                }
            }
        }
        count++;
    }


    let result = "";
    let ans = "";
    let station_count = new Array(V).fill(0);
    let station = 0;
    let transfer_count = 0;

    for (let i = 0; i < V; i++) {
        if (i != srcstation) {
            lst[i] = lst[i].concat(codeofgraph[i]);
            j = i;
            do {
                j = pred[j];
                lst[i] = lst[i].concat("<-");
                lst[i] = lst[i].concat(codeofgraph[j]);
                station_count[i]++;
            }
            while (j != srcstation);

            if (i == codeofgraph.indexOf(dest)) {
                station = station_count[i] + 1;
                // result += '\n\n';
                ans += '\n\n';
                for (let l = station_count[i]; l >= 0; l--) {
                    result += lst[i].split("<-")[l];
                    ans += lst[i].split("<-")[l];
                    ans += '-';
                    ans += nameofgraph[codeofgraph.indexOf(lst[i].split("<-")[l])];
                    if (l != 0) {
                        if (lst[i].split("<-")[l][0] != lst[i].split("<-")[l - 1][0])
                        transfer_count++;
                        result += '\n';
                        ans += '\nI\n';
                        // ans += <i class="fas fa-arrow-circle-down"></i>;
                        // ans += '\n';
                    }
                }
                ans += '\n\n';
                // document.write("<br>The Shortest path from station " + src + " to " + dest + " station is : ");
                // document.write(result);
                // document.write("<br>Station Count : " + station + "<br>Transfer Count : " + transfer_count);
                // document.write("<br>Price : " + price_calculation(result, station));
                // break;
                return [ans, price_calculation(result, station), time_calculation(result, station)];
            }
        }
    }
}

// function inverse_string(stR, num)
// {
//     // var temp = '';
//     // for(let i=num-1 ; i>=0 ; i--)
//     // {
//     //     temp += stR.split("-<")[i];
//     // }
//     document.write('55555');
// }

function price_calculation(result, num) {
    var sum = 0;
    var bts_count = 0;
    var mrt_count = 0;
    var arl_count = 0;

    for (var i = 0; i < num; i++) {
        if (i != num) {
            if (brand[codeofgraph.indexOf(result.split('\n')[i])] == brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'BTS') {
                bts_count++;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] != brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'BTS') {
                bts_count++;
                sum += bts_price_rate(bts_count);
                bts_count = 0;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] == brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'MRT') {
                mrt_count++;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] != brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'MRT') {
                mrt_count++;
                sum += mrt_price_rate(mrt_count);
                mrt_count = 0;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] == brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'ARL') {
                mrt_count++;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] != brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'ARL') {
                arl_count++;
                sum += arl_price_rate(arl_count);
                arl_count = 0;
            }
        }
        else {
            if (bts_count > 0) {
                bts_count++;
                sum += bts_price_rate(bts_count);
            }
            else if (mrt_count > 0) {
                mrt_count++;
                sum += mrt_price_rate(mrt_count);
            }
            else if (arl_count > 0) {
                arl_count++;
                sum += arl_price_rate(arl_count);
            }
            // document.write("<br>" + bts_count);
        }
    }

    return sum;
}

function bts_price_rate(bts_count) {
    if (0 <= bts_count && bts_count <= 1)
        return 16;
    else if (bts_count == 2)
        return 23;
    else if (bts_count == 3)
        return 26;
    else if (bts_count == 4)
        return 30;
    else if (bts_count == 5)
        return 33;
    else if (bts_count == 6)
        return 37;
    else if (bts_count == 7)
        return 40;
    else if (bts_count >= 8)
        return 44;
}

function mrt_price_rate(mrt_count) {
    if (0 <= mrt_count && mrt_count <= 1)
        return 16;
    else if (mrt_count == 2)
        return 19;
    else if (mrt_count == 3)
        return 21;
    else if (mrt_count == 4)
        return 23;
    else if (mrt_count == 5)
        return 25;
    else if (mrt_count == 6)
        return 28;
    else if (mrt_count == 7)
        return 30;
    else if (mrt_count == 8)
        return 32;
    else if (mrt_count == 9)
        return 35;
    else if (mrt_count == 10)
        return 37;
    else if (mrt_count == 11)
        return 39;
    else if (mrt_count >= 12)
        return 42;
}

function arl_price_rate(arl_count) {
    if (0 <= arl_count && arl_count <= 1)
        return 15;
    else if (arl_count == 2)
        return 20;
    else if (arl_count == 3)
        return 25;
    else if (arl_count == 4)
        return 30;
    else if (arl_count == 5)
        return 35;
    else if (arl_count == 6)
        return 40;
    else if (arl_count == 7)
        return 45;
}

function time_calculation(result, num) {
    var sum = 0.0;
    for (var i = 0; i < num; i++) {
        if (i != num - 1) {
            if (brand[codeofgraph.indexOf(result.split('\n')[i])] == brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'BTS') {
                sum += 2.5;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] != brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'BTS') {
                sum += 2.5;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] == brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'MRT') {
                sum += 2.0;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] != brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'MRT') {
                sum += 2.0;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] == brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'ARL') {
                sum += 3.5;
            }
            else if (brand[codeofgraph.indexOf(result.split('\n')[i])] != brand[codeofgraph.indexOf(result.split('\n')[i + 1])] && brand[codeofgraph.indexOf(result.split('\n')[i])] == 'ARL') {
                sum += 3.5;
            }
        }
    }

    return sum;
}


let graph = Array(240).fill().map(() => Array(240).fill(0));
graph[0][1] = 1;  //N01
// graph[0][215] = 1;
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
graph[27][28] = 1; //E04
graph[28][27] = 1;
graph[28][29] = 1; //E05
graph[29][28] = 1;
graph[29][30] = 1; //E06
graph[30][29] = 1;
graph[30][31] = 1; //E07
graph[31][30] = 1;
graph[31][32] = 1; //E08
graph[32][31] = 1;
graph[32][33] = 1; //E09
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
graph[47][48] = 1; //S01
graph[48][47] = 1; //S02
graph[48][49] = 1;
graph[49][48] = 1; //S03
graph[49][50] = 1;
graph[50][49] = 1; //S04
graph[50][51] = 1;
graph[51][50] = 1; //S05
graph[51][52] = 1;
graph[52][51] = 1; //S06
graph[52][53] = 1;
graph[53][52] = 1; //S07
graph[53][54] = 1;
graph[54][53] = 1; //S08
graph[54][55] = 1;
graph[55][54] = 1; //S09
graph[55][56] = 1;
graph[56][55] = 1; //S10
graph[56][57] = 1;
graph[57][56] = 1; //S11
graph[57][58] = 1;
graph[58][57] = 1; //S12
graph[59][60] = 1; //YLEX01
graph[60][59] = 1; //YLEX02
graph[60][61] = 1;
graph[61][60] = 1; //YL01
graph[61][62] = 1;
graph[62][61] = 1; //YL02
graph[62][63] = 1;
graph[63][62] = 1; //YL03
graph[63][64] = 1;
graph[64][63] = 1; //YL04
graph[64][65] = 1;
graph[65][64] = 1; //YL05
graph[65][66] = 1;
graph[66][65] = 1; //YL06
graph[66][67] = 1;
graph[67][66] = 1; //YL07
graph[67][68] = 1;
graph[68][67] = 1; //YL08
graph[68][69] = 1;
graph[69][68] = 1; //YL09
graph[69][70] = 1;
graph[70][69] = 1; //YL10
graph[70][71] = 1;
graph[71][70] = 1; //YL11
graph[71][72] = 1;
graph[72][71] = 1; //YL12
graph[72][73] = 1;
graph[73][72] = 1; //YL13
graph[73][74] = 1;
graph[74][73] = 1; //YL14
graph[74][75] = 1;
graph[75][74] = 1; //YL15
graph[75][76] = 1;
graph[76][75] = 1; //YL16
graph[76][77] = 1;
graph[77][76] = 1; //YL17
graph[77][78] = 1;
graph[78][77] = 1; //YL18
graph[78][79] = 1;
graph[79][78] = 1; //YL19
graph[79][80] = 1;
graph[80][79] = 1;  //YL20
graph[80][81] = 1;
graph[81][80] = 1;  //YL21
graph[81][82] = 1;
graph[82][81] = 1;  //YL22
graph[82][83] = 1;
graph[83][82] = 1;  //YL23
graph[84][85] = 1;  //PK01
graph[85][84] = 1;  //PK02
graph[85][86] = 1;
graph[86][85] = 1;  //PK03
graph[86][87] = 1;
graph[87][86] = 1;  //PK04
graph[87][88] = 1;
graph[88][87] = 1;  //PK05
graph[88][89] = 1;
graph[89][88] = 1;  //PK06
graph[89][90] = 1;
graph[90][89] = 1;  //PK07
graph[90][91] = 1;
graph[91][90] = 1;  //PK08
graph[91][92] = 1;
graph[92][91] = 1;  //PK09
graph[92][93] = 1;
graph[93][92] = 1;  //PK10
graph[93][94] = 1;
graph[94][93] = 1;  //PK11
graph[94][95] = 1;
graph[95][94] = 1;  //PK12
graph[95][96] = 1;
graph[96][95] = 1;  //PK13
graph[96][97] = 1;
graph[97][96] = 1;  //PK14
graph[97][98] = 1;
graph[98][97] = 1;  //PK15
graph[98][99] = 1;
graph[99][98] = 1;  //PK16
graph[99][100] = 1;
graph[100][99] = 1;  //PK17
graph[100][101] = 1;
graph[101][100] = 1;  //PK18
graph[101][102] = 1;
graph[102][101] = 1;  //PK19
graph[102][103] = 1;
graph[103][102] = 1;  //PK20
graph[103][104] = 1;
graph[104][103] = 1;  //PK21
graph[104][105] = 1;
graph[105][104] = 1;  //PK22
graph[105][106] = 1;
graph[106][105] = 1;  //PK23
graph[106][107] = 1;
graph[107][106] = 1;  //PK24
graph[107][108] = 1;
graph[108][107] = 1;  //PK25
graph[108][109] = 1;
graph[109][108] = 1;  //PK26
graph[109][110] = 1;
graph[110][109] = 1;  //PK27
graph[110][111] = 1;
graph[111][110] = 1;  //PK28
graph[111][112] = 1;
graph[112][111] = 1;  //PK29
graph[112][113] = 1;
graph[113][112] = 1;  //PK30
graph[114][115] = 1;  //BL02
graph[115][114] = 1;  //BL03
graph[115][116] = 1;
graph[116][115] = 1;  //BL04
graph[116][117] = 1;
graph[117][116] = 1;  //BL05
graph[117][118] = 1;
graph[118][117] = 1;  //BL06
graph[118][119] = 1;
graph[119][118] = 1;  //BL07
graph[119][120] = 1;
graph[120][119] = 1;  //BL08
graph[120][121] = 1;
graph[121][120] = 1;  //BL09
graph[121][122] = 1;
graph[122][121] = 1;  //BL10
graph[122][123] = 1;
graph[123][122] = 1;  //BL11
graph[123][124] = 1;
graph[124][123] = 1;  //BL12
graph[124][125] = 1;
graph[125][124] = 1;  //BL13
graph[125][126] = 1;
graph[126][125] = 1;  //BL14
graph[126][127] = 1;
graph[127][126] = 1;  //BL15
graph[127][128] = 1;
graph[128][127] = 1;  //BL16
graph[128][129] = 1;
graph[129][128] = 1;  //BL17
graph[129][130] = 1;
graph[130][129] = 1;  //BL18
graph[130][131] = 1;
graph[131][130] = 1;  //BL19
graph[131][132] = 1;
graph[132][131] = 1;  //BL20
graph[132][133] = 1;
graph[133][132] = 1;  //BL21
graph[133][134] = 1;
graph[134][133] = 1;  //BL22
graph[134][135] = 1;
graph[135][134] = 1;  //BL23
graph[135][136] = 1;
graph[136][135] = 1;  //BL24
graph[136][137] = 1;
graph[137][136] = 1;  //BL25
graph[137][138] = 1;
graph[138][137] = 1;  //BL26
graph[138][139] = 1;
graph[139][138] = 1;  //BL27
graph[139][140] = 1;
graph[140][139] = 1;  //BL28
graph[140][141] = 1;
graph[141][140] = 1;  //BL29
graph[141][142] = 1;
graph[142][141] = 1;  //BL30
graph[142][143] = 1;
graph[143][142] = 1;  //BL31
graph[143][144] = 1;
graph[144][143] = 1;  //BL32
graph[145][146] = 1;  //BL33
graph[146][145] = 1;  //BL34
graph[146][147] = 1;
graph[147][146] = 1;  //BL35
graph[147][148] = 1;
graph[148][147] = 1;  //BL36
graph[148][149] = 1;
graph[149][148] = 1;  //BL37
graph[149][150] = 1;
graph[150][149] = 1;  //BL38
graph[151][152] = 1;  //OR02
graph[152][151] = 1;  //OR03
graph[152][153] = 1;
graph[153][152] = 1;  //OR04
graph[153][154] = 1;
graph[154][153] = 1;  //OR05
graph[154][155] = 1;
graph[155][154] = 1;  //OR06
graph[155][156] = 1;
graph[156][155] = 1;  //OR07
graph[156][157] = 1;
graph[157][156] = 1;  //OR08
graph[157][158] = 1;
graph[158][157] = 1;  //OR09
graph[158][159] = 1;
graph[159][158] = 1;  //OR10
graph[159][160] = 1;
graph[160][159] = 1;  //OR11
graph[160][161] = 1;
graph[161][160] = 1;  //OR12
graph[161][162] = 1;
graph[162][161] = 1;  //OR13
graph[162][163] = 1;
graph[163][162] = 1;  //OR14
graph[163][164] = 1;
graph[164][163] = 1;  //OR15
graph[164][165] = 1;
graph[165][164] = 1;  //OR16
graph[165][166] = 1;
graph[166][165] = 1;  //OR17
graph[166][167] = 1;
graph[167][166] = 1;  //OR18
graph[167][168] = 1;
graph[168][167] = 1;  //OR19
graph[168][169] = 1;
graph[169][168] = 1;  //OR20
graph[170][171] = 1;  //OR21
graph[171][170] = 1;  //OR22
graph[171][172] = 1;
graph[172][171] = 1;  //OR23
graph[172][173] = 1;
graph[173][172] = 1;  //OR24
graph[173][174] = 1;
graph[174][173] = 1;  //OR25
graph[174][175] = 1;
graph[175][174] = 1;  //OR26
graph[175][176] = 1;
graph[176][175] = 1;  //OR27
graph[176][177] = 1;
graph[177][176] = 1;  //OR28
graph[177][178] = 1;
graph[178][177] = 1;  //OR29
graph[179][180] = 1;  //PP02
graph[180][179] = 1;  //PP03
graph[180][181] = 1;
graph[181][180] = 1;  //PP04
graph[181][182] = 1;
graph[182][181] = 1;  //PP05
graph[182][183] = 1;
graph[183][182] = 1;  //PP06
graph[183][184] = 1;
graph[184][183] = 1;  //PP07
graph[184][185] = 1;
graph[185][184] = 1;  //PP08
graph[185][186] = 1;
graph[186][185] = 1;  //PP09
graph[186][187] = 1;
graph[187][186] = 1;  //PP10
graph[187][188] = 1;
graph[188][187] = 1;  //PP11
graph[188][189] = 1;
graph[189][188] = 1;  //PP12
graph[189][190] = 1;
graph[190][189] = 1;  //PP13
graph[190][191] = 1;
graph[191][190] = 1;  //PP14
graph[191][192] = 1;
graph[192][191] = 1;  //PP15
graph[192][193] = 1;
graph[193][192] = 1;  //PP16
graph[193][194] = 1;
graph[194][193] = 1;  //PP17
graph[194][195] = 1;
graph[195][194] = 1;  //PP18
graph[195][196] = 1;
graph[196][195] = 1;  //PP19
graph[196][197] = 1;
graph[197][196] = 1;  //PP20
graph[197][198] = 1;
graph[198][197] = 1;  //PP21
graph[198][199] = 1;
graph[199][198] = 1;  //PP22
graph[199][200] = 1;
graph[200][199] = 1;  //PP23
graph[200][201] = 1;
graph[201][200] = 1;  //PP24
graph[201][202] = 1;
graph[202][201] = 1;  //PP25
graph[202][203] = 1;
graph[203][202] = 1;  //PP26
graph[203][204] = 1;
graph[204][203] = 1;  //PP27
graph[204][205] = 1;
graph[205][204] = 1;  //PP28
graph[205][206] = 1;
graph[206][205] = 1;  //PP29
graph[206][207] = 1;
graph[207][206] = 1;  //PP30
graph[207][208] = 1;
graph[208][207] = 1;  //PP31
graph[208][209] = 1;
graph[209][208] = 1;  //PP32
graph[209][210] = 1;
graph[210][209] = 1;  //PP33
graph[211][212] = 1;  //G01
graph[212][211] = 1;  //G02
graph[212][213] = 1;
graph[213][212] = 1;  //G03
graph[213][214] = 1;
graph[214][213] = 1;  //G04
graph[215][216] = 1;  //A01
graph[216][215] = 1;  //A02
graph[216][217] = 1;
graph[217][216] = 1;  //A03
graph[217][218] = 1;
graph[218][217] = 1;  //A04
graph[218][219] = 1;
graph[219][218] = 1;  //A05
graph[219][220] = 1;
graph[220][219] = 1;  //A06
graph[220][221] = 1;
graph[221][220] = 1;  //A07
graph[221][222] = 1;
graph[222][221] = 1;  //A08
graph[223][224] = 1;  //RN10
graph[224][223] = 1;  //RN09
graph[224][225] = 1;
graph[225][224] = 1;  //RN08
graph[225][226] = 1;
graph[226][225] = 1;  //RN07
graph[226][227] = 1;
graph[227][226] = 1;  //RN06
graph[227][228] = 1;
graph[228][227] = 1;  //RN05
graph[228][229] = 1;
graph[229][228] = 1;  //RN04
graph[229][230] = 1;
graph[230][229] = 1;  //RN03
graph[230][231] = 1;
graph[231][230] = 1;  //RN02
graph[231][232] = 1;
graph[232][231] = 1;  //RN01

// เพิ่มส่วนที่ขาด
graph[233][0] = 1;    // CEN01 - N01
graph[0][233] = 1;
graph[233][24] = 1;   // CEN01 - E01
graph[24][233] = 1;
graph[234][235] = 1;  // CEN02 - W01
graph[235][234] = 1;
graph[234][47] = 1;   // CEN02 - S01
graph[47][234] = 1;
graph[236][144] = 1;  //BL01-L - BL32
graph[144][236] = 1;
graph[236][145] = 1;  //BL01-L - BL33
graph[145][236] = 1;
graph[237][114] = 1;  // BL01 - BL02
graph[114][237] = 1;
graph[238][179] = 1;  // PP01 - PP02
graph[179][238] = 1;
graph[239][151] = 1;  // OR01 - OR02
graph[151][239] = 1;


// สาย transfer station
graph[0][156] = 1;  // N01 <-> OR07
graph[156][0] = 1;

graph[1][222] = 1;  // N02 <-> A08
graph[222][1] = 1;

graph[7][125] = 1;  // N08 <-> BL13
graph[125][7] = 1;

graph[8][126] = 1;  // N09 <-> BL14
graph[126][8] = 1;

graph[9][59] = 1;   // N10 <-> YLEX01
graph[59][9] = 1;

graph[16][99] = 1;  // N17 <-> PK16
graph[99][16] = 1;

graph[233][234] = 1;  // CEN01 <-> CEN02
graph[234][233] = 1;

graph[27][134] = 1;  // E04 <-> BL22
graph[134][27] = 1;

graph[38][83] = 1;  //E15 <-> YL23
graph[83][38] = 1;

graph[116][239] = 1; // BL04 <-> OR01
graph[239][116] = 1;

graph[122][193] = 1;  // BL10 <-> PP16
graph[193][122] = 1;

graph[123][232] = 1;  // BL11 <-> RN01
graph[232][123] = 1;

graph[127][61] = 1;  // BL15 <-> YL01
graph[61][127] = 1;

graph[131][162] = 1;  // BL19 <-> OR13
graph[162][131] = 1;

graph[133][220] = 1;  // BL21 <-> A06
graph[220][133] = 1;

graph[138][48] = 1;  // BL26 <-> S02
graph[48][138] = 1;

graph[146][58] = 1;  // BL34 <-> S12
graph[58][146] = 1;

graph[53][211] = 1;  // S07 <-> G01
graph[211][53] = 1;

graph[54][202] = 1;  // S08 <-> PP25
graph[202][54] = 1;

graph[188][84] = 1;  // PP11 <-> PK01
graph[84][188] = 1;

graph[199][153] = 1;  // PP22 <-> OR04
graph[153][199] = 1;

graph[201][214] = 1;  // PP24 <-> G04
graph[214][201] = 1;

graph[218][71] = 1;  // A04 <-> YL11
graph[71][218] = 1;

graph[69][169] = 1; // YL09 <-> OR20
graph[169][69] = 1;

graph[113][177] = 1;  // PK30 <-> OR28
graph[177][113] = 1;

graph[158][221] = 1;  // OR09 <-> A07
graph[221][158] = 1;

graph[227][97] = 1;  // RN06 <-> PK14
graph[97][227] = 1;




// CEN, W1, BL01-L
let codeofgraph = ['N01', 'N02', 'N03', 'N04', 'N05', 'N06', 'N07', 'N08', 'N09', 'N10', 'N11'
    , 'N12', 'N13', 'N14', 'N15', 'N16', 'N17', 'N18', 'N19', 'N20'
    , 'N21', 'N22', 'N23', 'N24', 'E01', 'E02', 'E03', 'E04', 'E05', 'E06'
    , 'E07', 'E08', 'E09', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17'
    , 'E18', 'E19', 'E20', 'E21', 'E22', 'E23', 'S01', 'S02', 'S03', 'S04', 'S05'
    , 'S06', 'S07', 'S08', 'S09', 'S10', 'S11', 'S12', 'YLEX01', 'YLEX02', 'YL01'
    , 'YL02', 'YL03', 'YL04', 'YL05', 'YL06', 'YL07', 'YL08', 'YL09', 'YL10'
    , 'YL11', 'YL12', 'YL13', 'YL14', 'YL15', 'YL16', 'YL17', 'YL18', 'YL19'
    , 'YL20', 'YL21', 'YL22', 'YL23', 'PK01', 'PK02', 'PK03', 'PK04', 'PK05'
    , 'PK06', 'PK07', 'PK08', 'PK09', 'PK10', 'PK11', 'PK12', 'PK13', 'PK14'
    , 'PK15', 'PK16', 'PK17', 'PK18', 'PK19', 'PK20', 'PK21', 'PK22', 'PK23'
    , 'PK24', 'PK25', 'PK26', 'PK27', 'PK28', 'PK29', 'PK30', 'BL02', 'BL03'
    , 'BL04', 'BL05', 'BL06', 'BL07', 'BL08', 'BL09', 'BL10', 'BL11', 'BL12'
    , 'BL13', 'BL14', 'BL15', 'BL16', 'BL17', 'BL18', 'BL19', 'BL20', 'BL21'
    , 'BL22', 'BL23', 'BL24', 'BL25', 'BL26', 'BL27', 'BL28', 'BL29', 'BL30'
    , 'BL31', 'BL32', 'BL33', 'BL34', 'BL35', 'BL36', 'BL37', 'BL38', 'OR02'
    , 'OR03', 'OR04', 'OR05', 'OR06', 'OR07', 'OR08', 'OR09', 'OR10', 'OR11', 'OR12'
    , 'OR13', 'OR14', 'OR15', 'OR16', 'OR17', 'OR18', 'OR19', 'OR20', 'OR21'
    , 'OR22', 'OR23', 'OR24', 'OR25', 'OR26', 'OR27', 'OR28', 'OR29', 'PP02'
    , 'PP03', 'PP04', 'PP05', 'PP06', 'PP07', 'PP08', 'PP09', 'PP10', 'PP11'
    , 'PP12', 'PP13', 'PP14', 'PP15', 'PP16', 'PP17', 'PP18', 'PP19', 'PP20'
    , 'PP21', 'PP22', 'PP23', 'PP24', 'PP25', 'PP26', 'PP27', 'PP28', 'PP29'
    , 'PP30', 'PP31', 'PP32', 'PP33', 'G01', 'G02', 'G03', 'G04', 'A01', 'A02'
    , 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'RN10', 'RN09', 'RN08', 'RN07'
    , 'RN06', 'RN05', 'RN04', 'RN03', 'RN02', 'RN01', 'CEN01', 'CEN02', 'W01', 'BL01-L'
    , 'BL01', 'PP01', 'OR01'];

let brand = ['BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS'
    , 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'BTS', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'MRT', 'MRT', 'MRT', 'MRT', 'BTS', 'BTS', 'BTS', 'BTS', 'ARL', 'ARL', 'ARL', 'ARL', 'ARL'
    , 'ARL', 'ARL', 'ARL', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT', 'MRT'
    , 'BTS', 'BTS', 'BTS', 'MRT', 'MRT', 'MRT', 'MRT'];

let nameofgraph = ['ราชเทวี', 'พญาไท', 'อนุสาวรีย์ชัยสมรภูมิ', 'สนามเป้า', 'อารีย์', 'เสนาร่วม', 'สะพานควาย', 'หมอชิต', 'ห้าแยกลาดพร้าว', 'พหลโยธิน 24', 'รัชโยธิน'
    , 'เสนานิคม', 'มหาวิทยาลัยเกษตรศาสตร์', 'กรมป่าไม้', 'บางบัว', 'กรมทหารราบที่ 11', 'วัดพระศรีมหาธาตุ', 'พหลโยธิน 59', 'สายหยุด', 'สะพานใหม่'
    , 'โรงพยาบาลภูมิพลอดุลยเดช', 'พิพิธภัณฑ์กองทัพอากาศ', 'แยก คปอ.', 'คูคต', 'ชิดลม', 'เพลินจิต', 'นานา', 'อโศก', 'พร้อมพงษ์', 'ทองหล่อ', 'เอกมัย'
    , 'พระโขนง', 'อ่อนนุช', 'บางจาก', 'ปุณณวิถี', 'อุดมสุข', 'บางนา', 'แบริ่ง', 'สำโรง', 'ปู่เจ้า', 'ช้างเอราวัณ', 'โรงเรียนนายเรือ', 'ปากน้ำ', 'ศรีนครินทร์'
    , 'แพรกษา', 'สายลวด', 'เคหะฯ', 'ราชดำริ', 'ศาลาแดง', 'ช่องนนทรี', 'เซนต์หลุยส์', 'สุรศักดิ์', 'สะพานตากสิน', 'กรุงธนบุรี', 'วงเวียนใหญ่'
    , 'โพธิ์นิมิตร', 'ตลาดพลู', 'วุฒากาศ', 'บางหว้า', 'พหลโยธิน 24', 'จันทรเกษม', 'ลาดพร้าว', 'ภาวนา', 'โชคชัย 4', 'ลาดพร้าว 71', 'ลาดพร้าว 83'
    , 'มหาดไทย', 'ลาดพร้าว 101', 'บางกะปิ', 'แยกลำสาลี', 'ศรีกรีฑา', 'พัฒนาการ', 'กลันตัน', 'ศรีนุช', 'ศรีนครินทร์ 38', 'สวนหลวง ร. 9'
    , 'ศรีอุดม', 'ศรีเอี่ยม', 'ศรีลาซาล', 'ศรีแบริ่ง', 'ศรีด่าน', 'ศรีเทพา', 'ทิพวัล', 'สำโรง', 'ศูนย์ราชการนนทบุรี', 'แคราย', 'สนามบินน้ำ'
    , 'สามัคคี', 'กรมชลประทาน', 'แยกปากเกร็ด', 'เลี่ยงเมืองปากเกร็ด', 'แจ้งวัฒนะ-ปากเกร็ด 28', 'เมืองทองธานี', 'ศรีรัช', 'แจ้งวัฒนะ 14'
    , 'ศูนย์ราชการเฉลิมพระเกียรติ', 'โทรคมนาคมแห่งชาติ', 'หลักสี่', 'ราชภัฏพระนคร', 'วัดพระศรีมหาธาตุ', 'รามอินทรา 3', 'ลาดปลาเค้า'
    , 'รามอินทรา กม.4', 'มัยลาภ', 'วัชรพล', 'รามอินทรา กม.6', 'คู้บอน', 'รามอินทรา กม.9', 'วงแหวนรามอินทรา', 'นพรัตน์', 'บางชัน'
    , 'เศรษฐบุตรบำเพ็ญ', 'ตลาดมีนบุรี', 'มีนบุรี', 'จรัญฯ 13', 'ไฟฉาย', 'บางขุนนนท์', 'บางยี่ขัน', 'สิรินธร', 'บางพลัด', 'บางอ้อ', 'บางโพ'
    , 'เตาปูน', 'บางซื่อ', 'กำแพงเพชร', 'สวนจตุจักร', 'พหลโยธิน', 'ลาดพร้าว', 'รัชดาภิเษก', 'สุทธิสาร', 'ห้วยขวาง', 'ศูนย์วัฒนธรรมแห่งประเทศไทย'
    , 'พระราม 9', 'เพชรบุรี', 'สุขุมวิท', 'ศูนย์การประชุมแห่งชาติสิริกิติ์', 'คลองเตย', 'ลุมพินี', 'สีลม', 'สามย่าน', 'หัวลำโพง', 'วัดมังกร', 'สามยอด'
    , 'สนามไชย', 'อิสรภาพ', 'บางไผ่', 'บางหว้า', 'เพชรเกษม 48', 'ภาษีเจริญ', 'บางแค', 'หลักสอง', 'ศิริราช', 'สนามหลวง', 'อนุสาวรีย์ประชาธิปไตย'
    , 'หลานหลวง', 'ยมราช', 'ราชเทวี', 'ประตูน้ำ', 'ราชปรารภ', 'รางน้ำ', 'ดินแดง', 'ประชาสงเคราะห์', 'ศูนย์วัฒนธรรมแห่งประเทศไทย', 'รฟม.', 'วัดพระราม 9'
    , 'รามคำแหง 12', 'มหาวิทยาลัยรามคำแหง', 'ราชมังคลา', 'รามคำแหง 34 ', 'แยกลำสาลี ', 'ศรีบูรพา', 'คลองบ้านม้า', 'สัมมากร', 'น้อมเกล้า', 'ราษฎร์พัฒนา'
    , 'มีนพัฒนา', 'เคหะรามคำแหง', 'มีนบุรี', 'แยกร่มเกล้า', 'ตลาดบางใหญ่', 'สามแยกบางใหญ่', 'บางพลู', 'บางรักใหญ่', 'บางรักน้อย-ท่าอิฐ'
    , 'ไทรม้า', 'สะพานพระนั่งเกล้า', 'แยกนนทบุรี 1', 'บางกระสอ', 'ศูนย์ราชการนนทบุรี', 'กระทรวงสาธารณสุข', 'แยกติวานนท์', 'วงศ์สว่าง'
    , 'บางซ่อน', 'เตาปูน', 'รัฐสภา', 'ศรีย่าน', 'วชิรพยาบาล', 'หอสมุดแห่งชาติ', 'บางขุนพรหม', 'ผ่านฟ้า', 'สามยอด', 'สะพานพุทธฯ'
    , 'วงเวียนใหญ่', 'สำเหร่', 'ดาวคะนอง', 'บางปะแก้ว', 'บางปะกอก', 'สะพานพระราม 9', 'ราษฎร์บูรณะ', 'พระประแดง', 'ครุใน', 'กรุงธนบุรี'
    , 'เจริญนคร (ไอคอนสยาม)', 'คลองสาน', 'ประชาธิปก', 'สุวรรณภูมิ', 'ลาดกระบัง', 'บ้านทับช้าง', 'หัวหมาก', 'รามคำแหง', 'มักกะสัน'
    , 'ราชปรารภ', 'พญาไท', 'รังสิต', 'หลักหก (มหาวิทยาลัยรังสิต)', 'ดอนเมือง', 'การเคหะ', 'หลักสี่', 'ทุ่งสองห้อง', 'บางเขน', 'วัดเสมียนนารี'
    , 'จตุจักร', 'บางซื่อ', 'สยาม', 'สยาม', 'สนามกีฬาแห่งชาติ', 'ท่าพระ', 'ท่าพระ', 'คลองบางไผ่', 'บางขุนนนท์'];


export { graph };