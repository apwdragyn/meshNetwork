Search.setIndex({docnames:["config","cpp","design","hardware","index","mesh","mesh.generic","mesh.interface","python","software","unittests","vhdl"],envversion:53,filenames:["config.rst","cpp.rst","design.rst","hardware.rst","index.rst","mesh.rst","mesh.generic.rst","mesh.interface.rst","python.rst","software.rst","unittests.rst","vhdl.rst"],objects:{"":{mesh:[5,0,0,"-"]},"mesh.generic":{checksum:[6,0,0,"-"],cmdDict:[6,0,0,"-"],cmdProcessor:[6,0,0,"-"],cmdStatus:[6,0,0,"-"],cmds:[6,0,0,"-"],commPorts:[6,0,0,"-"],commProcessor:[6,0,0,"-"],command:[6,0,0,"-"],commandMsg:[6,0,0,"-"],commandType:[6,0,0,"-"],constants:[6,0,0,"-"],customExceptions:[6,0,0,"-"],deserialize:[6,0,0,"-"],formationClock:[6,0,0,"-"],fpgaRadio:[6,0,0,"-"],gpio:[6,0,0,"-"],li1Radio:[6,0,0,"-"],li1RadioCmds:[6,0,0,"-"],msgParser:[6,0,0,"-"],multiProcess:[6,0,0,"-"],navigation:[6,0,0,"-"],nodeComm:[6,0,0,"-"],nodeConfig:[6,0,0,"-"],nodeController:[6,0,0,"-"],nodeExecutive:[6,0,0,"-"],nodeHeader:[6,0,0,"-"],nodeParams:[6,0,0,"-"],nodeState:[6,0,0,"-"],nodeTools:[6,0,0,"-"],pipeConn:[6,0,0,"-"],radio:[6,0,0,"-"],serialComm:[6,0,0,"-"],slipMsg:[6,0,0,"-"],slipMsgParser:[6,0,0,"-"],slipMsgParser_li1:[6,0,0,"-"],slipMsg_li1:[6,0,0,"-"],tdmaCmdDict:[6,0,0,"-"],tdmaCmdProcessor:[6,0,0,"-"],tdmaComm:[6,0,0,"-"],tdmaComm_fpga:[6,0,0,"-"],tdmaState:[6,0,0,"-"],tdmaTime:[6,0,0,"-"],testCmdDict:[6,0,0,"-"],testCmdProcessor:[6,0,0,"-"],udpRadio:[6,0,0,"-"],xbeeRadio:[6,0,0,"-"]},"mesh.generic.checksum":{calc8bitFletcherChecksum:[6,1,1,""],compareChecksum:[6,1,1,""]},"mesh.generic.cmdDict":{serialize_NodeCmds_ConfigRequest:[6,1,1,""],serialize_NodeCmds_GCSCmd:[6,1,1,""],serialize_NodeCmds_ParamUpdate:[6,1,1,""]},"mesh.generic.cmdProcessor":{checkCmdCounter:[6,1,1,""],updateNodeMsgRcvdStatus:[6,1,1,""]},"mesh.generic.cmdStatus":{CmdStatus:[6,2,1,""]},"mesh.generic.cmdStatus.CmdStatus":{accepted:[6,3,1,""],invalid:[6,3,1,""],notAllowed:[6,3,1,""],rejected:[6,3,1,""],staleTarget:[6,3,1,""]},"mesh.generic.commPorts":{getCommPorts:[6,1,1,""]},"mesh.generic.commProcessor":{CommProcessor:[6,2,1,""]},"mesh.generic.commProcessor.CommProcessor":{processMsg:[6,4,1,""]},"mesh.generic.command":{Command:[6,2,1,""]},"mesh.generic.command.Command":{serialize:[6,4,1,""]},"mesh.generic.commandMsg":{CommandMsg:[6,2,1,""]},"mesh.generic.commandMsg.CommandMsg":{parseCommand:[6,4,1,""]},"mesh.generic.commandType":{CommandType:[6,2,1,""]},"mesh.generic.commandType.CommandType":{header:[6,3,1,""],messageFormat:[6,3,1,""],packFormat:[6,3,1,""],serialize:[6,3,1,""]},"mesh.generic.customExceptions":{InvalidCmdCounter:[6,5,1,""],InvalidTDMASlotNumber:[6,5,1,""],NoCommandHeader:[6,5,1,""],NoCommandHeaderDefined:[6,5,1,""],NoSerialConnection:[6,5,1,""],NoSocket:[6,5,1,""]},"mesh.generic.deserialize":{deserialize:[6,1,1,""],parseBody:[6,1,1,""],parseHeader:[6,1,1,""]},"mesh.generic.formationClock":{FormationClock:[6,2,1,""]},"mesh.generic.formationClock.FormationClock":{getOffset:[6,4,1,""],getTDMATimer:[6,4,1,""],getTime:[6,4,1,""],resetTDMATimer:[6,4,1,""]},"mesh.generic.fpgaRadio":{FPGARadio:[6,2,1,""]},"mesh.generic.fpgaRadio.FPGARadio":{sendMsg:[6,4,1,""]},"mesh.generic.gpio":{input:[6,1,1,""],output:[6,1,1,""],setup:[6,1,1,""],wait_for_edge:[6,1,1,""]},"mesh.generic.li1Radio":{Li1Radio:[6,2,1,""]},"mesh.generic.li1Radio.Li1Radio":{createCommand:[6,4,1,""],createHeader:[6,4,1,""],createMsg:[6,4,1,""],createPayload:[6,4,1,""],parseAX25Msg:[6,4,1,""],parseCmdHeader:[6,4,1,""],parseCmdPayload:[6,4,1,""],parseCommand:[6,4,1,""],processRxBytes:[6,4,1,""],sendCommand:[6,4,1,""],sendMsg:[6,4,1,""]},"mesh.generic.msgParser":{MsgParser:[6,2,1,""]},"mesh.generic.msgParser.MsgParser":{encodeMsg:[6,4,1,""],parseMsgs:[6,4,1,""],parseSerialMsg:[6,4,1,""]},"mesh.generic.multiProcess":{getNewBytes:[6,1,1,""],getNewMsgs:[6,1,1,""]},"mesh.generic.navigation":{Navigation:[6,2,1,""],convertLatLonAlt:[6,1,1,""]},"mesh.generic.navigation.Navigation":{update:[6,4,1,""]},"mesh.generic.nodeComm":{NodeComm:[6,2,1,""]},"mesh.generic.nodeComm.NodeComm":{execute:[6,4,1,""],processMsgs:[6,4,1,""]},"mesh.generic.nodeConfig":{NodeConfig:[6,2,1,""],ParamMap:[6,2,1,""]},"mesh.generic.nodeConfig.NodeConfig":{calculateHash:[6,4,1,""],hashElem:[6,4,1,""],loadCommConfig:[6,4,1,""],loadConfigFile:[6,4,1,""],loadInterfaceConfig:[6,4,1,""],loadNodeConfig:[6,4,1,""],loadPlatformConfig:[6,4,1,""],readNodeId:[6,4,1,""]},"mesh.generic.nodeConfig.ParamMap":{findName:[6,4,1,""]},"mesh.generic.nodeController":{NodeController:[6,2,1,""]},"mesh.generic.nodeController.NodeController":{checkNodeLinks:[6,4,1,""],controlNode:[6,4,1,""],executeNode:[6,4,1,""],logData:[6,4,1,""],monitorFormationStatus:[6,4,1,""],monitorNodeUpdates:[6,4,1,""],processCommands:[6,4,1,""],processFCCommands:[6,4,1,""],processNodeCommands:[6,4,1,""]},"mesh.generic.nodeExecutive":{NodeExecutive:[6,2,1,""]},"mesh.generic.nodeExecutive.NodeExecutive":{executeNodeSoftware:[6,4,1,""],processFCMsg:[6,4,1,""],processNodeMsg:[6,4,1,""],sendFCCmds:[6,4,1,""],sendNodeCmds:[6,4,1,""]},"mesh.generic.nodeHeader":{createHeader:[6,1,1,""],packHeader:[6,1,1,""]},"mesh.generic.nodeParams":{NodeParams:[6,2,1,""]},"mesh.generic.nodeParams.NodeParams":{checkTimeOffset:[6,4,1,""],get_cmdCounter:[6,4,1,""],setupParams:[6,4,1,""]},"mesh.generic.nodeState":{LinkStatus:[6,2,1,""],NodeState:[6,2,1,""]},"mesh.generic.nodeState.LinkStatus":{BadLink:[6,3,1,""],GoodLink:[6,3,1,""],IndirectLink:[6,3,1,""],NoLink:[6,3,1,""]},"mesh.generic.nodeTools":{isBeaglebone:[6,1,1,""]},"mesh.generic.pipeConn":{PipeConn:[6,2,1,""]},"mesh.generic.pipeConn.PipeConn":{read:[6,4,1,""],write:[6,4,1,""]},"mesh.generic.radio":{Radio:[6,2,1,""],RadioMode:[6,2,1,""]},"mesh.generic.radio.Radio":{bufferRxMsg:[6,4,1,""],bufferTxMsg:[6,4,1,""],clearRxBuffer:[6,4,1,""],createMsg:[6,4,1,""],getRxBytes:[6,4,1,""],processRxBytes:[6,4,1,""],readBytes:[6,4,1,""],sendBuffer:[6,4,1,""],sendBytes:[6,4,1,""],sendCommand:[6,4,1,""],sendMsg:[6,4,1,""],setMode:[6,4,1,""],setOff:[6,4,1,""],setReceive:[6,4,1,""],setSleep:[6,4,1,""],setTransmit:[6,4,1,""]},"mesh.generic.radio.RadioMode":{off:[6,3,1,""],receive:[6,3,1,""],sleep:[6,3,1,""],transmit:[6,3,1,""]},"mesh.generic.serialComm":{SerialComm:[6,2,1,""]},"mesh.generic.serialComm.SerialComm":{bufferTxMsg:[6,4,1,""],parseMsgs:[6,4,1,""],processMsg:[6,4,1,""],readBytes:[6,4,1,""],readMsgs:[6,4,1,""],sendBuffer:[6,4,1,""],sendBytes:[6,4,1,""],sendMsg:[6,4,1,""]},"mesh.generic.slipMsg":{SLIPmsg:[6,2,1,""]},"mesh.generic.slipMsg.SLIPmsg":{decodeSLIPmsg:[6,4,1,""],decodeSLIPmsgContents:[6,4,1,""],encodeSLIPmsg:[6,4,1,""]},"mesh.generic.slipMsgParser":{SLIPMsgParser:[6,2,1,""]},"mesh.generic.slipMsgParser.SLIPMsgParser":{encodeMsg:[6,4,1,""],parseSerialMsg:[6,4,1,""]},"mesh.generic.slipMsgParser_li1":{SLIPMsgParser_Li1:[6,2,1,""]},"mesh.generic.slipMsgParser_li1.SLIPMsgParser_Li1":{encodeMsg:[6,4,1,""],parseSerialMsg:[6,4,1,""]},"mesh.generic.slipMsg_li1":{SLIPmsg_Li1:[6,2,1,""]},"mesh.generic.slipMsg_li1.SLIPmsg_Li1":{decodeSLIPmsg:[6,4,1,""],decodeSLIPmsgContents:[6,4,1,""],encodeSLIPmsg:[6,4,1,""]},"mesh.generic.tdmaCmdDict":{serialize_TDMACmds_BlockData:[6,1,1,""],serialize_TDMACmds_BlockTxConfirmed:[6,1,1,""],serialize_TDMACmds_BlockTxRequest:[6,1,1,""],serialize_TDMACmds_BlockTxRequestResponse:[6,1,1,""],serialize_TDMACmds_BlockTxStatus:[6,1,1,""],serialize_TDMACmds_LinkStatus:[6,1,1,""],serialize_TDMACmds_LinkStatusSummary:[6,1,1,""],serialize_TDMACmds_MeshStatus:[6,1,1,""],serialize_TDMACmds_TimeOffset:[6,1,1,""],serialize_TDMACmds_TimeOffsetSummary:[6,1,1,""]},"mesh.generic.tdmaCmdProcessor":{processMsg:[6,1,1,""],validateBlockTxRequest:[6,1,1,""]},"mesh.generic.tdmaComm":{TDMAComm:[6,2,1,""]},"mesh.generic.tdmaComm.TDMAComm":{checkBlockResponse:[6,4,1,""],clearDataBlock:[6,4,1,""],execute:[6,4,1,""],executeTDMAComm:[6,4,1,""],init:[6,4,1,""],initComm:[6,4,1,""],initMesh:[6,4,1,""],monitorBlockTx:[6,4,1,""],populateBlockResponseList:[6,4,1,""],readMsg:[6,4,1,""],resetBlockTxStatus:[6,4,1,""],resetTDMASlot:[6,4,1,""],sendBlock:[6,4,1,""],sendDataBlock:[6,4,1,""],sendMsg:[6,4,1,""],sendTDMACmds:[6,4,1,""],setTDMAMode:[6,4,1,""],sleep:[6,4,1,""],syncTDMAFrame:[6,4,1,""],updateMode:[6,4,1,""]},"mesh.generic.tdmaComm_fpga":{TDMAComm:[6,2,1,""]},"mesh.generic.tdmaComm_fpga.TDMAComm":{execute:[6,4,1,""],executeTDMAComm:[6,4,1,""],init:[6,4,1,""],initComm:[6,4,1,""],initMesh:[6,4,1,""],readMsg:[6,4,1,""],sendMsg:[6,4,1,""],sendTDMACmds:[6,4,1,""]},"mesh.generic.tdmaState":{TDMABlockTxStatus:[6,2,1,""],TDMAMode:[6,2,1,""],TDMAStatus:[6,2,1,""]},"mesh.generic.tdmaState.TDMABlockTxStatus":{"false":[6,3,1,""],active:[6,3,1,""],confirmed:[6,3,1,""],pending:[6,3,1,""]},"mesh.generic.tdmaState.TDMAMode":{blockRx:[6,3,1,""],blockTx:[6,3,1,""],failsafe:[6,3,1,""],init:[6,3,1,""],receive:[6,3,1,""],sleep:[6,3,1,""],transmit:[6,3,1,""]},"mesh.generic.tdmaState.TDMAStatus":{blockTx:[6,3,1,""],nominal:[6,3,1,""]},"mesh.generic.tdmaTime":{OffsetChecker:[6,2,1,""],SyncPulseMonitorThread:[6,2,1,""],getTimeOffset:[6,1,1,""]},"mesh.generic.tdmaTime.OffsetChecker":{checkOffset:[6,4,1,""]},"mesh.generic.tdmaTime.SyncPulseMonitorThread":{run:[6,4,1,""]},"mesh.generic.testCmdDict":{serialize_TestCmds_SendDataBlock:[6,1,1,""]},"mesh.generic.testCmdProcessor":{processMsg:[6,1,1,""]},"mesh.generic.udpRadio":{RadioMode:[6,2,1,""],UDPRadio:[6,2,1,""]},"mesh.generic.udpRadio.RadioMode":{off:[6,3,1,""],receive:[6,3,1,""],sleep:[6,3,1,""],transmit:[6,3,1,""]},"mesh.generic.udpRadio.UDPRadio":{readBytes:[6,4,1,""],sendBytes:[6,4,1,""]},"mesh.generic.xbeeRadio":{XbeeRadio:[6,2,1,""]},"mesh.generic.xbeeRadio.XbeeRadio":{setOff:[6,4,1,""],setReceive:[6,4,1,""],setSleep:[6,4,1,""],setTransmit:[6,4,1,""],wake:[6,4,1,""]},"mesh.interface":{nodeInterface_pb2:[7,0,0,"-"]},mesh:{"interface":[7,0,0,"-"],generic:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"2nd":[],"4ghz":3,"abstract":8,"boolean":6,"byte":[6,8],"case":[5,8],"class":[0,6,8,9],"default":[0,6],"enum":6,"final":3,"float":[0,6],"function":[2,3,4,6,8,9],"import":0,"int":[0,6],"new":[0,3,6,8,9],"return":6,"switch":6,"true":6,"try":6,"while":[0,5],For:[0,2,8,9],GPS:[2,3,9],IDs:6,PPS:3,The:[0,2,3,4,5,6,8,9],There:6,These:[0,6,8],Used:6,Using:[],abl:3,about:6,abov:2,absolut:0,accept:6,access:[2,6,8],accommod:2,accomplish:[],account:3,accuraci:3,across:[2,3,4,9],act:6,action:0,activ:6,actual:[5,6,8],adapt:9,add:[6,8],added:[0,3,8],adding:3,addit:4,addition:0,address:[0,6],administr:2,aerial:[3,4],affirm:[],afford:[3,9],after:0,again:2,against:6,agnost:4,aircraft:[4,9],algorithm:[],alia:6,all:[0,2,3,5,6,8,9],alloc:[2,6],allot:2,allow:[0,2,3,4,6,8,9],along:3,alreadi:2,also:[2,3,6,8,9],although:9,altitud:6,altitudedrift:[],altspac:[],among:6,amongst:[],amount:9,angl:[],ani:[2,3,4,6,8],anomali:[],anoth:6,aperiod:2,api:[4,5],append:6,appli:[],applic:[0,2,3,4,8],approach:9,architectur:[2,3,4],area:3,arg:6,argument:6,arrai:[0,6,9],arriv:[],asset:4,assign:2,assum:[0,2],astrodev:[3,6],asynchron:3,attach:[3,6],attempt:[0,6],attribut:6,automat:[],autonom:4,autopilot:[],avail:[0,2,3,8],awar:[],axi:[],back:[2,6,8],backward:8,badlink:6,bandwidth:3,baromet:[],base:[0,2,3,4,6,8,9],baselin:[],basic:[4,6],batch:[],baudrat:0,bbb:3,beaglebon:[3,9],becaus:[2,3,9],becom:2,been:[0,3,4,6,9],befor:[0,8],began:3,begin:[0,2,6],begun:4,behavior:[6,9],being:[0,2,3,4,6,8],below:[0,2,3],better:3,between:[0,3,4,5,6,8,9],bit:6,black:[3,9],block:[0,2,6],blockrx:6,blocktx:6,blocktxrequesttimeout:0,board:3,bool:0,both:[0,3],brand:3,broadcast:[2,3],broken:[0,2],buffer:[0,5,6],bufferflag:6,bufferrxmsg:6,buffertxmsg:6,built:2,burn:[],burnspac:[],bytelist:6,calc8bitfletcherchecksum:6,calcul:6,calculatehash:6,call:[2,3,6],can:[0,4,8,9],cancel:[],capabl:[2,3,4,9],cape:[3,6],cater:9,caus:4,center:4,central:4,certain:8,chang:[2,6],charact:6,check:[6,8],checkblockrespons:6,checkcmdcount:6,checknodelink:6,checkoffset:6,checksum:5,checksumbyt:6,checktimeoffset:6,chief:[],chiefid:[],chosen:[3,8],chunk:[],circl:[],clear:6,cleardatablock:6,clearrxbuff:6,clock:[2,3,6],clockwis:[],cmd:5,cmddata:6,cmddict:5,cmdid:6,cmdinterv:[0,6],cmdprocessor:5,cmdqueue:6,cmdstatu:5,code:[0,5,9],codebas:9,collabor:4,collect:[],collis:3,come:[1,11],comm:[0,6,8,9],command:[3,5,8,9],commandmsg:5,commandtyp:5,commconfig:6,commerci:3,commmand:6,common:[2,4,8],commport:5,commprefix:6,commprocess:8,commprocessor:5,commrdport:0,commtyp:[0,6],commun:[0,2,3,5,6,8,9],commwrport:0,compar:6,comparechecksum:6,compass:[],compat:8,compil:3,complet:2,complex:3,compon:[],comput:[0,3,5,6,8,9],concentr:3,config:6,configfil:6,configur:[2,4,6,8],confirm:6,conflict:6,conn:6,connect:[6,8],consist:[2,3],constant:5,constel:[3,4],consult:[],consum:[],consumpt:8,contain:[0,5,6,8,9],content:8,continu:[0,2,4],contrast:3,control:[0,3,4,5,6,8,9],controlnod:6,conveni:2,converg:3,convers:6,convert:6,convertlatlonalt:6,coordin:[3,8],correct:0,correspond:[],cot:3,could:[2,3,9],couldn:2,counter:6,crc16:6,crc:6,creat:[3,6,8,9],createcommand:6,createhead:6,createmsg:6,createpayload:6,creation:6,critic:3,cubesat:4,cuboid:[],cumul:6,current:[2,4,6,9],currenttim:6,custom:3,customexcept:5,cut:3,cycl:[0,2,6],data:[0,3,4,5,6,8,9],datablock:6,decim:0,declar:[],decod:6,decodeslipmsg:6,decodeslipmsgcont:6,defin:[6,8,9],definit:[],degre:[],delai:[0,2,3],delta:[],deltaelem:[],demand:4,demonstr:3,depend:[2,3,4],deploi:4,deploy:[3,9],deriv:[6,8,9],describ:[3,9],descript:[0,4],deseri:5,design:[3,4,9],desir:[0,3,6],desireddatar:0,destid:6,destin:[3,6],detail:[0,9],detect:[],determin:[2,6,8],develop:[2,3,4,8,9],devic:[],diagram:[],dict:6,dictionari:6,did:3,differ:[0,3,4,8,9],dip:6,direct:[3,6],directli:[2,4,6],directori:0,disabl:[],discard:3,distinguish:[],divid:9,divis:[2,6],document:[0,9],doe:6,done:[2,6],doubl:[0,6],down:[0,2,3],drift:[],drive:4,drop:2,dropout:2,due:[],duplic:3,dure:[0,2,3,9],dynam:4,each:[0,2,3,6,8],earli:[],eas:8,easili:[6,9],eastern:[],eccdelta:[],eccentr:[],edgetyp:6,effici:3,either:8,eivecsep:[],elaps:0,elem:6,element:6,elimin:4,embed:3,emploi:[2,3,4],enabl:[0,3,4],enablelength:0,encod:6,encodemsg:6,encodeslipmsg:6,end:[0,2,6],endlessli:2,ensur:[2,3,6],enter:2,entir:6,entireti:2,entiti:[2,6],entri:[6,8],enumer:6,environ:[4,9],equip:3,error:[],establish:[0,6],even:0,event:3,ever:6,everi:[],evolv:3,exampl:[0,2,8],exce:0,exceed:[],except:6,exchang:[4,5],execut:[0,3,6,9],executenod:6,executenodesoftwar:6,executetdmacomm:6,exist:[0,3],expand:8,expir:0,explicitli:8,explor:3,extern:3,extract:6,extrem:[],facilit:[3,6,8],fact:[],failsaf:[0,6],failur:[],fals:6,fcbaudrat:[0,6],fccomm:6,fccommdevic:[0,6],fccommwriteinterv:[0,6],fclogfil:6,featur:[8,9],fenc:[],ffu:[],field:[6,9],figur:2,file:[6,8,9],find:6,findnam:6,fine:[],firmwar:[],first:[0,3,6,8],fix:[],flag:[0,6],fletcher:6,flexibl:[2,8,9],flight:[3,4,5,6,8,9],flightmod:6,fly:[],follow:[3,9],form:[],format:[0,4,6,8],formationclock:5,formationcmd:[],formationmod:6,forth:2,forward:8,found:6,fpga:[0,3,6,8,9],fpgafailsafepin:0,fpgafifos:0,fpgaradio:5,frame:[0,2,3,6],frametim:6,framework:6,free:[],freeli:[],frequenc:3,from:[0,2,3,6,8,9],full:[8,9],further:[0,3,6],futur:4,fy2014:4,fy2015:4,fy2016:[],gate:9,gcscmd:6,gcsconfigrequest:6,gcspresent:0,gener:[4,5,8,9],geo:[],get:6,get_cmdcount:6,getcommport:6,getnewbyt:6,getnewmsg:6,getoffset:6,getrxbyt:6,gettdmatim:6,gettim:6,gettimeoffset:6,give:9,given:[6,9],global:2,goal:[3,4,9],going:2,good:6,goodlink:6,googl:5,gpio:[0,5],greater:[0,6],ground:4,grow:4,guard:0,gui:[],had:3,handl:[8,9],hardwar:[4,8,9],has:[0,3,4,5,6,8,9],hash:6,hashelem:6,have:[0,3,4,9],hazard:[],head:[],header:[3,6],headerbyt:6,headerin:6,health:[],heart:[],help:[3,4,8],helper:6,highest:[],horizont:[],host:[3,5,8],how:[6,8],howev:[2,3],http:[],human:[0,9],identifi:6,illustr:2,immedi:3,implement:[0,4,5,6,8,9],improv:3,incldelta:[],inclin:[],includ:[0,3,8,9],incom:[0,6,8],independ:3,index:4,indic:[0,6],indirectlink:6,individu:[0,2,3,6,9],inform:[0,6,8],inherit:9,init:6,initbound:6,initcomm:6,initi:[0,2,3,4,6,9],initmesh:6,initsyncbound:0,inittimetowait:0,input:6,inputdata:6,instanc:[6,8],instead:3,intact:2,integr:[2,3,6],intenum:6,inter:3,interfac:[3,4,5,6,8],interfer:[],internet:[6,8],interprocess:5,interrupt:4,interv:6,intervent:4,introduc:3,invalid:[0,6],invalidcmdcount:6,invalidtdmaslotnumb:6,isbeaglebon:6,isol:2,issu:[0,6],its:[2,3,8],itself:9,javascript:0,join:0,json:[0,8,9],just:[3,6,8],keep:9,know:8,label:[],languag:[8,9],larg:9,larger:4,last:6,lastmsgrcvdtim:6,lastmsgsenttim:6,laststateupdatetim:6,lasttxtim:6,latenc:[4,9],lateraldrift:[],latitud:6,layer:[3,8],layout:[],lead:[],leader:[],leadertimeout:[],length:[0,2,3,6],less:[3,4,6],let:[],level:[],leverag:3,li1radio:5,li1radiocmd:5,like:[6,8],likewis:8,limit:[],line:[6,8],lineangl:[],link:[0,3,6],linkstatu:6,linkstxinterv:0,linux:9,list:[0,6],listen:[0,2],lithium:6,load:[0,6,8],loadcommconfig:6,loadconfigfil:6,loadinterfaceconfig:6,loadnodeconfig:6,loadpixhawkconfig:[],loadplatformconfig:6,loadsatfcconfig:[],locat:6,log:6,logdata:6,logfil:6,logic:[0,3,5,6,8,9],loginterv:[0,6],logtim:6,longitud:6,look:[6,8],lose:2,loss:4,lost:2,low:[4,9],lowest:[],m_hash:6,made:6,mai:[6,9],main:[8,9],maintain:[2,6],major:[],make:[2,3,4,5,6,8],manag:[5,6],maneuv:[],mani:[3,9],manner:2,mass:3,master:[2,4],match:6,mate:3,maxbytestosend:6,maxeiangl:[],maximum:[0,6],maxlength:6,maxnumnod:[0,6],maxnumslot:0,maxtxblocks:0,mean:2,measur:0,meet:3,member:8,mesh:[0,2,3,8,9],meshbaudr:[0,6],meshdevic:[0,6],meshnetwork:[],messag:[0,2,6,8],messageformat:6,meter:[],method:[2,3,6,8],microprocessor:3,microsemi:3,millisecond:3,minblocktxdelai:0,mind:9,minim:[],minimum:[0,3,6],miss:6,mission:4,mode:[2,6],model:3,modif:[3,8],modifi:[0,8,9],modul:[4,8],modular:9,monitor:6,monitorblocktx:6,monitorformationstatu:6,monitornodeupd:6,more:[0,3,4,6,9],most:3,move:3,msg:6,msgbyte:6,msgcontent:6,msgcounter:6,msgend:6,msgfound:6,msglength:6,msgmaxlength:6,msgout:6,msgparser:[0,5],msgprocessor:6,msgstart:6,multicopt:[],multipl:[2,4,6],multiprocess:5,must:[0,6],name:6,navig:[3,5],necessari:2,necessarili:3,need:[6,8],neg:[],network:[0,3,5,6,8,9],newbyt:6,next:2,nocommandhead:6,nocommandheaderdefin:6,node:[2,3,4,5,6,8],node_id:6,nodecmd:6,nodecomm:5,nodecommintip:0,nodeconfig:[0,5],nodecontrol:[5,9],nodecontrolprocess:8,nodeexecut:5,nodehead:5,nodeid:6,nodeinterface_pb2:5,nodeparam:5,nodest:5,nodestatu:6,nodetool:5,nodeupdatetimeout:[0,6],nolink:6,nomin:[2,6],nominalorbitalel:[],nomorbelem:[],non:6,none:6,normal:[],northern:[],noserialconnect:6,nosocket:6,notallow:6,notat:0,notic:2,number:[0,4,6],numbytestoread:6,nummeshnetwork:[0,6],nummsgsreceiv:6,object:[0,6,8,9],occur:[],off:[0,3,6],offset:[0,6],offsetcheck:6,offsettimeout:0,offsettxinterv:0,offsettyp:6,onc:[2,8],one:[2,3,6],onli:[2,3],onto:3,oper:[0,3,6,9],operatesyncbound:0,option:[0,3],orbit:[2,4],order:6,org:[],organ:4,orient:9,origin:[2,8],other:[0,2,3,4,6,8],our:3,out:2,outgo:[0,2,8],output:6,outsid:[4,6],over:[0,2,3,6,8,9],overriden:6,overs:8,overview:9,own:[2,6],packag:8,packet:6,packformat:6,packhead:6,page:4,pair:[],paper:3,paramet:[2,6,8,9],parammap:6,paramupd:6,pars:[0,3,6,8],parseax25msg:6,parsebodi:6,parsecmdhead:6,parsecmdpayload:6,parsecommand:6,parsedmsg:6,parsehead:6,parsemsg:6,parsemsgmax:[0,6],parser:6,parseserialmsg:6,part:9,particular:[0,3,6,8],pass:[2,3,6,8,9],path:[3,6],pattern:2,payload:6,payloads:6,peer:4,pend:6,per:[0,3,6],percentag:0,perform:[2,6,8,9],perige:[],period:[0,2,3],person:3,pertain:9,pertin:6,pin:[0,6],pipe:6,pipeconn:5,pixhawk:[],pixhawkconfig:[],pixhawknodecontrol:[],place:[4,9],plan:4,platform:[0,3,5,6,8,9],pleas:[0,9],point:[2,4],populateblockresponselist:6,port:[0,6,8,9],portion:[0,2,8],pos:6,poscmdfenc:[],posit:[2,6],positiontim:[],positionupdatefail:[],possibl:[4,9],posttxguardlength:0,potenti:[],power:[2,3],ppspin:6,pre:6,precis:[3,6],preliminari:3,prepar:2,presenc:6,present:[2,6],pretxguardlength:0,prevent:2,previou:[3,6],previous:2,primari:[2,3,4,6,8,9],primarili:3,prior:[0,6],priorit:9,pro:3,proasic3:3,process:[0,3,5,6,8,9],processcommand:6,processfccommand:6,processfcmsg:6,processmsg:6,processnodecommand:6,processnodemsg:6,processor:6,processrxbyt:6,program:4,programm:9,progress:[],propag:3,proper:[6,8],properli:[],proprietari:3,protocol:[0,2,3,5,6,8],prototyp:[],provid:[0,2,3,4,5,6,8],puls:3,purpos:3,put:0,python2:8,python3:8,python:[0,3,4,5],quadcopt:3,qualiti:[3,6],quick:[0,9],quickli:[0,3,9],quiescent:2,raan:[],radio:[0,3,5,9],radiomod:6,radiu:[],rais:6,rang:[2,3,6],rapid:8,rate:0,raw:[6,8],rawbodi:6,rawhead:6,rawmsg:6,reach:[],read:[0,6,8],readabl:[0,9],readbyt:6,readi:3,readili:2,readmsg:6,readnodeid:6,realiz:[],reason:[],rebroadcast:2,receiv:[0,2,3,6,8],recogn:2,reconfigur:[0,2,4,9],rectangular:[],reduc:[3,4],redund:[3,6],ref:[],refer:[0,2,6,9],referencetim:6,reflect:[],regardless:2,region:[],reject:6,rel:3,relai:[3,4,6],reli:3,reliabl:2,reliev:4,remain:2,remaind:[],remov:[3,4,6],repeat:[2,3,6],repeatedli:[],replac:8,report:6,request:[0,6],requir:[0,2,3,4,6,8],reset:6,resetblocktxstatu:6,resettdmaslot:6,resettdmatim:6,resolut:6,resolv:[],respect:6,respond:[],respons:[0,3,6],rest:5,restrict:8,resum:[],retain:3,retransmit:2,retriev:8,router:4,run:[3,6,8,9],rxbuffer:6,rxbuffers:[0,6],rxdelai:0,safeti:[],satellit:4,satfc:[],satfcconfig:[],satformationspec:[],satformationtyp:[],save:2,scheme:[3,6,8],scienc:9,script:[3,8],search:[4,6],second:[0,3,6],section:[0,9],see:0,segment:[2,3],self:6,semi:[],send:[6,8],sendblock:6,sendbuff:6,sendbyt:6,sendcommand:6,senddatablock:6,sender:[],sendfccmd:6,sendmsg:6,sendnodecmd:6,sendtdmacmd:6,sent:[0,2,6,8],separ:9,sequenc:[3,6],serbyt:6,serial:[0,3,5,6,8],serial_line_internet_protocol:[],serialcomm:5,serialconn:6,serialexcept:6,serialize_nodecmds_configrequest:6,serialize_nodecmds_gcscmd:6,serialize_nodecmds_paramupd:6,serialize_tdmacmds_blockdata:6,serialize_tdmacmds_blocktxconfirm:6,serialize_tdmacmds_blocktxrequest:6,serialize_tdmacmds_blocktxrequestrespons:6,serialize_tdmacmds_blocktxstatu:6,serialize_tdmacmds_linkstatu:6,serialize_tdmacmds_linkstatussummari:6,serialize_tdmacmds_meshstatu:6,serialize_tdmacmds_timeoffset:6,serialize_tdmacmds_timeoffsetsummari:6,serialize_testcmds_senddatablock:6,serialutil:6,sermsgpars:6,serv:5,set:[0,6,8,9],setmod:6,setoff:6,setrec:6,setsleep:6,settdmamod:6,settransmit:6,setup:6,setupparam:6,sever:[0,3],sha1:6,shape:[],should:[0,6,8],show:[3,6],showcas:3,shown:[2,4],signal:3,silent:[],similar:8,simpl:[2,3],simpli:[],simplic:3,simplifi:3,simul:[],simultan:[],sinc:[2,6],singl:[2,3,4],situat:[],size:[0,6],sleep:[0,2,6],sleeppin:[0,6],slice:2,slip:6,slipmsg:5,slipmsg_li1:5,slipmsgpars:[5,8],slipmsgparser_li1:5,slot:[0,2,6],slotguardlength:0,slotnum:6,sma:[],small:4,socket:6,softwar:[0,3,4,6,8],some:[0,2,4,8],someth:8,sometim:9,soon:[1,11],sourc:[0,2,3,9],southern:[],space:3,spacecraft:[2,9],special:[6,8],specif:[0,2,3,4,6,8,9],specifi:0,speciic:6,speed:6,stack:3,staletarget:6,standard:[6,8],start:[0,3,4,6],state:6,station:4,statu:[0,6],statustxinterv:0,still:3,stop:0,store:[0,6,8],stream:8,stress:[3,4],string:[0,6],strip:6,structur:[6,9],studi:3,sua:4,sub:[0,2,6],subclass:8,subdivid:[],submodul:5,subpackag:8,subsequ:[],subtyp:6,success:6,suffici:3,suitabl:[3,9],sychron:[],sync:[2,6],synch:[],synchron:[2,3,9],syncpulsemonitorthread:6,synctdmafram:6,system:[2,3],take:[0,6],target:[],targetupdatefail:[],tdma:[2,3,4,6,8],tdmablocktxstatu:6,tdmacmddict:5,tdmacmdprocessor:5,tdmacomm:5,tdmacomm_fpga:5,tdmaconfig:0,tdmamod:6,tdmastat:5,tdmastatu:6,tdmatim:5,technolog:3,terrestri:[],test:[2,3,4,8],testb:3,testcmd:6,testcmddict:5,testcmdprocessor:5,than:[0,6],thei:0,them:6,themselv:9,therefor:3,thi:[0,2,3,4,5,6,8,9],third:3,those:6,though:0,thread:6,three:[],through:[2,6],throughput:[4,9],thu:8,tight:[],time:[0,2,3,6,9],timerupd:6,timestamp:6,toggl:[],topic:3,topolog:4,total:6,toward:3,transfer:[0,6,8],transit:[],transmiss:[0,2,6,8],transmit:[0,2,3,6],transmitt:[0,3],tupl:6,turn:[0,3,8],twice:0,two:[3,5,9],txbaudrat:0,txinterv:6,txlength:0,type:[0,3,4,6,8,9],typic:0,uart:3,uartnumbytestoread:6,uass:3,uav:[],udp:[0,6,8],udpradio:5,uhf:3,uml:[],uniqu:[2,6],unit:9,univers:3,unman:[3,4],until:[0,6],updat:[0,6],updatemod:6,updatenodemsgrcvdstatu:6,upon:[6,8],usag:[2,3],use:[3,4,5,8,9],useabl:8,used:[0,2,3,5,6,8,9],usel:6,user:0,uses:[8,9],using:[2,3,6,8,9],util:8,valid:[0,6],validateblocktxrequest:6,valu:[0,6,9],variabl:6,variant:8,variat:2,varieti:9,variou:[4,8],vector:6,vectorr:[],vehicl:[0,3,5,6,8,9],vehspac:[],versa:9,version:9,versu:3,vertic:[],vhdl:[3,4,8],vhsic:9,via:[3,8],vice:9,wai:[],wait:0,wait_for_edg:6,wake:6,well:[3,9],were:[3,4],western:[],what:2,when:[0,2,3,8],where:[2,6],whether:[0,6],which:[0,3,5,6,8,9],whose:6,wide:[2,3,9],widespread:3,wifi:3,wiki:[],wikipedia:[],wire:6,wireless:[],wish:8,within:[2,3],without:[0,2,3,4,6,9],would:[0,2,3,5,9],wrap:6,wrapper:[6,8],write:6,xbee:[3,6],xbeeradio:5,yet:3,zigbe:3},titles:["Configuration","C++","Network Design","Hardware Implementations","Mesh Network Communication System Documentation","mesh package","mesh.generic package","mesh.interface package","Python","Software","Unit Testing","VHDL"],titleterms:{"function":[],api:[8,9],applic:9,block:[],checksum:6,cmd:6,cmddict:[6,8],cmdprocessor:[6,8],cmdstatu:6,code:[],comm:[],command:6,commandmsg:6,commandtyp:6,common:9,commport:6,commprocessor:[6,8],commun:4,configur:[0,9],constant:6,content:[4,5,6,7],current:3,customexcept:6,data:2,descript:9,deseri:6,design:2,detail:8,document:4,execut:8,file:0,fly:[],format:[],formationclock:6,fpgaradio:6,fy2014:3,fy2015:3,fy2016:[],gener:[3,6],gpio:6,hardwar:3,implement:3,indic:4,interfac:[0,7,9],li1radio:6,li1radiocmd:6,mesh:[4,5,6,7],modul:[5,6,7],msgparser:[6,8],msgprocessor:[],multiprocess:6,navig:6,network:[2,4],node:0,nodecomm:6,nodeconfig:[6,8],nodecontrol:[6,8],nodeexecut:[6,8],nodehead:6,nodeinterface_pb2:7,nodeparam:[6,8],nodest:6,nodetool:6,packag:[5,6,7],paramet:0,pipeconn:6,pixhawk:[],program:9,python:[8,9],radio:[6,8],relai:2,serialcomm:[6,8],setup:[],slipmsg:6,slipmsg_li1:6,slipmsgpars:6,slipmsgparser_li1:6,softwar:9,sourc:[],spacecraft:[],submodul:[6,7],subpackag:5,system:4,tabl:4,tdma:0,tdmacmddict:6,tdmacmdprocessor:6,tdmacomm:6,tdmacomm_fpga:6,tdmastat:6,tdmatim:6,test:[9,10],testcmddict:6,testcmdprocessor:6,topolog:2,transmit:[],udpradio:6,unit:10,vhdl:[9,11],welcom:[],xbeeradio:6}})