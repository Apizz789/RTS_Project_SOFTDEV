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

const SelectforCal = () => {
  const { setclickS } = useContext(UserContextS);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setclickS(item)
  };

  return (
    <div style={{ marginTop: "55px", width: "100%" }}>
      <br></br>
      <h1 align="center">เลือกสถานี</h1>
      <br></br>
      <Tabs defaultActiveKey="Btsgreen" className="mb-3">
        <Tab eventKey="Btsgreen" title="BTS สายสีเขียวอ่อน">
          <div style={{ textAlign: "center" }}>
            {[
              "N24 คูคต Khu Khot",
              "N23 แยก คปอ. Yaek Kor Por Aor",
              "N22 พิพิธภัณฑ์กองทัพอากาศ Royal Thai Air Force Museum",
              "N21 โรงพยาบาลภูมิพลอดุลยเดช Bhumibol Adulyadej Hospital",
              "N20 สะพานใหม่ Saphan Mai",
              "N19 สายหยุด Sai Yud",
              "N18 พหลโยธิน 59 Phahon Yothin 59",
              "N17 วัดพระศรีมหาธาตุ Wat Phra Sri Mahathat",
              "N16 กรมทหารราบที่ 11 11th Infantry Regiment",
              "N15 บางบัว Bang Bua",
              "N14 กรมป่าไม้ Royal Forest Department",
              "N13 มหาวิทยาลัยเกษตรศาสตร์ Kasetsart University",
              "N12 เสนานิคม Sena Nikhom",
              "N11 รัชโยธิน Ratchayothin",
              "N10 พหลโยธิน 24 Phahon Yothin 24",
              "N09 ห้าแยกลาดพร้าว Ha Yaek Lat Phrao",
              "N08 หมอชิต Mo Chit",
              "N07 สะพานควาย Saphan Khwai",
              "N06 เสนาร่วม Sena Ruam",
              "N05 อารีย์ Ari",
              "N04 สนามเป้า Sanam Pao",
              "N03 อนุสาวรีย์ชัยสมรภูมิ Victory Monument",
              "N02 พญาไท Phaya Thai",
              "N01 ราชเทวี Ratchathewi",
              "CEN01 สยาม Siam",
              "E01 ชิดลม Chit Lom",
              "E02 เพลินจิต Phloen Chit",
              "E03 นานา Nana",
              "E04 อโศก Asok",
              "E05 พร้อมพงษ์ Phrom Phong",
              "E06 ทองหล่อ Thong Lo",
              "E07 เอกมัย Ekkamai",
              "E08 พระโขนง Phra Khanong",
              "E09 อ่อนนุช On Nut",
              "E10 บางจาก Bang Chak",
              "E11 ปุณณวิถี Punnawithi",
              "E12 อุดมสุข Udom Suk",
              "E13 บางนา Bang Na",
              "E14 แบริ่ง Bearing",
              "E15 สำโรง Samrong",
              "E16 ปู่เจ้า Pu Chao",
              "E17 ช้างเอราวัณ Chang Erawan",
              "E18 โรงเรียนนายเรือ Royal Thai Naval Academy",
              "E19 ปากน้ำ Pak Nam",
              "E20 ศรีนครินทร์ Srinagarindra",
              "E21 แพรกษา Phraek Sa",
              "E22 สายลวด Sai Luat",
              "E23 เคหะฯ Kheha",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={()=>handleShow(item)}
              >
                {item}
              </Button>
            ))}
            <Modal show={show} onHide={handleClose} align>
              <Modal.Header closeButton>Modal Head Part</Modal.Header>
              <Modal.Body>คุณต้องการที่จะเลือกสถานี</Modal.Body>
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
          <div style={{ textAlign: "center" }}>
            {[
              "W01 สนามกีฬาแห่งชาติ National Stadium",
              "CEN02 สยาม Siam",
              "S01 ราชดำริ Ratchadamri",
              "S02 ศาลาแดง Sala Daeng",
              "S03 ช่องนนทรี Chong Nonsi",
              "S04 เซนต์หลุยส์ Saint Louis",
              "S05 สุรศักดิ์ Surasak",
              "S06 สะพานตากสิน Saphan Taksin",
              "S07 กรุงธนบุรี Krung Thon Buri",
              "S08 วงเวียนใหญ่ Wongwian Yai",
              "S09 โพธิ์นิมิตร Pho Nimit",
              "S10 ตลาดพลู Talat Phlu",
              "S11 วุฒากาศ Wutthakat",
              "S12 บางหว้า Bang Wa",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>

        <Tab eventKey="Btsgold" title="BTS สายสีทอง">
          <div style={{ textAlign: "center" }}>
            {[
              "G01 กรุงธนบุรี Krung Thonburi",
              "G02 เจริญนคร (ไอคอนสยาม) Charoen Nakhon",
              "G03 คลองสาน Khlong San",
              "G04 ประชาธิปก Prajadhipok",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
        <Tab eventKey="Btsyellow" title="BTS สายสีเหลือง">
          <div style={{ textAlign: "center" }}>
            {[
              "YLEX01 พหลโยธิน 24 Phahon Yothin 24",
              "YLEX02 จันทรเกษม Chan Kasem",
              "YL01 ลาดพร้าว Lat Phrao",
              "YL02 ภาวนา Phawana",
              "YL03 โชคชัย 4 Chok chai 4",
              "YL04 ลาดพร้าว 71 Lat Phrao 71",
              "YL05 ลาดพร้าว 83 Lat Phrao 83",
              "YL06 มหาดไทย Mahat Thai",
              "YL07 ลาดพร้าว 101 Lat Phrao 101",
              "YL08 บางกะปิ Bang Kapi",
              "YL09 แยกลำสาลี Yaek Lam Sali",
              "YL10 ศรีกรีฑา Si Kritha",
              "YL11 พัฒนาการ Phattanakarn",
              "YL12 กลันตัน Kalantan",
              "YL13 ศรีนุช Si Nut",
              "YL14 ศรีนครินทร์ 38 Srinagarindra 38",
              "YL15 สวนหลวง ร. 9 Suan Luang Ro 9",
              "YL16 ศรีอุดม Si Udom",
              "YL17 ศรีเอี่ยม Si Iam",
              "YL18 ศรีลาซาล Si La Salle",
              "YL19 ศรีแบริ่ง Si Bearing",
              "YL20 ศรีด่าน Si Dan",
              "YL21 ศรีเทพา Si Thepha",
              "YL22 ทิพวัล Thipphawan",
              "YL23 สำโรง Samrong",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
        <Tab eventKey="Btspink" title="BTS สายสีชมพู">
          <div style={{ textAlign: "center" }}>
            {[
              "PK01 ศูนย์ราชการนนทบุรี Nonthaburi Civic Center",
              "PK02 แคราย Khae Rai",
              "PK03 สนามบินน้ำ Sanambin Nam",
              "PK04 สามัคคี Samakkhi",
              "PK05 กรมชลประทาน Royal Irrigation Department",
              "PK06 แยกปากเกร็ด Yeak Pak Kret",
              "PK07 เลี่ยงเมืองปากเกร็ด Pak Kret Bypass",
              "PK08 แจ้งวัฒนะ-ปากเกร็ด 28 Chaeng Wattana-Pak Kret 28",
              "PK09 เมืองทองธานี Muang Thong Thani",
              "PK10 ศรีรัช Si Rat",
              "PK11 แจ้งวัฒนะ 14 Chaeng Watthana 14",
              "PK12 ศูนย์ราชการเฉลิมพระเกียรติ Government Complex",
              "PK13 โทรคมนาคมแห่งชาติ TOT",
              "PK14 หลักสี่ Lak Si",
              "PK15 ราชภัฏพระนคร Rajabhat Phranakhon",
              "PK16 วัดพระศรีมหาธาตุ Wat Phra Sri Mahathat",
              "PK17 รามอินทรา 3 Ram Inthra 3",
              "PK18 ลาดปลาเค้า Lat Pla Khao",
              "PK19 รามอินทรา กม.4 Ram Inthra Km.4",
              "PK20 มัยลาภ Maiyalap",
              "PK21 วัชรพล Vatcharaphon",
              "PK22 รามอินทรา กม.6 Ram Inthra Km.6",
              "PK23 คู้บอน Khu Bon",
              "PK24 รามอินทรา กม.9 Ram Inthra Km.9",
              "PK25 วงแหวนรามอินทรา Outer Ring Road - Ram Inthra",
              "PK26 นพรัตน์ Nopparat",
              "PK27 บางชัน Bang Chan",
              "PK28 เศรษฐบุตรบำเพ็ญ Setthabutbamphen",
              "PK29 ตลาดมีนบุรี Min Buri Market",
              "PK30 มีนบุรี Min Buri",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
        <Tab eventKey="Mrtblue" title="MRT สายสีน้ำเงิน">
          <div style={{ textAlign: "center" }}>
            {[
              "BL01 ท่าพระ Tha Phra",
              "BL02 จรัญฯ 13 Charan 13",
              "BL03 ไฟฉาย Fai Chai",
              "BL04 บางขุนนนท์ Bang Khun Non",
              "BL05 บางยี่ขัน Bang Yi Khan",
              "BL06 สิรินธร Sirindhorn",
              "BL07 บางพลัด Bang Phlat",
              "BL08 บางอ้อ Bang O",
              "BL09 บางโพ Bang Pho",
              "BL10 เตาปูน Tao Poon",
              "BL11 บางซื่อ Bang Sue",
              "BL12 กำแพงเพชร Kamphaeng Phet",
              "BL13 สวนจตุจักร Chatuchak Park",
              "BL14 พหลโยธิน Phahon Yothin",
              "BL15 ลาดพร้าว Lat Phrao",
              "BL16 รัชดาภิเษก Ratchadaphisek",
              "BL17 สุทธิสาร Sutthisan",
              "BL18 ห้วยขวาง Huai Khwang",
              "BL19 ศูนย์วัฒนธรรมแห่งประเทศไทย Thailand Cultural Centre",
              "BL20 พระราม 9 Phra Ram 9",
              "BL21 เพชรบุรี Phetchaburi",
              "BL22 สุขุมวิท Sukhumvit",
              "BL23 ศูนย์การประชุมแห่งชาติสิริกิติ์ Queen Sirikit National Convention Centre",
              "BL24 คลองเตย Khlong Toei",
              "BL25 ลุมพินี Lumphini",
              "BL26 สีลม Si Lom",
              "BL27 สามย่าน Sam Yan",
              "BL28 หัวลำโพง Hua Lamphong",
              "BL29 วัดมังกร Wat Mangkon",
              "BL30 สามยอด Sam Yot",
              "BL31 สนามไชย Sanam Chai",
              "BL32 อิสรภาพ Itsaraphap",
              "BL01-L ท่าพระ Tha Phra",
              "BL33 บางไผ่ Bang Phai",
              "BL34 บางหว้า Bang Wa",
              "BL35 เพชรเกษม 48 Phetkasem 48",
              "BL36 ภาษีเจริญ Phasi Charoen",
              "BL37 บางแค Bang Khae",
              "BL38 หลักสอง Lak Song",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
        <Tab eventKey="MrtPurple" title="MRT สายสีม่วง">
          <div style={{ textAlign: "center" }}>
            {[
              "PP01 คลองบางไผ่ Khlong Bang Phai",
              "PP02 ตลาดบางใหญ่ Talad Bang Yai",
              "PP03 สามแยกบางใหญ่ Sam Yaek Bang Yai",
              "PP04 บางพลู Bang Phlu",
              "PP05 บางรักใหญ่ Bang Rak Yai",
              "PP06 บางรักน้อย-ท่าอิฐ Bang Rak Noi Tha It",
              "PP07 ไทรม้า Sai Ma",
              "PP08 สะพานพระนั่งเกล้า Phra Nang Klao Bridge",
              "PP09 แยกนนทบุรี 1 Yaek Nonthaburi 1",
              "PP10 บางกระสอ Bang Krasor",
              "PP11 ศูนย์ราชการนนทบุรี Nonthaburi Civic Center",
              "PP12 กระทรวงสาธารณสุข Ministry of Public Health",
              "PP13 แยกติวานนท์ Yaek Tiwanon",
              "PP14 วงศ์สว่าง Wong Sawang",
              "PP15 บางซ่อน Bang Son",
              "PP16 เตาปูน Tao Poon",
              "PP17 รัฐสภา Parliament House",
              "PP18 ศรีย่าน Sri Yan",
              "PP19 วชิรพยาบาล Vajira Hospital",
              "PP20 หอสมุดแห่งชาติ National Library",
              "PP21 บางขุนพรหม Bang Khun Phrom",
              "PP22 ผ่านฟ้า Phan Fa",
              "PP23 สามยอด Sam Yot",
              "PP24 สะพานพุทธฯ Memorial Bridge",
              "PP25 วงเวียนใหญ่ Wong Wian Yai",
              "PP26 สำเหร่ Sam Rae",
              "PP27 ดาวคะนอง Dao Khanong",
              "PP28 บางปะแก้ว Bang Pakaeo",
              "PP29 บางปะกอก Bang Pakok",
              "PP30 สะพานพระราม 9 Rama 9 Bridge",
              "PP31 ราษฎร์บูรณะ Rat Burana",
              "PP32 พระประแดง Phra Pradaeng",
              "PP33 ครุใน Kru Nai",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
        <Tab eventKey="MrtOrange" title="MRT สายสีส้ม">
          <div style={{ textAlign: "center" }}>
            {[
              "OR29 แยกร่มเกล้า Yeak Rom Klao",
              "OR28 มีนบุรี Min Buri",
              "OR27 เคหะรามคำแหง Kheha Ramkhamhaeng",
              "OR26 มีนพัฒนา Min Phatthana",
              "OR25 ราษฎร์พัฒนา Rat Phatthana",
              "OR24 น้อมเกล้า Nom Klao",
              "OR23 สัมมากร Sammakorn",
              "OR22 คลองบ้านม้า Khlong Ban Ma",
              "OR21 ศรีบูรพา Sri Burapha",
              "OR20 แยกลำสาลี  Yeak Lam Sali",
              "OR19 รามคำแหง 34  Ramkhamhaeng 34",
              "OR18 ราชมังคลา Rajamangala",
              "OR17 มหาวิทยาลัยรามคำแหง Ramkhamhaeng University",
              "OR16 รามคำแหง 12 Ramkhamhaeng 12",
              "OR15 วัดพระราม 9 Wat Phra Ram 9",
              "OR14 รฟม. MRTA",
              "OR13 ศูนย์วัฒนธรรมแห่งประเทศไทย Thailand Cultural Centre",
              "OR12 ประชาสงเคราะห์ Pracha Songkhro",
              "OR11 ดินแดง Din Daeng",
              "OR10 รางน้ำ Rang Nam",
              "OR09 ราชปรารภ Ratchaprarop",
              "OR08 ประตูน้ำ Pratunam",
              "OR07 ราชเทวี Ratchathewi",
              "OR06 ยมราช Yommarat",
              "OR05 หลานหลวง Lan Luang",
              "OR04 อนุสาวรีย์ประชาธิปไตย Democracy Monument",
              "OR03 สนามหลวง Sanam Luang",
              "OR02 ศิริราช Siriraj",
              "OR01 บางขุนนนท์ Bang Khun Non",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
        <Tab eventKey="MrtRed" title="MRT สายสีแดง">
          <div style={{ textAlign: "center" }}>
            {[
              "RN10 รังสิต Rangsit",
              "RN09 หลักหก (มหาวิทยาลัยรังสิต) Lak Hok (Rangsit University)",
              "RN08 ดอนเมือง Don Mueang",
              "RN07 การเคหะ Kan Kheha",
              "RN06 หลักสี่ Lak Si",
              "RN05 ทุ่งสองห้อง Thung Song Hong",
              "RN04 บางเขน Bang Khen",
              "RN03 วัดเสมียนนารี Wat Samian Nari",
              "RN02 จตุจักร Chatuchak",
              "RN01 บางซื่อ Bang Sue",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
        <Tab eventKey="apl" title="Airport Rail Link">
          <div style={{ textAlign: "center" }}>
            {[
              "A01 สุวรรณภูมิ Suvarnabhumi (Airport)",
              "A02 ลาดกระบัง Lat Krabang",
              "A03 บ้านทับช้าง Ban Thap Chang",
              "A04 หัวหมาก Hua Mak",
              "A05 รามคำแหง Ramkhamhaeng",
              "A06 มักกะสัน Makkasan(City Air Terminal)",
              "A07 ราชปรารภ Ratchaprarop",
              "A08 พญาไท Phaya Thai",
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline-primary"
                onClick={() => setclickS(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SelectforCal;
