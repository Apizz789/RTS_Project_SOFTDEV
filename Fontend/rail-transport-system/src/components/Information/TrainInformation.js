import React from 'react'
import {InputGroup,FormControl,Col,Row,Button,Container,Form,Table,Accordion,Modal} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import "./TrainInformation.css";
import { useState , useContext } from "react";

function TrainInformation() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);


    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);
    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => setShow10(true);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);
    const handleClose12 = () => setShow12(false);
    const handleShow12 = () => setShow12(true);
    const handleClose13 = () => setShow13(false);
    const handleShow13 = () => setShow13(true);
    const handleClose14 = () => setShow14(false);
    const handleShow14 = () => setShow14(true);
    const handleClose15 = () => setShow15(false);
    const handleShow15 = () => setShow15(true);
    const handleClose16 = () => setShow16(false);
    const handleShow16 = () => setShow16(true);
  
    return (
        <div className="Body_Info" style={{marginTop:"10px",width:"100%"}}>            
            <h1 align="center">Information</h1>
            <Row style={{borderRadius:"20px",width:"auto",height:"23px",margin:"1px",backgroundColor:"#2F2F35",color:"#ffff",fontsize: "20px",fontWeight:"bold"}}>
            </Row>
            <Container>
            
                <Row style={{textAlign:"center"}}>
                    <Col style={{borderRadius:"20px",width:"600px",height:"700px",margin:"10px",backgroundColor:"#fed46e", textAlign:"left"}}>
                    <br></br><h1><i class="fas fa-newspaper"></i> RTS News</h1><hr></hr>
                    <div style={{backgroundColor:"#fff", borderRadius:"20px"}}>
                    <Button variant="link" onClick={handleShow1}> <i class="fas fa-envelope-open"></i>   [BTS] - ประกาศ !!! ปิดสถานี สายสีเขียวอ่อน E04 อโศก Asok : Update 15/11/2021</Button>
                    <Button variant="link" onClick={handleShow2}> <i class="fas fa-envelope-open"></i>   [MRT] - ประกาศ !!! ปิดสถานี สายสีน้ำเงิน BL21 เพชรบุรี Phetchaburi : Update 15/11/2021</Button>
                    <Button variant="link" onClick={handleShow3}> <i class="fas fa-envelope-open"></i>   [ARL] - ประกาศ !!! ปิดสถานี สายเชื่อมท่าอากาศยาน A06 มักกะสัน Makkasan : Update 15/11/2021</Button>
                    <Button variant="link" onClick={handleShow4}> <i class="fas fa-envelope-open"></i>   [BTS] - ประกาศ !!! แจ้งจับ นายบีทีเอส ข้อหาแสดงละครบนรางรถไฟ  : Update 14/11/2021</Button>
                    <Button variant="link" onClick={handleShow5}> <i class="fas fa-envelope-open"></i>   [MRT] - ทั่วไป !!! ชี่นชม นายเออาร์แอล หลังคว้ารางวัลนักเดินทางดีเด่น  : Update 14/11/2021</Button>
                    <Button variant="link" onClick={handleShow6}> <i class="fas fa-envelope-open"></i>   [ARL] - ทั่วไป !!! นายเอ็มอาร์ที ไปกองฉลากไม่ทัน เหตุจากตกขบวนรถ  : Update 12/11/2021</Button>
                    </div>
                    <hr></hr>
                    <h1><i class="fas fa-angle-up"></i></h1>
                    <h1><big><big><big><i class="fas fa-envelope"></i></big></big></big></h1><br></br>
                    .  <br></br>
    
                    <Modal show={show1} onHide={handleClose1} centered >
                        <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>RTS News</b></Modal.Header>
                            <Modal.Body>
                            <b>[BTS] - ประกาศ !!! ปิดสถานี สายสีเขียวอ่อน E04 อโศก Asok || Update 15/11/2021</b>
                            <br></br>
                            <hr></hr>
                            <center><img src="images/BTS-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                            เนื่องจากมีการก่อสร้างยานอวกาศ BNK48 เตรียมอพยพไปดวงจันทร์ในบริเวณดังกล่าว เพื่อไม่ให้เป็นการรบกวนการก่อสร้าง และสร้างความวุ่นวายแก่ผู้ใช้บริการ ทาง BTS จึงขอ<b>ปิดสถานี</b> สายสีเขียวอ่อน E04 อโศก Asok ตั้งแต่<b>วันที่ 22 พ.ย. 2564 เป็นต้นไป</b> อย่างไม่มีกำหนด
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose1}>
                                    OK
                                </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>RTS News</b></Modal.Header>
                            <Modal.Body>
                            <b>[MRT] - ประกาศ !!! ปิดสถานี สายสีน้ำเงิน BL21 เพชรบุรี Phetchaburi || Update 15/11/2021</b>
                            <br></br>
                            <hr></hr>
                            <center><img src="images/MRT-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                            เนื่องจากมีการก่อสร้างยานอวกาศ BNK48 เตรียมอพยพไปดวงจันทร์ในบริเวณดังกล่าว เพื่อไม่ให้เป็นการรบกวนการก่อสร้าง และสร้างความวุ่นวายแก่ผู้ใช้บริการ ทาง MRT จึงขอ<b>ปิดสถานี</b> สายสีน้ำเงิน BL21 เพชรบุรี Phetchaburi ตั้งแต่<b>วันที่ 22 พ.ย. 2564 เป็นต้นไป</b> อย่างไม่มีกำหนด
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose2}>
                                    OK
                                </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>RTS News</b></Modal.Header>
                            <Modal.Body>
                            <b>[ARL] - ประกาศ !!! ปิดสถานี สายเชื่อมท่าอากาศยาน A06 มักกะสัน Makkasan || Update 15/11/2021</b>
                            <br></br>
                            <hr></hr>
                            <center><img src="images/ARL-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                            เนื่องจากมีการก่อสร้างยานอวกาศ BNK48 เตรียมอพยพไปดวงจันทร์ในบริเวณดังกล่าว เพื่อไม่ให้เป็นการรบกวนการก่อสร้าง และสร้างความวุ่นวายแก่ผู้ใช้บริการ ทาง ARL จึงขอ<b>ปิดสถานี</b> สายเชื่อมท่าอากาศยาน A06 มักกะสัน Makkasan ตั้งแต่<b>วันที่ 22 พ.ย. 2564 เป็นต้นไป</b> อย่างไม่มีกำหนด
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose3}>
                                    OK
                                </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={show4} onHide={handleClose4} centered>
                    <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>RTS News</b></Modal.Header>
                            <Modal.Body>
                            <b>[BTS] - ประกาศ !!! แจ้งจับ นายบีทีเอส ข้อหาแสดงละครบนรางรถไฟ  || Update 14/11/2021</b>
                            <br></br>
                            <hr></hr>
                            <center><img src="images/BTS-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                            ในวันที่ 10 พ.ย. 2564 ที่ผ่านมาบริเวณสถานี S05 สุรศักดิ์ Surasak สายสีเขียวเข้มของรถไฟฟ้า BTS นายบีทีเอส ได้ลงไปบริเวณเขตต้องห้ามของสถานี ซึ่งก็คือรางรถไฟที่มีไฟฟ้าความแรงสูง เพื่อทำการแสดง และถ่ายวิดิโอลงใน TikTok ทั้งนี้ทางผู้ดูแลของสถานีได้ทำการแจ้งข้อหาทำการละเมิดฝ่าฝืนกฎของสถานี พร้อมได้ตักเตือน และส่งตัวให้โรงพักเป็นลำดับต่อไป
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose4}>
                                    OK
                                </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={show5} onHide={handleClose5} centered>
                    <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>RTS News</b></Modal.Header>
                            <Modal.Body>
                            <b>[MRT] - ทั่วไป !!! ชี่นชม นายเออาร์แอล หลังคว้ารางวัลนักเดินทางดีเด่น  || Update 14/11/2021</b>
                            <br></br>
                            <hr></hr>
                            <center><img src="images/MRT-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                            นายเออาร์แอล ผู้ที่สะสมยอดการเดินทางต่อสถานีในสายรถไฟฟ้า MRT ได้เยอะที่สุดในปี 2563 โดยเก็บสถานีที่ผ่านไปได้ 534 สถานี ทั้งนี้เจ้าตัวเผยหลังได้รับรางวัล เจ้าตัวยังคงที่จะทำลายสถิติตัวเองต่อไป
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose5}>
                                    OK
                                </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={show6} onHide={handleClose6} centered>
                    <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>RTS News</b></Modal.Header>
                            <Modal.Body>
                            <b>[ARL] - ทั่วไป !!! นายเอ็มอาร์ที ไปกองฉลากไม่ทัน เหตุจากตกขบวนรถ  || Update 12/11/2021</b>
                            <br></br>
                            <hr></hr>
                            <center><img src="images/ARL-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                            นายเอ็มอาร์ที ผู้ถูกรางวัลจากกองฉลากกินแบ่งรัฐบาล ในวันที่ 1 พ.ย. 2564 ที่ผ่านมานายเอ็มอาร์ที พบว่าตัวเองถูกรางวัลจากกองฉลากกินแบ่งรัฐบาลในงวดนี้ จึงรีบออกจากบ้าน และเดินทางไปยัง สถานี A04 หัวหมาก Hua Mak แต่เนื่องด้วยในช่วงเวลาขณะนั้นเป็นช่วงที่มีผู้ใช้งานเป็นจำนวนวมาก ทำให้นายเอ็มอาร์ที เดินชนและตกรถไฟขบวนแรก และเป็นขบวนสุดท้ายของวันนั้น และไม่ได้ไปขึ้นรางวัล ต้องหาวันไปใหม่
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose6}>
                                    OK
                                </Button>
                        </Modal.Footer>
                    </Modal>


                    </Col>
                    <Col style={{borderRadius:"20px",width:"600px",height:"700px",margin:"10px",backgroundColor:"#fad4ae"}}>
                    <br></br><h1><i class="fas fa-info"></i> Infomation</h1><hr></hr>
                    
                    <marquee  behavior="scroll" direction="up" scrollamount="2" style={{textAlign:"left", border:"0",backgroundColor:"#fff", borderRadius:"20px"}}>
                    <p align="center"><b>[RTS] Rail Transport System</b> </p>
                    <i class="fas fa-comment-dots"></i> RTS ขอต้อนรับทุกท่านเข้าสู่ โลกแห่งการไร้พรหมแดน <br></br>
                    ที่จะพาทุกคนสะดวกและง่ายต่อการเดินทาง หากมีข้อสงสัย <br></br>
                    ติดต่อเราได้ที่ <b>Call center 02-999-9999  และช่องทางออนไลน์</b> 
                    <b>   info@railtransportsystems.com</b><br></br><br></br>

                    <i class="fas fa-comment-dots"></i> เธอห่วงใครก็ไม่เท่าเราห่วงเธอ แต่ RTS ห่วงคุณเสมอ<br></br>
                    เพื่อความปลอดภัยของผู้ใช้งาน กรุณาเก็บรหัสผ่านไว้ อย่าให้ใครเป็นการส่วนตัว ไม่บอกต่อคนอื่น ไม่ว่าจะเจตนาอย่างไร<br></br>
                    ด้วยความปรารถนาจาก RTS<br></br><br></br>

                    <i class="fas fa-comment-dots"></i> หน้าร้อนมันหนาว หน้าเรามันฟิน RTS พาคุณไปดื่มด่ำกับ<br></br>
                    โปรโมชั่นที่ร้อนแรงในวินาทีนี้ กับโปรโมชั่น หน้าหนาวสุดฟิน มาฟินกับ RTS <br></br><br></br> 
                    ฟินกับส่วนลดการเดินทาง <b>RTS ลดให้คุณทันที 10%</b><br></br>
                    เมื่อซื้อตั๋วกับทางเรา <b>วันนี้ถึง 31 ธันวาคม ศกนี้</b><br></br><br></br>

                    <center><img src="images/RTS-LOGO.png" width = '50' height='50'style={{textAlign:"center"}} /><br></br> <big><big><big><b>RTS</b></big></big></big></center> 


                   </marquee>
                   <hr></hr>
                   <br></br>
                    </Col>
                    <Col style={{borderRadius:"20px",width:"600px",height:"700px",margin:"10px",backgroundColor:"#ff7b7b",}}>
                    <br></br><h1><i class="fas fa-comments"></i> RTS Q&A</h1><hr></hr>

                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>ระบบ RTS คืออะไร</Accordion.Header>
                            <Accordion.Body>
                            55555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>รถไฟฟ้าในระบบ RTS มีเส้นทางการให้บริการกี่สาย</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>ฉันจะทราบได้อย่างไร ว่าฉันจะเดินทางไปยังจุดหมายได้ถูกต้อง</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>ระบบสมาชิก RTS คืออะไร ทำอะไรได้บ้าง </Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>ฉันจะซื้อตั๋วผ่านระบบ RTS ได้อย่างไร</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>หากมีข้อสงสัยเกี่ยวกับระบบ ฉันจะติดต่อใคร</Accordion.Header>
                            <Accordion.Body>
                            555555555555555555555
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                

                    </Col>
                </Row>

                <Row>
                    <Col style={{borderRadius:"20px",width:"600px",height:"600px",margin:"10px",backgroundColor:"#a6e3e9",}}>
                    <br></br><h1><i class="fas fa-map-marked-alt"></i> RTS MAP</h1><hr></hr>
                    <div style={{textAlign:"center"}}>
                    
                    <a href="https://rail-transport-system.netlify.app/images/mapfull2564.jpg" target='_blank'>
                    <img src='images/mapfull2564.jpg' style={{width: 600,height: 480,borderStyle: "solid",borderRadius: "20px",borderWidth: "10px",borderColor:"#8FB1EB"}} draggable="false" dragstart="false" class="unselectable">
                    </img>
                    </a>
                    </div>
                    </Col>

                    <Col style={{borderRadius:"20px",margin:"10px",backgroundColor:"#95e3bb",}}>
                        <br></br><h1><i class="fas fa-subway"></i> ALL TRAIN</h1>
                        
                        <Col>
                        <hr></hr>
                        </Col>
                        
            
                        <Col>
                            <div style={{textAlign:"left",backgroundColor:"#fff", borderRadius:"20px"}}>
                            <Spinner animation="grow" variant="dark" size="sm"/> <b>[BTS] - Bangkok Mass Transit System</b> <Button variant="link" onClick={handleShow7}><i class="fas fa-caret-right"></i> <b>สายสีเขียวอ่อน Light Green line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[BTS] - Bangkok Mass Transit System</b> <Button variant="link" onClick={handleShow8}><i class="fas fa-caret-right"></i> <b>สายสีเขียวเข้ม Dark Green line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[BTS] - Bangkok Mass Transit System</b> <Button variant="link" onClick={handleShow9}><i class="fas fa-caret-right"></i> <b>สายสีทอง Golden Line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[BTS] - Bangkok Mass Transit System</b> <Button variant="link" onClick={handleShow10}><i class="fas fa-caret-right"></i> <b>สายสีเหลือง Yellow Line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[BTS] - Bangkok Mass Transit System</b> <Button variant="link" onClick={handleShow11}><i class="fas fa-caret-right"></i> <b>สายสีชมพู Pink Line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[MRT] - Mass Rapid Transit</b> <Button variant="link" onClick={handleShow12}><i class="fas fa-caret-right"></i> <b>สายสีน้ำเงิน Blue Line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[MRT] - Mass Rapid Transit</b> <Button variant="link" onClick={handleShow13}><i class="fas fa-caret-right"></i> <b>สายสีม่วง Purple Line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[MRT] - Mass Rapid Transit</b> <Button variant="link" onClick={handleShow14}><i class="fas fa-caret-right"></i> <b>สายสีส้ม Orange Line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[MRT] - Mass Rapid Transit</b> <Button variant="link" onClick={handleShow15}><i class="fas fa-caret-right"></i> <b>สายสีแดง Red Line</b></Button><br></br>
                            <Spinner animation="grow" variant="dark" size="sm" /> <b>[ARL] - Airport Rail Link</b> <Button variant="link" onClick={handleShow16}><i class="fas fa-caret-right"></i> <b>แอร์พอร์ตลิงก์ Airport Line</b></Button><br></br>
                            
                            <Modal show={show7} onHide={handleClose7} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[BTS] - Bangkok Mass Transit System</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีเขียวอ่อน Light Green line</b></center>
                                    <hr></hr>
                                    <center><img src="images/BTS-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> BTS - Bangkok Mass Transit System<br></br>
                                    <b>จำนวนสถานี :</b> 48<br></br>
                                    N24 คูคต Khu Khot<br></br>
                                    N23 แยก คปอ. Yaek Kor Por Aor<br></br>
                                    N22 พิพิธภัณฑ์กองทัพอากาศ Royal Thai Air Force Museum<br></br>
                                    N21 โรงพยาบาลภูมิพลอดุลยเดช Bhumibol Adulyadej Hospital<br></br>
                                    N20 สะพานใหม่ Saphan Mai<br></br>
                                    N19 สายหยุด Sai Yud<br></br>
                                    N18 พหลโยธิน 59 Phahon Yothin 59<br></br>
                                    N17 วัดพระศรีมหาธาตุ Wat Phra Sri Mahathat<br></br>
                                    N16 กรมทหารราบที่ 11 11th Infantry Regiment<br></br>
                                    N15 บางบัว Bang Bua<br></br>
                                    N14 กรมป่าไม้ Royal Forest Department<br></br>
                                    N13 มหาวิทยาลัยเกษตรศาสตร์ Kasetsart University<br></br>
                                    N12 เสนานิคม Sena Nikhom<br></br>
                                    N11 รัชโยธิน Ratchayothin<br></br>
                                    N10 พหลโยธิน 24 Phahon Yothin 24<br></br>
                                    N09 ห้าแยกลาดพร้าว Ha Yaek Lat Phrao<br></br>
                                    N08 หมอชิต Mo Chit<br></br>
                                    N07 สะพานควาย Saphan Khwai<br></br>
                                    N06 เสนาร่วม Sena Ruam<br></br>
                                    N05 อารีย์ Ari<br></br>
                                    N04 สนามเป้า Sanam Pao<br></br>
                                    N03 อนุสาวรีย์ชัยสมรภูมิ Victory Monument<br></br>
                                    N02 พญาไท Phaya Thai<br></br>
                                    N01 ราชเทวี Ratchathewi<br></br>
                                    CEN01 สยาม Siam<br></br>
                                    E01 ชิดลม Chit Lom<br></br>
                                    E02 เพลินจิต Phloen Chit<br></br>
                                    E03 นานา Nana<br></br>
                                    E04 อโศก Asok<br></br>
                                    E05 พร้อมพงษ์ Phrom Phong<br></br>
                                    E06 ทองหล่อ Thong Lo<br></br>
                                    E07 เอกมัย Ekkamai<br></br>
                                    E08 พระโขนง Phra Khanong<br></br>
                                    E09 อ่อนนุช On Nut<br></br>
                                    E10 บางจาก Bang Chak<br></br>
                                    E11 ปุณณวิถี Punnawithi<br></br>
                                    E12 อุดมสุข Udom Suk<br></br>
                                    E13 บางนา Bang Na<br></br>
                                    E14 แบริ่ง Bearing<br></br>
                                    E15 สำโรง Samrong<br></br>
                                    E16 ปู่เจ้า Pu Chao<br></br>
                                    E17 ช้างเอราวัณ Chang Erawan<br></br>
                                    E18 โรงเรียนนายเรือ Royal Thai Naval Academy<br></br>
                                    E19 ปากน้ำ Pak Nam<br></br>
                                    E20 ศรีนครินทร์ Srinagarindra<br></br>
                                    E21 แพรกษา Phraek Sa<br></br>
                                    E22 สายลวด Sai Luat<br></br>
                                    E23 เคหะฯ Kheha<br></br>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose7}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show8} onHide={handleClose8} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[BTS] - Bangkok Mass Transit System</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีเขียวเข้ม Dark Green line</b></center>
                                    <hr></hr>
                                    <center><img src="images/BTS-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> BTS - Bangkok Mass Transit System<br></br>
                                    <b>จำนวนสถานี :</b> 14 <br></br>
                                    W01 สนามกีฬาแห่งชาติ National Stadium<br></br>
                                    CEN02 สยาม Siam<br></br>
                                    S01 ราชดำริ Ratchadamri<br></br>
                                    S02 ศาลาแดง Sala Daeng<br></br>
                                    S03 ช่องนนทรี Chong Nonsi<br></br>
                                    S04 เซนต์หลุยส์ Saint Louis<br></br>
                                    S05 สุรศักดิ์ Surasak<br></br>
                                    S06 สะพานตากสิน Saphan Taksin<br></br>
                                    S07 กรุงธนบุรี Krung Thon Buri<br></br>
                                    S08 วงเวียนใหญ่ Wongwian Yai<br></br>
                                    S09 โพธิ์นิมิตร Pho Nimit<br></br>
                                    S10 ตลาดพลู Talat Phlu<br></br>
                                    S11 วุฒากาศ Wutthakat<br></br>
                                    S12 บางหว้า Bang Wa<br></br>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose8}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show9} onHide={handleClose9} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[BTS] - Bangkok Mass Transit System</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีทอง Golden Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/BTS-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> BTS - Bangkok Mass Transit System<br></br>
                                    <b>จำนวนสถานี :</b> 4 <br></br>
                                    G01 กรุงธนบุรี Krung Thonburi<br></br> 
                                    G02 เจริญนคร (ไอคอนสยาม) Charoen Nakhon<br></br>
                                    G03 คลองสาน Khlong San<br></br>
                                    G04 ประชาธิปก Prajadhipok<br></br>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose9}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show10} onHide={handleClose10} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[BTS] - Bangkok Mass Transit System</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีเหลือง Yellow Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/BTS-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> BTS - Bangkok Mass Transit System<br></br>
                                    <b>จำนวนสถานี :</b> 25 <br></br>
                                    YLEX01 พหลโยธิน 24 Phahon Yothin 24<br></br>
                                    YLEX02 จันทรเกษม Chan Kasem<br></br>
                                    YL01 ลาดพร้าว Lat Phrao<br></br>
                                    YL02 ภาวนา Phawana<br></br>
                                    YL03 โชคชัย 4 Chok chai 4<br></br>
                                    YL04 ลาดพร้าว 71 Lat Phrao 71<br></br>
                                    YL05 ลาดพร้าว 83 Lat Phrao 83<br></br>
                                    YL06 มหาดไทย Mahat Thai<br></br>
                                    YL07 ลาดพร้าว 101 Lat Phrao 101<br></br>
                                    YL08 บางกะปิ Bang Kapi<br></br>
                                    YL09 แยกลำสาลี Yaek Lam Sali<br></br>
                                    YL10 ศรีกรีฑา Si Kritha<br></br>
                                    YL11 พัฒนาการ Phattanakarn<br></br>
                                    YL12 กลันตัน Kalantan<br></br>
                                    YL13 ศรีนุช Si Nut<br></br>
                                    YL14 ศรีนครินทร์ 38 Srinagarindra 38<br></br>
                                    YL15 สวนหลวง ร. 9 Suan Luang Ro 9<br></br>
                                    YL16 ศรีอุดม Si Udom<br></br>
                                    YL17 ศรีเอี่ยม Si Iam<br></br>
                                    YL18 ศรีลาซาล Si La Salle<br></br>
                                    YL19 ศรีแบริ่ง Si Bearing<br></br>
                                    YL20 ศรีด่าน Si Dan<br></br>
                                    YL21 ศรีเทพา Si Thepha<br></br>
                                    YL22 ทิพวัล Thipphawan<br></br>
                                    YL23 สำโรง Samrong<br></br>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose10}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show11} onHide={handleClose11} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[BTS] - Bangkok Mass Transit System</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีชมพู Pink Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/BTS-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> BTS - Bangkok Mass Transit System<br></br>
                                    <b>จำนวนสถานี :</b> 30 <br></br>
                                    PK01 ศูนย์ราชการนนทบุรี Nonthaburi Civic Center<br></br>
                                    PK02 แคราย Khae Rai<br></br>
                                    PK03 สนามบินน้ำ Sanambin Nam<br></br>
                                    PK04 สามัคคี Samakkhi<br></br>
                                    PK05 กรมชลประทาน Royal Irrigation Department<br></br>
                                    PK06 แยกปากเกร็ด Yeak Pak Kret<br></br>
                                    PK07 เลี่ยงเมืองปากเกร็ด Pak Kret Bypass<br></br>
                                    PK08 แจ้งวัฒนะ-ปากเกร็ด 28 Chaeng Wattana-Pak Kret 28<br></br>
                                    PK09 เมืองทองธานี Muang Thong Thani<br></br>
                                    PK10 ศรีรัช Si Rat<br></br>
                                    PK11 แจ้งวัฒนะ 14 Chaeng Watthana 14<br></br>
                                    PK12 ศูนย์ราชการเฉลิมพระเกียรติ Government Complex<br></br>
                                    PK13 โทรคมนาคมแห่งชาติ TOT<br></br>
                                    PK14 หลักสี่ Lak Si<br></br>
                                    PK15 ราชภัฏพระนคร Rajabhat Phranakhon<br></br>
                                    PK16 วัดพระศรีมหาธาตุ Wat Phra Sri Mahathat<br></br>
                                    PK17 รามอินทรา 3 Ram Inthra 3<br></br>
                                    PK18 ลาดปลาเค้า Lat Pla Khao<br></br>
                                    PK19 รามอินทรา กม.4 Ram Inthra Km.4<br></br>
                                    PK20 มัยลาภ Maiyalap<br></br>
                                    PK21 วัชรพล Vatcharaphon<br></br>
                                    PK22 รามอินทรา กม.6 Ram Inthra Km.6<br></br>
                                    PK23 คู้บอน Khu Bon<br></br>
                                    PK24 รามอินทรา กม.9 Ram Inthra Km.9<br></br>
                                    PK25 วงแหวนรามอินทรา Outer Ring Road - Ram Inthra<br></br>
                                    PK26 นพรัตน์ Nopparat<br></br>
                                    PK27 บางชัน Bang Chan<br></br>
                                    PK28 เศรษฐบุตรบำเพ็ญ Setthabutbamphen<br></br>
                                    PK29 ตลาดมีนบุรี Min Buri Market<br></br>
                                    PK30 มีนบุรี Min Buri<br></br>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose11}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show12} onHide={handleClose12} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[MRT] - Mass Rapid Transit</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีน้ำเงิน Blue Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/MRT-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> MRT - Mass Rapid Transit<br></br>
                                    <b>จำนวนสถานี :</b> 39 <br></br>
                                    BL01 ท่าพระ Tha Phra<br></br>
                                    BL02 จรัญฯ 13 Charan 13<br></br>
                                    BL03 ไฟฉาย Fai Chai<br></br>
                                    BL04 บางขุนนนท์ Bang Khun Non<br></br>
                                    BL05 บางยี่ขัน Bang Yi Khan<br></br>
                                    BL06 สิรินธร Sirindhorn<br></br>
                                    BL07 บางพลัด Bang Phlat<br></br>
                                    BL08 บางอ้อ Bang O<br></br>
                                    BL09 บางโพ Bang Pho<br></br>
                                    BL10 เตาปูน Tao Poon<br></br>
                                    BL11 บางซื่อ Bang Sue<br></br>
                                    BL12 กำแพงเพชร Kamphaeng Phet<br></br>
                                    BL13 สวนจตุจักร Chatuchak Park<br></br>
                                    BL14 พหลโยธิน Phahon Yothin<br></br>
                                    BL15 ลาดพร้าว Lat Phrao<br></br>
                                    BL16 รัชดาภิเษก Ratchadaphisek<br></br>
                                    BL17 สุทธิสาร Sutthisan<br></br>
                                    BL18 ห้วยขวาง Huai Khwang<br></br>
                                    BL19 ศูนย์วัฒนธรรมแห่งประเทศไทย Thailand Cultural Centre<br></br>
                                    BL20 พระราม 9 Phra Ram 9<br></br>
                                    BL21 เพชรบุรี Phetchaburi<br></br>
                                    BL22 สุขุมวิท Sukhumvit<br></br>
                                    BL23 ศูนย์การประชุมแห่งชาติสิริกิติ์ Queen Sirikit National Convention Centre<br></br>
                                    BL24 คลองเตย Khlong Toei<br></br>
                                    BL25 ลุมพินี Lumphini<br></br>
                                    BL26 สีลม Si Lom<br></br>
                                    BL27 สามย่าน Sam Yan<br></br>
                                    BL28 หัวลำโพง Hua Lamphong<br></br>
                                    BL29 วัดมังกร Wat Mangkon<br></br>
                                    BL30 สามยอด Sam Yot<br></br>
                                    BL31 สนามไชย Sanam Chai<br></br>
                                    BL32 อิสรภาพ Itsaraphap<br></br>
                                    BL01-L ท่าพระ Tha Phra<br></br>
                                    BL33 บางไผ่ Bang Phai<br></br>
                                    BL34 บางหว้า Bang Wa<br></br>
                                    BL35 เพชรเกษม 48 Phetkasem 48<br></br>
                                    BL36 ภาษีเจริญ Phasi Charoen<br></br>
                                    BL37 บางแค Bang Khae<br></br>
                                    BL38 หลักสอง Lak Song<br></br>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose12}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show13} onHide={handleClose13} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[MRT] - Mass Rapid Transit</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีม่วง Purple Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/MRT-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> MRT - Mass Rapid Transit<br></br>
                                    <b>จำนวนสถานี :</b> 33 <br></br>
                                    PP01 คลองบางไผ่ Khlong Bang Phai<br></br>
                                    PP02 ตลาดบางใหญ่ Talad Bang Yai<br></br>
                                    PP03 สามแยกบางใหญ่ Sam Yaek Bang Yai<br></br>
                                    PP04 บางพลู Bang Phlu<br></br>
                                    PP05 บางรักใหญ่ Bang Rak Yai<br></br>
                                    PP06 บางรักน้อย-ท่าอิฐ Bang Rak Noi Tha It<br></br>
                                    PP07 ไทรม้า Sai Ma<br></br>
                                    PP08 สะพานพระนั่งเกล้า Phra Nang Klao Bridge<br></br>
                                    PP09 แยกนนทบุรี 1 Yaek Nonthaburi 1<br></br>
                                    PP10 บางกระสอ Bang Krasor<br></br>
                                    PP11 ศูนย์ราชการนนทบุรี Nonthaburi Civic Center<br></br>
                                    PP12 กระทรวงสาธารณสุข Ministry of Public Health<br></br>
                                    PP13 แยกติวานนท์ Yaek Tiwanon<br></br>
                                    PP14 วงศ์สว่าง Wong Sawang<br></br>
                                    PP15 บางซ่อน Bang Son<br></br>
                                    PP16 เตาปูน Tao Poon<br></br>
                                    PP17 รัฐสภา Parliament House<br></br>
                                    PP18 ศรีย่าน Sri Yan<br></br>
                                    PP19 วชิรพยาบาล Vajira Hospital<br></br>
                                    PP20 หอสมุดแห่งชาติ National Library<br></br>
                                    PP21 บางขุนพรหม Bang Khun Phrom<br></br>
                                    PP22 ผ่านฟ้า Phan Fa<br></br>
                                    PP23 สามยอด Sam Yot
                                    PP24 สะพานพุทธฯ Memorial Bridge<br></br>
                                    PP25 วงเวียนใหญ่ Wong Wian Yai<br></br>
                                    PP26 สำเหร่ Sam Rae<br></br>
                                    PP27 ดาวคะนอง Dao Khanong<br></br>
                                    PP28 บางปะแก้ว Bang Pakaeo<br></br>
                                    PP29 บางปะกอก Bang Pakok<br></br>
                                    PP30 สะพานพระราม 9 Rama 9 Bridge<br></br>
                                    PP31 ราษฎร์บูรณะ Rat Burana<br></br>
                                    PP32 พระประแดง Phra Pradaeng<br></br>
                                    PP33 ครุใน Kru Nai<br></br>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose13}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show14} onHide={handleClose14} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[MRT] - Mass Rapid Transit</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีส้ม Orange Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/MRT-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> MRT - Mass Rapid Transit<br></br>
                                    <b>จำนวนสถานี :</b> 29 <br></br>
                                    OR29 แยกร่มเกล้า Yeak Rom Klao<br></br>
                                    OR28 มีนบุรี Min Buri<br></br>
                                    OR27 เคหะรามคำแหง Kheha Ramkhamhaeng<br></br>
                                    OR26 มีนพัฒนา Min Phatthana<br></br>
                                    OR25 ราษฎร์พัฒนา Rat Phatthana<br></br>
                                    OR24 น้อมเกล้า Nom Klao<br></br>
                                    OR23 สัมมากร Sammakorn<br></br>
                                    OR22 คลองบ้านม้า Khlong Ban Ma<br></br>
                                    OR21 ศรีบูรพา Sri Burapha<br></br>
                                    OR20 แยกลำสาลี  Yeak Lam Sali<br></br>
                                    OR19 รามคำแหง 34  Ramkhamhaeng 34<br></br>
                                    OR18 ราชมังคลา Rajamangala<br></br>
                                    OR17 มหาวิทยาลัยรามคำแหง Ramkhamhaeng University<br></br>
                                    OR16 รามคำแหง 12 Ramkhamhaeng 12<br></br>
                                    OR15 วัดพระราม 9 Wat Phra Ram 9<br></br>
                                    OR14 รฟม. MRTA<br></br>
                                    OR13 ศูนย์วัฒนธรรมแห่งประเทศไทย Thailand Cultural Centre<br></br>
                                    OR12 ประชาสงเคราะห์ Pracha Songkhro<br></br>
                                    OR11 ดินแดง Din Daeng<br></br>
                                    OR10 รางน้ำ Rang Nam<br></br>
                                    OR09 ราชปรารภ Ratchaprarop<br></br>
                                    OR08 ประตูน้ำ Pratunam<br></br>
                                    OR07 ราชเทวี Ratchathewi<br></br>
                                    OR06 ยมราช Yommarat<br></br>
                                    OR05 หลานหลวง Lan Luang<br></br>
                                    OR04 อนุสาวรีย์ประชาธิปไตย Democracy Monument<br></br>
                                    OR03 สนามหลวง Sanam Luang<br></br>
                                    OR02 ศิริราช Siriraj<br></br>
                                    OR01 บางขุนนนท์ Bang Khun Non<br></br>
                                   
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose14}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show15} onHide={handleClose15} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[MRT] - Mass Rapid Transit</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีแดง Red Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/MRT-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> MRT - Mass Rapid Transit<br></br>
                                    <b>จำนวนสถานี :</b> 10 <br></br>
                                    RN10 รังสิต Rangsit<br></br>
                                    RN09 หลักหก (มหาวิทยาลัยรังสิต) Lak Hok (Rangsit University)<br></br>
                                    RN08 ดอนเมือง Don Mueang<br></br>
                                    RN07 การเคหะ Kan Kheha<br></br>
                                    RN06 หลักสี่ Lak Si<br></br>
                                    RN05 ทุ่งสองห้อง Thung Song Hong<br></br>
                                    RN04 บางเขน Bang Khen<br></br>
                                    RN03 วัดเสมียนนารี Wat Samian Nari<br></br>
                                    RN02 จตุจักร Chatuchak<br></br>
                                    RN01 บางซื่อ Bang Sue<br></br>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose15}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show16} onHide={handleClose16} centered>
                                <Modal.Header closeButton><i class="fas fa-newspaper"></i><p>. </p><b>[ARL] - Airport Rail Link</b></Modal.Header>
                                    <Modal.Body>
                                    <center><b>สายสีทอง Golden Line</b></center>
                                    <hr></hr>
                                    <center><img src="images/ARL-Logo.png" width = '100' height='auto'style={{textAlign:"center", margin:"20px"}}></img></center>
                                    
                                    <b>ผู้ให้บริการรถไฟฟ้า :</b> ARL - Airport Rail Link<br></br>
                                    <b>จำนวนสถานี :</b> 8 <br></br>
                                    A01 สุวรรณภูมิ Suvarnabhumi (Airport)<br></br>
                                    A02 ลาดกระบัง Lat Krabang<br></br>
                                    A03 บ้านทับช้าง Ban Thap Chang<br></br>
                                    A04 หัวหมาก Hua Mak<br></br>
                                    A05 รามคำแหง Ramkhamhaeng<br></br>
                                    A06 มักกะสัน Makkasan<br></br>
                                    A07 ราชปรารภ Ratchaprarop<br></br>
                                    A08 พญาไท Phaya Thai<br></br>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose16}>
                                            OK
                                        </Button>
                                </Modal.Footer>
                            </Modal>

                            </div>
                        </Col>

                        <Col>
                          <hr></hr>
                        </Col>

                     
                        
                    </Col>

                </Row>
                
                {/* <Row>
                    <Col style={{borderRadius:"20px",margin:"10px",backgroundColor:"#dcceed",width:"600px",height:"600px"}}>
                        <br></br><h1><i class="fas fa-address-card"></i> RTS MEMBERSHIPS</h1><hr></hr>
                        <Col style={{borderRadius:"20px",width:"1000px",height:"300px",margin:"10px",backgroundColor:"#fad4ae"}}>
                        1
                        </Col>
                        <Col>
                        2
                        </Col>


                    </Col>


                </Row> */}
            </Container>
           
           
           
           <div> 
            
           </div>
      

            
            <br></br>
        </div>
    )
}

export default TrainInformation
