import React from "react";
import {
  Tab,
  Tabs,
  Button,
  ToggleButton,
  Row,
  Col,
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import "../../App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import StationBlue, { UserContextS } from "./UseContextSource";
import { useContext, useState } from "react";
import "./TrainCalculate.css";

const SelectforCal = () => {
  const { clickS , setclickS } = useContext(UserContextS);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const handleShow = (item) => {
    setShow(true);
    setclickS(item)
  };

  function newLineText(props){
    const text = props.text;
    return <div>{text}</div>;
  }
  
  const ShowModal = <h1> คุณต้องการเลือกสถานี {clickS}</h1>
 
  return (
    <div style={{ marginTop: "55px", width: "100%" }}>
            <h1 align="center">เลือกสถานี</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#0C9EA8",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>
      <Tabs defaultActiveKey="Btsgreen" className="mb-3">
        <Tab eventKey="Btsgreen" title="BTS สายสีเขียวอ่อน">
          <div  style={{ textAlign: "center",columnCount:"6"}}>
            {[
              "N24 คูคต\nKhu Khot",
              "N23 แยก คปอ.\nYaek Kor Por Aor",
              "N22 พิพิธภัณฑ์กองทัพอากาศ\nRoyal Thai Air Force Museum",
              "N21 โรงพยาบาลภูมิพลอดุลยเดช\nBhumibol Adulyadej Hospital",
              "N20 สะพานใหม่\nSaphan Mai",
              "N19 สายหยุด\nSai Yud",
              "N18 พหลโยธิน\n59 Phahon Yothin 59",
              "N17 วัดพระศรีมหาธาตุ\nWat Phra Sri Mahathat",
              "N16 กรมทหารราบที่ 11\n11th Infantry Regiment",
              "N15 บางบัว\nBang Bua",
              "N14 กรมป่าไม้\nRoyal Forest Department",
              "N13 มหาวิทยาลัยเกษตรศาสตร์\nKasetsart University",
              "N12 เสนานิคม\nSena Nikhom",
              "N11 รัชโยธิน\nRatchayothin",
              "N10 พหลโยธิน\n24 Phahon Yothin 24",
              "N09 ห้าแยกลาดพร้าว\nHa Yaek Lat Phrao",
              "N08 หมอชิต\nMo Chit",
              "N07 สะพานควาย\nSaphan Khwai",
              "N06 เสนาร่วม\nSena Ruam",
              "N05 อารีย์\nAri",
              "N04 สนามเป้า\nSanam Pao",
              "N03 อนุสาวรีย์ชัยสมรภูมิ\nVictory Monument",
              "N02 พญาไท\nPhaya Thai",
              "N01 ราชเทวี\nRatchathewi",
              "CEN01 สยาม\nSiam",
              "E01 ชิดลม\nChit Lom",
              "E02 เพลินจิต\nPhloen Chit",
              "E03 นานา\nNana",
              "E04 อโศก\nAsok",
              "E05 พร้อมพงษ์\nPhrom Phong",
              "E06 ทองหล่อ\nThong Lo",
              "E07 เอกมัย\nEkkamai",
              "E08 พระโขนง\nPhra Khanong",
              "E09 อ่อนนุช\nOn Nut",
              "E10 บางจาก\nBang Chak",
              "E11 ปุณณวิถี\nPunnawithi",
              "E12 อุดมสุข\nUdom Suk",
              "E13 บางนา\nBang Na",
              "E14 แบริ่ง\nBearing",
              "E15 สำโรง\nSamrong",
              "E16 ปู่เจ้า\nPu Chao",
              "E17 ช้างเอราวัณ\nChang Erawan",
              "E18 โรงเรียนนายเรือ\nRoyal Thai Naval Academy",
              "E19 ปากน้ำ\nPak Nam",
              "E20 ศรีนครินทร์\nSrinagarindra",
              "E21 แพรกษา\nPhraek Sa",
              "E22 สายลวด\nSai Luat",
              "E23 เคหะฯ\nKheha",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={()=>handleShow(item)}
                style={{marginBottom:"5px",width:"230px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="Btsdarkgreen" title="BTS สายสีเขียวเข้ม">
          <div style={{ textAlign: "center",columnCount:"5"}}>
            {[
              "W01 สนามกีฬาแห่งชาติ\nNational Stadium",
              "CEN02 สยาม\nSiam",
              "S01 ราชดำริ\nRatchadamri",
              "S02 ศาลาแดง\nSala Daeng",
              "S03 ช่องนนทรี\nChong Nonsi",
              "S04 เซนต์หลุยส์\nSaint Louis",
              "S05 สุรศักดิ์\nSurasak",
              "S06 สะพานตากสิน\nSaphan Taksin",
              "S07 กรุงธนบุรี\nKrung Thon Buri",
              "S08 วงเวียนใหญ่\nWongwian Yai",
              "S09 โพธิ์นิมิตร\nPho Nimit",
              "S10 ตลาดพลู\nTalat Phlu",
              "S11 วุฒากาศ\nWutthakat",
              "S12 บางหว้า\nBang Wa",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"230px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="Btsgold" title="BTS สายสีทอง">
          <div style={{ textAlign: "center",columnCount:"1" }}>
            {[
              "G01 กรุงธนบุรี\nKrung Thonburi",
              "G02 เจริญนคร\nCharoen Nakhon",
              "G03 คลองสาน\nKhlong San",
              "G04 ประชาธิปก\nPrajadhipok",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{width:"230px",whiteSpace: 'pre', margin: '10px'}}
              >
                {item}
              </Button>
            ))}
             <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="Btsyellow" title="BTS สายสีเหลือง">
          <div style={{ textAlign: "center",columnCount:"5" }}>
            {[
              "YLEX01 พหลโยธิน\n24 Phahon Yothin 24",
              "YLEX02 จันทรเกษม\nChan Kasem",
              "YL01 ลาดพร้าว\nLat Phrao",
              "YL02 ภาวนา\nPhawana",
              "YL03 โชคชัย\n4 Chok chai 4",
              "YL04 ลาดพร้าว\n71 Lat Phrao 71",
              "YL05 ลาดพร้าว\n83 Lat Phrao 83",
              "YL06 มหาดไทย\nMahat Thai",
              "YL07 ลาดพร้าว\n101 Lat Phrao 101",
              "YL08 บางกะปิ\nBang Kapi",
              "YL09 แยกลำสาลี\nYaek Lam Sali",
              "YL10 ศรีกรีฑา\nSi Kritha",
              "YL11 พัฒนาการ\nPhattanakarn",
              "YL12 กลันตัน\nKalantan",
              "YL13 ศรีนุช\nSi Nut",
              "YL14 ศรีนครินทร์\n38 Srinagarindra 38",
              "YL15 สวนหลวง ร. 9\nSuan Luang Ro 9",
              "YL16 ศรีอุดม\nSi Udom",
              "YL17 ศรีเอี่ยม\nSi Iam",
              "YL18 ศรีลาซาล\nSi La Salle",
              "YL19 ศรีแบริ่ง\nSi Bearing",
              "YL20 ศรีด่าน\nSi Dan",
              "YL21 ศรีเทพา\nSi Thepha",
              "YL22 ทิพวัล\nThipphawan",
              "YL23 สำโรง\nSamrong",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"230px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="Btspink" title="BTS สายสีชมพู">
          <div style={{ textAlign: "center",columnCount:"5" }}>
            {[
              "PK01 ศูนย์ราชการนนทบุรี\nNonthaburi Civic Center",
              "PK02 แคราย\nKhae Rai",
              "PK03 สนามบินน้ำ\nSanambin Nam",
              "PK04 สามัคคี\nSamakkhi",
              "PK05 กรมชลประทาน\nRoyal Irrigation Department",
              "PK06 แยกปากเกร็ด\nYeak Pak Kret",
              "PK07 เลี่ยงเมืองปากเกร็ด\nPak Kret Bypass",
              "PK08 แจ้งวัฒนะ-ปากเกร็ด 28\nChaeng Wattana-Pak Kret 28",
              "PK09 เมืองทองธานี\nMuang Thong Thani",
              "PK10 ศรีรัช\nSi Rat",
              "PK11 แจ้งวัฒนะ 14\nChaeng Watthana 14",
              "PK12 ศูนย์ราชการเฉลิมพระเกียรติ\nGovernment Complex",
              "PK13 โทรคมนาคมแห่งชาติ\nTOT",
              "PK14 หลักสี่\nLak Si",
              "PK15 ราชภัฏพระนคร\nRajabhat Phranakhon",
              "PK16 วัดพระศรีมหาธาตุ\nWat Phra Sri Mahathat",
              "PK17 รามอินทรา 3\nRam Inthra 3",
              "PK18 ลาดปลาเค้า\nLat Pla Khao",
              "PK19 รามอินทรา กม.4\nRam Inthra Km.4",
              "PK20 มัยลาภ\nMaiyalap",
              "PK21 วัชรพล\nVatcharaphon",
              "PK22 รามอินทรา กม.6\nRam Inthra Km.6",
              "PK23 คู้บอน\nKhu Bon",
              "PK24 รามอินทรา กม.9\nRam Inthra Km.9",
              "PK25 วงแหวนรามอินทรา\nOuter Ring Road - Ram Inthra",
              "PK26 นพรัตน์\nNopparat",
              "PK27 บางชัน\nBang Chan",
              "PK28 เศรษฐบุตรบำเพ็ญ\nSetthabutbamphen",
              "PK29 ตลาดมีนบุรี\nMin Buri Market",
              "PK30 มีนบุรี\nMin Buri",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"250px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
           <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal> 
          </div>
        </Tab>

        <Tab eventKey="Mrtblue" title="MRT สายสีน้ำเงิน">
          <div style={{ textAlign: "center",columnCount:"5" }}>
            {[
              "BL01 ท่าพระ\nTha Phra",
              "BL02 จรัญฯ 13\nCharan 13",
              "BL03 ไฟฉาย\nFai Chai",
              "BL04 บางขุนนนท์\nBang Khun Non",
              "BL05 บางยี่ขัน\nBang Yi Khan",
              "BL06 สิรินธร\nSirindhorn",
              "BL07 บางพลัด\nBang Phlat",
              "BL08 บางอ้อ\nBang O",
              "BL09 บางโพ\nBang Pho",
              "BL10 เตาปูน\nTao Poon",
              "BL11 บางซื่อ\nBang Sue",
              "BL12 กำแพงเพชร\nKamphaeng Phet",
              "BL13 สวนจตุจักร\nChatuchak Park",
              "BL14 พหลโยธิน\nPhahon Yothin",
              "BL15 ลาดพร้าว\nLat Phrao",
              "BL16 รัชดาภิเษก\nRatchadaphisek",
              "BL17 สุทธิสาร\nSutthisan",
              "BL18 ห้วยขวาง\nHuai Khwang",
              "BL19 ศูนย์วัฒนธรรมแห่งประเทศไทย\nThailand Cultural Centre",
              "BL20 พระราม 9\nPhra Ram 9",
              "BL21 เพชรบุรี\nPhetchaburi",
              "BL22 สุขุมวิท\nSukhumvit",
              "BL23 ศูนย์การประชุมแห่งชาติสิริกิติ์\nQueen Sirikit National\nConvention Centre",
              "BL24 คลองเตย\nKhlong Toei",
              "BL25 ลุมพินี\nLumphini",
              "BL26 สีลม\nSi Lom",
              "BL27 สามย่าน\nSam Yan",
              "BL28 หัวลำโพง\nHua Lamphong",
              "BL29 วัดมังกร\nWat Mangkon",
              "BL30 สามยอด\nSam Yot",
              "BL31 สนามไชย\nSanam Chai",
              "BL32 อิสรภาพ\nItsaraphap",
              "BL01-L ท่าพระ\nTha Phra",
              "BL33 บางไผ่\nBang Phai",
              "BL34 บางหว้า\nBang Wa",
              "BL35 เพชรเกษม\n48 Phetkasem 48",
              "BL36 ภาษีเจริญ\nPhasi Charoen",
              "BL37 บางแค\nBang Khae",
              "BL38 หลักสอง\nLak Song",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"250px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="MrtPurple" title="MRT สายสีม่วง">
          <div style={{ textAlign: "center",columnCount:"5" }}>
            {[
              "PP01 คลองบางไผ่\nKhlong Bang Phai",
              "PP02 ตลาดบางใหญ่\nTalad Bang Yai",
              "PP03 สามแยกบางใหญ่\nSam Yaek Bang Yai",
              "PP04 บางพลู\nBang Phlu",
              "PP05 บางรักใหญ่\nBang Rak Yai",
              "PP06 บางรักน้อย-ท่าอิฐ\nBang Rak Noi Tha It",
              "PP07 ไทรม้า\nSai Ma",
              "PP08 สะพานพระนั่งเกล้า\nPhra Nang Klao Bridge",
              "PP09 แยกนนทบุรี 1\nYaek Nonthaburi 1",
              "PP10 บางกระสอ\nBang Krasor",
              "PP11 ศูนย์ราชการนนทบุรี\nNonthaburi Civic Center",
              "PP12 กระทรวงสาธารณสุข\nMinistry of Public Health",
              "PP13 แยกติวานนท์\nYaek Tiwanon",
              "PP14 วงศ์สว่าง\nWong Sawang",
              "PP15 บางซ่อน\nBang Son",
              "PP16 เตาปูน\nTao Poon",
              "PP17 รัฐสภา\nParliament House",
              "PP18 ศรีย่าน\nSri Yan",
              "PP19 วชิรพยาบาล\nVajira Hospital",
              "PP20 หอสมุดแห่งชาติ\nNational Library",
              "PP21 บางขุนพรหม\nBang Khun Phrom",
              "PP22 ผ่านฟ้า\nPhan Fa",
              "PP23 สามยอด\nSam Yot",
              "PP24 สะพานพุทธฯ\nMemorial Bridge",
              "PP25 วงเวียนใหญ่\nWong Wian Yai",
              "PP26 สำเหร่\nSam Rae",
              "PP27 ดาวคะนอง\nDao Khanong",
              "PP28 บางปะแก้ว\nBang Pakaeo",
              "PP29 บางปะกอก\nBang Pakok",
              "PP30 สะพานพระราม 9\nRama 9 Bridge",
              "PP31 ราษฎร์บูรณะ\nRat Burana",
              "PP32 พระประแดง\nPhra Pradaeng",
              "PP33 ครุใน\nKru Nai",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"230px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
             <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="MrtOrange" title="MRT สายสีส้ม">
          <div style={{ textAlign: "center",columnCount:"5" }}>
            {[
              "OR29 แยกร่มเกล้า\nYeak Rom Klao",
              "OR28 มีนบุรี\nMin Buri",
              "OR27 เคหะรามคำแหง\nKheha Ramkhamhaeng",
              "OR26 มีนพัฒนา\nMin Phatthana",
              "OR25 ราษฎร์พัฒนา\nRat Phatthana",
              "OR24 น้อมเกล้า\nNom Klao",
              "OR23 สัมมากร\nSammakorn",
              "OR22 คลองบ้านม้า\nKhlong Ban Ma",
              "OR21 ศรีบูรพา\nSri Burapha",
              "OR20 แยกลำสาลี\nYeak Lam Sali",
              "OR19 รามคำแหง 34\nRamkhamhaeng 34",
              "OR18 ราชมังคลา\nRajamangala",
              "OR17 มหาวิทยาลัยรามคำแหง\nRamkhamhaeng University",
              "OR16 รามคำแหง 12\nRamkhamhaeng 12",
              "OR15 วัดพระราม 9\nWat Phra Ram 9",
              "OR14 รฟม.\nMRTA",
              "OR13 ศูนย์วัฒนธรรม\nแห่งประเทศไทย\nThailand Cultural Centre",
              "OR12 ประชาสงเคราะห์\nPracha Songkhro",
              "OR11 ดินแดง\nDin Daeng",
              "OR10 รางน้ำ\nRang Nam",
              "OR09 ราชปรารภ\nRatchaprarop",
              "OR08 ประตูน้ำ\nPratunam",
              "OR07 ราชเทวี\nRatchathewi",
              "OR06 ยมราช\nYommarat",
              "OR05 หลานหลวง\nLan Luang",
              "OR04 อนุสาวรีย์ประชาธิปไตย\nDemocracy Monument",
              "OR03 สนามหลวง\nSanam Luang",
              "OR02 ศิริราช\nSiriraj",
              "OR01 บางขุนนนท์\nBang Khun Non",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"230px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="MrtRed" title="MRT สายสีแดง">
          <div style={{ textAlign: "center",columnCount:"5" }}>
            {[
              "RN10 รังสิต\nRangsit",
              "RN09 หลักหก\nLak Hok",
              "RN08 ดอนเมือง\nDon Mueang",
              "RN07 การเคหะ\nKan Kheha",
              "RN06 หลักสี่\nLak Si",
              "RN05 ทุ่งสองห้อง\nThung Song Hong",
              "RN04 บางเขน\nBang Khen",
              "RN03 วัดเสมียนนารี\nWat Samian Nari",
              "RN02 จตุจักร\nChatuchak",
              "RN01 บางซื่อ\nBang Sue",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"230px",whiteSpace: 'pre'}}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>

        <Tab eventKey="apl" title="Airport Rail Link">
          <div style={{ textAlign: "center",columnCount:"4" }}>
            {[
              "A01 สุวรรณภูมิ\nSuvarnabhumi",
              "A02 ลาดกระบัง\nLat Krabang",
              "A03 บ้านทับช้าง\nBan Thap Chang",
              "A04 หัวหมาก\nHua Mak",
              "A05 รามคำแหง\nRamkhamhaeng",
              "A06 มักกะสัน\nMakkasan",
              "A07 ราชปรารภ\nRatchaprarop",
              "A08 พญาไท\nPhaya Thai",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => handleShow(item)}
                style={{marginBottom:"5px",width:"230px",whiteSpace: 'pre', margin: '10px'}}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>Rail Transport System</Modal.Header>
              <Modal.Body>{ShowModal}</Modal.Body>
              <Modal.Footer>
                <Link to="/calculate">
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SelectforCal;
