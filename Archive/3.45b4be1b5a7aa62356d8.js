(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{QKVY:function(e,t,i){"use strict";i.d(t,"a",function(){return l}),i.d(t,"b",function(){return b}),i.d(t,"c",function(){return d});var n=i("fXoL"),a=i("ofXK");const o=["video"],s=["canvas"];function r(e,t){if(1&e){const e=n.Qb();n.Pb(0,"div",6),n.Xb("click",function(){return n.jc(e),n.Zb().rotateVideoInput(!0)}),n.Ob()}}class c{constructor(e,t,i){this._mimeType=null,this._imageAsBase64=null,this._imageAsDataUrl=null,this._imageData=null,this._mimeType=t,this._imageAsDataUrl=e,this._imageData=i}static getDataFromDataUrl(e,t){return e.replace(`data:${t};base64,`,"")}get imageAsBase64(){return this._imageAsBase64?this._imageAsBase64:this._imageAsBase64=c.getDataFromDataUrl(this._imageAsDataUrl,this._mimeType)}get imageAsDataUrl(){return this._imageAsDataUrl}get imageData(){return this._imageData}}class d{static getAvailableVideoInputs(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?new Promise((e,t)=>{navigator.mediaDevices.enumerateDevices().then(t=>{e(t.filter(e=>"videoinput"===e.kind))}).catch(e=>{t(e.message||e)})}):Promise.reject("enumerateDevices() not supported.")}}let l=(()=>{class e{constructor(){this.width=640,this.height=480,this.videoOptions=e.DEFAULT_VIDEO_OPTIONS,this.allowCameraSwitch=!0,this.captureImageData=!1,this.imageType=e.DEFAULT_IMAGE_TYPE,this.imageQuality=e.DEFAULT_IMAGE_QUALITY,this.imageCapture=new n.o,this.initError=new n.o,this.imageClick=new n.o,this.cameraSwitched=new n.o,this.availableVideoInputs=[],this.videoInitialized=!1,this.activeVideoInputIndex=-1,this.mediaStream=null,this.activeVideoSettings=null}set trigger(e){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.triggerSubscription=e.subscribe(()=>{this.takeSnapshot()})}set switchCamera(e){this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe(),this.switchCameraSubscription=e.subscribe(e=>{"string"==typeof e?this.switchToVideoInput(e):this.rotateVideoInput(!1!==e)})}static getMediaConstraintsForDevice(e,t){const i=t||this.DEFAULT_VIDEO_OPTIONS;return e&&(i.deviceId={exact:e}),i}static getDeviceIdFromMediaStreamTrack(t){if(t.getSettings&&t.getSettings()&&t.getSettings().deviceId)return t.getSettings().deviceId;if(t.getConstraints&&t.getConstraints()&&t.getConstraints().deviceId){const i=t.getConstraints().deviceId;return e.getValueFromConstrainDOMString(i)}}static getFacingModeFromMediaStreamTrack(t){if(t){if(t.getSettings&&t.getSettings()&&t.getSettings().facingMode)return t.getSettings().facingMode;if(t.getConstraints&&t.getConstraints()&&t.getConstraints().facingMode){const i=t.getConstraints().facingMode;return e.getValueFromConstrainDOMString(i)}}}static isUserFacing(t){const i=e.getFacingModeFromMediaStreamTrack(t);return!!i&&"user"===i.toLowerCase()}static getValueFromConstrainDOMString(e){if(e){if(e instanceof String)return String(e);if(Array.isArray(e)&&Array(e).length>0)return String(e[0]);if("object"==typeof e){if(e.exact)return String(e.exact);if(e.ideal)return String(e.ideal)}}return null}ngAfterViewInit(){this.detectAvailableDevices().then(()=>{this.switchToVideoInput(null)}).catch(e=>{this.initError.next({message:e}),this.switchToVideoInput(null)})}ngOnDestroy(){this.stopMediaTracks(),this.unsubscribeFromSubscriptions()}takeSnapshot(){const t=this.nativeVideoElement,i={width:this.width,height:this.height};t.videoWidth&&(i.width=t.videoWidth,i.height=t.videoHeight);const n=this.canvas.nativeElement;n.width=i.width,n.height=i.height;const a=n.getContext("2d");a.drawImage(t,0,0);const o=this.imageType?this.imageType:e.DEFAULT_IMAGE_TYPE,s=n.toDataURL(o,this.imageQuality?this.imageQuality:e.DEFAULT_IMAGE_QUALITY);let r=null;this.captureImageData&&(r=a.getImageData(0,0,n.width,n.height)),this.imageCapture.next(new c(s,o,r))}rotateVideoInput(e){this.availableVideoInputs&&this.availableVideoInputs.length>1&&this.switchToVideoInput(this.availableVideoInputs[(this.activeVideoInputIndex+(e?1:this.availableVideoInputs.length-1))%this.availableVideoInputs.length].deviceId)}switchToVideoInput(e){this.videoInitialized=!1,this.stopMediaTracks(),this.initWebcam(e,this.videoOptions)}videoResize(){}get videoWidth(){const e=this.getVideoAspectRatio();return Math.min(this.width,this.height*e)}get videoHeight(){const e=this.getVideoAspectRatio();return Math.min(this.height,this.width/e)}get videoStyleClasses(){let e="";return this.isMirrorImage()&&(e+="mirrored "),e.trim()}get nativeVideoElement(){return this.video.nativeElement}getVideoAspectRatio(){const e=this.nativeVideoElement;return e.videoWidth&&e.videoWidth>0&&e.videoHeight&&e.videoHeight>0?e.videoWidth/e.videoHeight:this.width/this.height}initWebcam(t,i){const n=this.nativeVideoElement;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const a=e.getMediaConstraintsForDevice(t,i);navigator.mediaDevices.getUserMedia({video:a}).then(t=>{this.mediaStream=t,n.srcObject=t,n.play(),this.activeVideoSettings=t.getVideoTracks()[0].getSettings();const i=e.getDeviceIdFromMediaStreamTrack(t.getVideoTracks()[0]);this.cameraSwitched.next(i),this.detectAvailableDevices().then(()=>{this.activeVideoInputIndex=i?this.availableVideoInputs.findIndex(e=>e.deviceId===i):-1,this.videoInitialized=!0}).catch(()=>{this.activeVideoInputIndex=-1,this.videoInitialized=!0})}).catch(e=>{this.initError.next({message:e.message,mediaStreamError:e})})}else this.initError.next({message:"Cannot read UserMedia from MediaDevices."})}getActiveVideoTrack(){return this.mediaStream?this.mediaStream.getVideoTracks()[0]:null}isMirrorImage(){if(!this.getActiveVideoTrack())return!1;{let e="auto";switch(this.mirrorImage&&("string"==typeof this.mirrorImage?e=String(this.mirrorImage).toLowerCase():this.mirrorImage.x&&(e=this.mirrorImage.x.toLowerCase())),e){case"always":return!0;case"never":return!1}}return e.isUserFacing(this.getActiveVideoTrack())}stopMediaTracks(){this.mediaStream&&this.mediaStream.getTracks&&this.mediaStream.getTracks().forEach(e=>e.stop())}unsubscribeFromSubscriptions(){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe()}detectAvailableDevices(){return new Promise((e,t)=>{d.getAvailableVideoInputs().then(t=>{this.availableVideoInputs=t,e(t)}).catch(e=>{this.availableVideoInputs=[],t(e)})})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["webcam"]],viewQuery:function(e,t){if(1&e&&(n.rc(o,3),n.rc(s,3)),2&e){let e;n.hc(e=n.Yb())&&(t.video=e.first),n.hc(e=n.Yb())&&(t.canvas=e.first)}},inputs:{width:"width",height:"height",videoOptions:"videoOptions",allowCameraSwitch:"allowCameraSwitch",captureImageData:"captureImageData",imageType:"imageType",imageQuality:"imageQuality",trigger:"trigger",switchCamera:"switchCamera",mirrorImage:"mirrorImage"},outputs:{imageCapture:"imageCapture",initError:"initError",imageClick:"imageClick",cameraSwitched:"cameraSwitched"},decls:6,vars:7,consts:[[1,"webcam-wrapper",3,"click"],["autoplay","","muted","","playsinline","",3,"width","height","resize"],["video",""],["class","camera-switch",3,"click",4,"ngIf"],[3,"width","height"],["canvas",""],[1,"camera-switch",3,"click"]],template:function(e,t){1&e&&(n.Pb(0,"div",0),n.Xb("click",function(){return t.imageClick.next()}),n.Pb(1,"video",1,2),n.Xb("resize",function(){return t.videoResize()}),n.Ob(),n.mc(3,r,1,0,"div",3),n.Lb(4,"canvas",4,5),n.Ob()),2&e&&(n.zb(1),n.Bb(t.videoStyleClasses),n.ec("width",t.videoWidth)("height",t.videoHeight),n.zb(2),n.ec("ngIf",t.allowCameraSwitch&&t.availableVideoInputs.length>1&&t.videoInitialized),n.zb(1),n.ec("width",t.width)("height",t.height))},directives:[a.k],styles:['.webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;line-height:0;position:relative}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1);background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC");background-position:50%;background-repeat:no-repeat;background-size:80%;border-radius:5px;cursor:pointer;height:48px;position:absolute;right:13px;top:10px;transition:background-color .2s ease;width:48px}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.18)}']}),e.DEFAULT_VIDEO_OPTIONS={facingMode:"environment"},e.DEFAULT_IMAGE_TYPE="image/jpeg",e.DEFAULT_IMAGE_QUALITY=.92,e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({imports:[[a.b]]}),e})()},gpqs:function(e,t,i){"use strict";i.d(t,"a",function(){return C});var n=i("mrSG"),a=i("fXoL"),o=i("XNiG"),s=i("QKVY"),r=i("vDqi"),c=i.n(r),d=i("U8hz"),l=i("wd/R"),b=i("tyNb"),h=i("TEn/"),g=i("ofXK"),u=i("3Pt+");function m(e,t){1&e&&(a.Pb(0,"ion-title"),a.nc(1," Add new patient "),a.Ob())}function p(e,t){if(1&e&&(a.Pb(0,"ion-title"),a.nc(1),a.Ob()),2&e){const e=a.Zb();a.zb(1),a.pc(" ",e.data.name," ")}}function f(e,t){1&e&&(a.Pb(0,"ion-buttons",34),a.Pb(1,"ion-button",35),a.Lb(2,"ion-icon",36),a.nc(3," ADD NEW TEST "),a.Ob(),a.Ob())}function v(e,t){if(1&e&&(a.Pb(0,"ion-select-option",37),a.nc(1),a.Ob()),2&e){const e=t.$implicit;a.ec("value",e.idNationality),a.zb(1),a.oc(e.nationalName)}}function O(e,t){1&e&&a.Lb(0,"img",38)}function w(e,t){if(1&e&&a.Lb(0,"img",39),2&e){const e=a.Zb();a.ec("src",e.api+e.data.documentPhoto.photoPath,a.kc)}}function P(e,t){if(1&e&&a.Lb(0,"img",40),2&e){const e=a.Zb();a.ec("src",e.snapshot,a.kc)}}function I(e,t){if(1&e){const e=a.Qb();a.Pb(0,"webcam",41),a.Xb("imageCapture",function(t){return a.jc(e),a.Zb().handleImage(t)})("cameraSwitched",function(t){return a.jc(e),a.Zb().cameraWasSwitched(t)})("initError",function(t){return a.jc(e),a.Zb().handleInitError(t)}),a.Ob()}if(2&e){const e=a.Zb();a.ec("height",300)("width",300)("trigger",e.triggerObservable)("allowCameraSwitch",e.allowCameraSwitch)("switchCamera",e.nextWebcamObservable)("videoOptions",e.videoOptions)}}function A(e,t){if(1&e){const e=a.Qb();a.Pb(0,"ion-button",42),a.Xb("click",function(){return a.jc(e),a.Zb().triggerSnapshot()}),a.Lb(1,"ion-icon",43),a.nc(2," ADD PATIENT PHOTO "),a.Ob()}}function S(e,t){if(1&e){const e=a.Qb();a.Pb(0,"ion-button",44),a.Xb("click",function(){return a.jc(e),a.Zb().retakePhoto()}),a.Lb(1,"ion-icon",45),a.nc(2," RETAKE PATIENT PHOTO "),a.Ob()}}let C=(()=>{class e{constructor(e,t,i){this.route=e,this.loadingCtrl=t,this.alertCtrl=i,this.pictureTaken=new a.o,this.showWebcam=!0,this.allowCameraSwitch=!0,this.multipleWebcamsAvailable=!1,this.videoOptions={},this.errors=[],this.trigger=new o.a,this.nextWebcam=new o.a,this.isNewPatient=!0,this.snapshot="",this.data={name:"",enName:"",gender:null,address:"",dob:null,phone:null,weight:null,height:null,relationship:null,nationalityId:0,documentId:null,email:"",smoker:0,fasting:0,munaId:null,certificateNo:null,createdBy:"1",documentPhoto:{photoPath:""}},this.files=null,this.documentImage="",this.muna=!1,this.documentName="",this.api=d.a,this.nationalities=[]}triggerSnapshot(){this.trigger.next()}toggleWebcam(){this.showWebcam=!this.showWebcam}handleInitError(e){this.errors.push(e)}showNextWebcam(e){this.nextWebcam.next(e)}handleImage(e){console.info("received webcam image",e),this.pictureTaken.emit(e),this.snapshot=e.imageAsDataUrl,this.toggleWebcam()}cameraWasSwitched(e){console.log("active device: "+e),this.deviceId=e}get triggerObservable(){return this.trigger.asObservable()}get nextWebcamObservable(){return this.nextWebcam.asObservable()}ngOnInit(){console.log(this.id),c.a.get(d.a+"nationalities").then(e=>{this.nationalities=e.data}).catch(e=>{console.log(e)}),s.c.getAvailableVideoInputs().then(e=>{this.multipleWebcamsAvailable=e&&e.length>1}),this.route.paramMap.subscribe(e=>Object(n.a)(this,void 0,void 0,function*(){if("new"!=e.params.id){let t=yield this.loadingCtrl.create({message:"Please wait..."});yield t.present(),this.isNewPatient=!1,c.a.get(d.a+"patient/"+e.params.id).then(e=>{this.data=e.data,this.snapshot=d.a+e.data.image.photoPath,this.toggleWebcam()}).finally(()=>Object(n.a)(this,void 0,void 0,function*(){yield t.dismiss()}))}}))}retakePhoto(){this.snapshot="",this.toggleWebcam()}onFileChange(e){this.files=e.target.files,console.log(e.target.files[0]),this.documentName=e.target.files[0].name}fixDate(){this.data.dob=l(this.data.dob).format("YYYY-MM-DD")}save(){return Object(n.a)(this,void 0,void 0,function*(){let e=yield this.loadingCtrl.create({message:"Please wait..."});yield e.present(),this.muna?c.a.post(d.b+"identities",JSON.stringify({data:{type:"identity",attributes:{email:this.data.email,passport:this.data.documentId}}})).then(e=>{this.data.munaId=e.data.data.id,this.saveToDb()}).catch(e=>{console.log(e)}).finally(()=>Object(n.a)(this,void 0,void 0,function*(){yield e.dismiss()})):(this.saveToDb(),yield e.dismiss())})}ionViewWillLeave(){""==this.snapshot&&(this.showWebcam=!1)}saveToDb(){return Object(n.a)(this,void 0,void 0,function*(){var e=new FormData;e.append("patient",JSON.stringify(this.data)),e.append("image",this.snapshot),null!=this.files&&e.append("document",this.files[0]),c()({method:"post",url:d.a+"addPatient",data:e,headers:{"Content-Type":"multipart/form-data"}}).then(e=>Object(n.a)(this,void 0,void 0,function*(){console.log(e);let t=yield this.alertCtrl.create({header:"Patient added successfully.",message:"Do you want to submit a new test for this patient?",buttons:[{text:"Yes",handler:()=>{}},{text:"No",role:"cancel"}]});yield t.present()})).catch(e=>Object(n.a)(this,void 0,void 0,function*(){let e=yield this.alertCtrl.create({header:"Error",subHeader:"Please check all required fields."});yield e.present()})).finally(()=>Object(n.a)(this,void 0,void 0,function*(){}))})}generateEmail(){this.data.email=this.data.documentId+".nationallab@gmail.com"}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(b.a),a.Kb(h.V),a.Kb(h.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-patient"]],outputs:{pictureTaken:"pictureTaken"},decls:132,vars:25,consts:[[4,"ngIf"],["slot","end",4,"ngIf"],["slot","start"],[1,"ion-padding"],["fixed",""],["size","6"],["mode","ios"],["position","floating"],["color","danger"],["required","",3,"ngModel","ngModelChange"],["mode","md","displayFormat","YYYY-MM-DD",3,"ngModel","ionChange","ngModelChange"],["mode","md","placeholder","Select One",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["value","1"],["value","0"],["required","",3,"ngModel","ionChange","ngModelChange"],["slot","end","fill","clear",3,"click"],["slot","start","name","scan"],["type","file","id","fileUpload",2,"display","none",3,"change"],["fileSelect",""],["src","assets/icon/passport.jpeg","alt","",4,"ngIf"],["alt","",3,"src",4,"ngIf"],["type","number","required","",3,"ngModel","ngModelChange"],["type","number",3,"ngModel","ngModelChange"],["slot","end",3,"ngModel","ngModelChange"],["mode","md","value","0","placeholder","Select One",3,"ngModel","ngModelChange"],["src","../../assets/icon/muna.svg","alt",""],["style","width: 300px; border-radius: 20px;","alt","",3,"src",4,"ngIf"],[3,"height","width","trigger","allowCameraSwitch","switchCamera","videoOptions","imageCapture","cameraSwitched","initError",4,"ngIf"],["expand","block",3,"click",4,"ngIf"],["color","warning","expand","block",3,"click",4,"ngIf"],["mode","ios","vertical","top","horizontal","end","slot","fixed"],["color","success",3,"click"],["name","checkmark"],["slot","end"],["fill","solid","color","success","routerLink","/tests"],["slot","start","name","add"],[3,"value"],["src","assets/icon/passport.jpeg","alt",""],["alt","",3,"src"],["alt","",2,"width","300px","border-radius","20px",3,"src"],[3,"height","width","trigger","allowCameraSwitch","switchCamera","videoOptions","imageCapture","cameraSwitched","initError"],["expand","block",3,"click"],["slot","start","name","camera-outline"],["color","warning","expand","block",3,"click"],["slot","start","name","camera-reverse-outline"]],template:function(e,t){if(1&e){const e=a.Qb();a.Pb(0,"ion-header"),a.Pb(1,"ion-toolbar"),a.mc(2,m,2,0,"ion-title",0),a.mc(3,p,2,1,"ion-title",0),a.mc(4,f,4,0,"ion-buttons",1),a.Pb(5,"ion-buttons",2),a.Lb(6,"ion-back-button"),a.Ob(),a.Ob(),a.Ob(),a.Pb(7,"ion-content",3),a.Pb(8,"ion-grid",4),a.Pb(9,"ion-row"),a.Pb(10,"ion-col",5),a.Pb(11,"ion-card",6),a.Pb(12,"ion-card-content"),a.Pb(13,"ion-list-header"),a.Pb(14,"ion-label"),a.nc(15,"PERSONAL INFO"),a.Ob(),a.Ob(),a.Pb(16,"ion-list"),a.Pb(17,"ion-item"),a.Pb(18,"ion-label",7),a.nc(19,"Full name "),a.Pb(20,"ion-text",8),a.nc(21,"*"),a.Ob(),a.Ob(),a.Pb(22,"ion-input",9),a.Xb("ngModelChange",function(e){return t.data.name=e}),a.Ob(),a.Ob(),a.Pb(23,"ion-item"),a.Pb(24,"ion-label",7),a.nc(25,"Second language name "),a.Pb(26,"ion-text",8),a.nc(27,"*"),a.Ob(),a.Ob(),a.Pb(28,"ion-input",9),a.Xb("ngModelChange",function(e){return t.data.enName=e}),a.Ob(),a.Ob(),a.Pb(29,"ion-item"),a.Pb(30,"ion-label",7),a.nc(31,"Birthdate "),a.Pb(32,"ion-text",8),a.nc(33,"*"),a.Ob(),a.Ob(),a.Pb(34,"ion-datetime",10),a.Xb("ionChange",function(){return t.fixDate()})("ngModelChange",function(e){return t.data.dob=e}),a.Ob(),a.Ob(),a.Lb(35,"br"),a.Pb(36,"ion-item"),a.Pb(37,"ion-label"),a.nc(38,"Nationality "),a.Pb(39,"ion-text",8),a.nc(40,"*"),a.Ob(),a.Ob(),a.Pb(41,"ion-select",11),a.Xb("ngModelChange",function(e){return t.data.nationalityId=e}),a.mc(42,v,2,2,"ion-select-option",12),a.Ob(),a.Ob(),a.Lb(43,"br"),a.Pb(44,"ion-item"),a.Pb(45,"ion-label"),a.nc(46,"Gender "),a.Pb(47,"ion-text",8),a.nc(48,"*"),a.Ob(),a.Ob(),a.Pb(49,"ion-select",11),a.Xb("ngModelChange",function(e){return t.data.gender=e}),a.Pb(50,"ion-select-option",13),a.nc(51,"Female"),a.Ob(),a.Pb(52,"ion-select-option",14),a.nc(53,"Male"),a.Ob(),a.Ob(),a.Ob(),a.Lb(54,"br"),a.Pb(55,"ion-item"),a.Pb(56,"ion-label"),a.nc(57,"Document ID "),a.Pb(58,"ion-text",8),a.nc(59,"*"),a.Ob(),a.Ob(),a.Pb(60,"ion-input",15),a.Xb("ionChange",function(){return t.generateEmail()})("ngModelChange",function(e){return t.data.documentId=e}),a.Ob(),a.Pb(61,"ion-button",16),a.Xb("click",function(){return a.jc(e),a.ic(66).click()}),a.Lb(62,"ion-icon",17),a.nc(63," SCAN "),a.Ob(),a.Ob(),a.nc(64),a.Pb(65,"input",18,19),a.Xb("change",function(e){return t.onFileChange(e)}),a.Ob(),a.mc(67,O,1,0,"img",20),a.mc(68,w,1,1,"img",21),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(69,"ion-col",5),a.Pb(70,"ion-card",6),a.Pb(71,"ion-card-content"),a.Pb(72,"ion-list-header"),a.Pb(73,"ion-label"),a.nc(74,"ADDITIONAL INFO"),a.Ob(),a.Ob(),a.Pb(75,"ion-item"),a.Pb(76,"ion-label",7),a.nc(77,"Phone "),a.Pb(78,"ion-text",8),a.nc(79,"*"),a.Ob(),a.Ob(),a.Pb(80,"ion-input",22),a.Xb("ngModelChange",function(e){return t.data.phone=e}),a.Ob(),a.Ob(),a.Pb(81,"ion-item"),a.Pb(82,"ion-label",7),a.nc(83,"Address "),a.Pb(84,"ion-text",8),a.nc(85,"*"),a.Ob(),a.Ob(),a.Pb(86,"ion-input",22),a.Xb("ngModelChange",function(e){return t.data.address=e}),a.Ob(),a.Ob(),a.Pb(87,"ion-item"),a.Pb(88,"ion-label",7),a.nc(89,"Email address "),a.Pb(90,"ion-text",8),a.nc(91,"*"),a.Ob(),a.Ob(),a.Pb(92,"ion-input",9),a.Xb("ngModelChange",function(e){return t.data.email=e}),a.Ob(),a.Ob(),a.Pb(93,"ion-row"),a.Pb(94,"ion-col",5),a.Pb(95,"ion-item"),a.Pb(96,"ion-label",7),a.nc(97,"Height"),a.Ob(),a.Pb(98,"ion-input",23),a.Xb("ngModelChange",function(e){return t.data.height=e}),a.Ob(),a.Ob(),a.Ob(),a.Pb(99,"ion-col",5),a.Pb(100,"ion-item"),a.Pb(101,"ion-label",7),a.nc(102,"Weight"),a.Ob(),a.Pb(103,"ion-input",23),a.Xb("ngModelChange",function(e){return t.data.weight=e}),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Lb(104,"br"),a.Pb(105,"ion-item"),a.Pb(106,"ion-label"),a.nc(107,"Is patient a smoker"),a.Ob(),a.Pb(108,"ion-toggle",24),a.Xb("ngModelChange",function(e){return t.data.smoker=e}),a.Ob(),a.Ob(),a.Lb(109,"br"),a.Pb(110,"ion-item"),a.Pb(111,"ion-label"),a.nc(112,"Relationship"),a.Ob(),a.Pb(113,"ion-select",25),a.Xb("ngModelChange",function(e){return t.data.relationship=e}),a.Pb(114,"ion-select-option",14),a.nc(115,"Single"),a.Ob(),a.Pb(116,"ion-select-option",13),a.nc(117,"Married"),a.Ob(),a.Ob(),a.Ob(),a.Lb(118,"br"),a.Pb(119,"ion-item"),a.Lb(120,"img",26),a.Pb(121,"ion-label"),a.nc(122," \xa0 \xa0 Integrate with MUNA"),a.Ob(),a.Pb(123,"ion-toggle",24),a.Xb("ngModelChange",function(e){return t.muna=e}),a.Ob(),a.Ob(),a.Lb(124,"br"),a.mc(125,P,1,1,"img",27),a.mc(126,I,1,6,"webcam",28),a.mc(127,A,3,0,"ion-button",29),a.mc(128,S,3,0,"ion-button",30),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(129,"ion-fab",31),a.Pb(130,"ion-fab-button",32),a.Xb("click",function(){return t.save()}),a.Lb(131,"ion-icon",33),a.Ob(),a.Ob(),a.Ob()}2&e&&(a.zb(2),a.ec("ngIf",t.isNewPatient),a.zb(1),a.ec("ngIf",!t.isNewPatient&&""!=t.data.name),a.zb(1),a.ec("ngIf",!t.isNewPatient&&""!=t.data.name),a.zb(18),a.ec("ngModel",t.data.name),a.zb(6),a.ec("ngModel",t.data.enName),a.zb(6),a.ec("ngModel",t.data.dob),a.zb(7),a.ec("ngModel",t.data.nationalityId),a.zb(1),a.ec("ngForOf",t.nationalities),a.zb(7),a.ec("ngModel",t.data.gender),a.zb(11),a.ec("ngModel",t.data.documentId),a.zb(4),a.pc(" ",t.documentName," "),a.zb(3),a.ec("ngIf",t.isNewPatient),a.zb(1),a.ec("ngIf",!t.isNewPatient),a.zb(12),a.ec("ngModel",t.data.phone),a.zb(6),a.ec("ngModel",t.data.address),a.zb(6),a.ec("ngModel",t.data.email),a.zb(6),a.ec("ngModel",t.data.height),a.zb(5),a.ec("ngModel",t.data.weight),a.zb(5),a.ec("ngModel",t.data.smoker),a.zb(5),a.ec("ngModel",t.data.relationship),a.zb(10),a.ec("ngModel",t.muna),a.zb(2),a.ec("ngIf",""!=t.snapshot),a.zb(1),a.ec("ngIf",t.showWebcam),a.zb(1),a.ec("ngIf",""==t.snapshot),a.zb(1),a.ec("ngIf",""!=t.snapshot))},directives:[h.t,h.S,g.k,h.h,h.e,h.f,h.n,h.s,h.F,h.m,h.i,h.j,h.z,h.x,h.y,h.w,h.O,h.v,h.ab,u.f,u.d,u.e,h.o,h.Z,h.J,g.j,h.K,h.g,h.u,h.X,h.R,h.b,h.p,h.q,h.Q,h.Y,b.h,s.a],styles:[""]}),e})()}}]);